<template>
  <!-- <transition name="fade" @after-enter="doIt = true"> -->
  <transition name="fade">
  <div :class="[classes.backdrop, 'f-modal']" v-if="modelValue" @click.self="emitDismiss" ref="modalEl">
    <transition name="slide" @after-enter="tryThing">
    <div class="space-y-16 pt-8 sm:pt-32 f-modal-mobile-padding sm:pb-32 rounded-b-0 sm:rounded-b-8" v-if="doIt" :class="[classes.modal]" tabindex="-1" aria-modal="true" role="dialog">
      <!-- what should the real conditional here be? -->
      <div v-if="$slots.title || title || $slots.right || right" class="-mt-4 sm:-mt-8 h-40 sm:h-48 grid grid-cols-3 items-center px-16 sm:px-32 border-b sm:border-b-0">
        <transition-group name="title">
          <!-- what should we call these areas? -->
          <div v-if="$slots.left || left" class="title-child justify-self-start" key="left">
            <button class="button button--pill -ml-8 sm:-ml-12 smaller-mobile-kill-sometime" @click="$emit('left')">
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
      <div class="px-16 sm:px-32" :class="[classes.content, 'content-slot']" v-if="$slots.default" ref="contentEl">
        <slot />
      </div>
      <div class="px-16 sm:px-32" :class="[classes.footer]" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { modal as classes } from '@finn-no/fabric-component-classes'
import focusLock from 'dom-focus-lock'
import { disableBodyScroll, clearAllBodyScrollLocks } from './scroll-lock'

const escape = 27

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
    const contentEl = ref(null)
    const doIt = ref(false)
    const emitDismiss = () => emit('dismiss')
    const emitIfEscape = e => {
      if (e.keyCode === escape) emitDismiss()
    }

    // TODO: refactor all 'clearing' code to a common method we can call beforeUnmount too
    watch(() => props.modelValue, async (showing) => {
      await nextTick() // wait for the DOM to update so that modalEl exists
      focusLock[showing ? 'on' : 'off'](modalEl.value)
      document?.querySelector('body').classList[showing ? 'add' : 'remove']('modal-showing')
      if (showing) {
        addEventListener('keydown', emitIfEscape, { passive: true })
        // console.log("CONTENT", contentEl.value)
      } else {
        removeEventListener('keydown', emitIfEscape)
        clearAllBodyScrollLocks()
      }

      doIt.value = showing
    })
    const tryThing = () => {
      disableBodyScroll(contentEl.value)
      console.log("READY", contentEl.value)
    }

    return {
      classes,
      modalEl,
      emitDismiss,
      contentEl,
      tryThing,
      doIt
    }
  }
}
</script>

<style scoped>
.f-modal {
  --f-modal-max-height: 80vh;
  --f-modal-width: 640px;
}
.modal {
  max-height: var(--f-modal-max-height);
  width: var(--f-modal-width);
  will-change: max-height;
  backface-visibility: hidden;
  transition: all 0.3s ease;
}
.f-modal-mobile-padding {
  @media (max-width: 480px) {
    padding-bottom: calc(32px + env(safe-area-inset-bottom, 0px));
  }
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.35);
}
.content-slot :slotted(*:last-child) {
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
.smaller-mobile-kill-sometime {
  @media (max-width: 480px) {
    min-width: 32px;
    min-height: 32px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
