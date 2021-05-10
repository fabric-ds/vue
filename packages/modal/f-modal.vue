<template>
  <div :class="[classes.backdrop, 'f-modal']" v-if="modelValue" @click.self="emitDismiss" ref="modalEl" @keyup.esc="emitDismiss">
    <div class="space-y-16 py-16 sm:py-32 rounded-b-0 sm:rounded-b-8" :class="[classes.modal]" tabindex="-1" aria-modal="true" role="dialog">
      <!-- what should the real conditional here be? -->
      <div v-if="$slots.title || title || $slots.right || right" class="-mt-4 sm:-mt-8 h-32 sm:h-48 grid grid-cols-3 items-center px-16 sm:px-32 border-b sm:border-b-0">
        <transition-group name="title">
          <!-- what should we call these areas? -->
          <div v-if="$slots.left || left" class="title-child justify-self-start" key="left">
            <button class="button button--pill -ml-8 sm:-ml-12" @click="$emit('left')">
              <svg class="transform rotate-90 h-16 w-16 sm:h-24 sm:w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="nonzero" d="M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"></path></svg>
              <slot name="left" />
            </button>
          </div>
          <div class="title-child" :class="{ 'justify-self-center': left, 'col-span-2': !left }" key="title">
            <p class="mb-0 h4 sm:h3" v-if="title">{{ title }}</p>
            <slot name="title" />
          </div>
          <div v-if="$slots.right || right" class="title-child justify-self-end" key="right">
            <button class="button button--pill -mr-8 sm:-mr-12" @click="$emit('right')">
              <svg class="h-16 w-16 sm:h-24 sm:w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"/></svg>
              <slot name="right" />
            </button>
          </div>
        </transition-group>
      </div>
      <div class="px-16 sm:px-32" :class="[classes.content, 'default slot']" v-if="$slots.default">
        <slot />
      </div>
      <div class="px-16 sm:px-32" :class="[classes.footer, 'footer slot']" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { modal as classes } from '@finn-no/fabric-component-classes'
import focusLock from 'dom-focus-lock'

export default {
  name: 'fModal',
  props: {
    left: Boolean,
    right: Boolean,
    title: String,
    modelValue: Boolean
  },
  emits: ['dismiss', 'left', 'right'],
  setup(props, { emit }) {
    const modalEl = ref(null)
    watch(() => props.modelValue, async (showing) => {
      await nextTick() // wait for the DOM to update so that modalEl exists
      focusLock[showing ? 'on' : 'off'](modalEl.value)
      document?.querySelector('body').classList[showing ? 'add' : 'remove']('modal-showing')
    })

    return {
      classes,
      modalEl,
      emitDismiss: () => emit('dismiss')
    }
  }
}
</script>

<style scoped>
/* can we get rid of these and just force a few widths, or set this with TW classes? */
.f-modal {
  --f-modal-max-height: 80vh;
  --f-modal-width: 640px;
}
.modal {
  max-height: var(--f-modal-max-height);
  width: var(--f-modal-width);
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.35);
}
.slot.default :slotted(*:last-child) {
  margin-bottom: 0;
}
:global(.modal-showing) {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.title-child {
  transition: all 0.3s ease;
}
.title-enter-from, .title-leave-to {
  opacity: 0;
  backface-visibility: hidden;
}
.title-leave-active {
  position: absolute;
}
</style>
