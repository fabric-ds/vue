<template>
  <transition name="fade">
    <div :class="classes.backdrop" v-if="showModal" @click.self="emitDismiss" ref="modalEl">
      <transition name="slide">
        <div v-if="showContent" :class="classes.modal" tabindex="-1" aria-modal="true" role="dialog">
          <div v-if="$slots.title || title || $slots.right || right" :class="classes.title">
            <transition-group name="title">
              <!-- what should we call these areas? -->
              <div v-if="$slots.left || left" class="title-child justify-self-start" key="left">
                <button :class="[classes.titleButton, classes.titleButtonLeft]" @click="$emit('left')">
                  <svg v-if="!$slots.left" :class="[classes.titleButtonIcon, 'transform rotate-90']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="nonzero" d="M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"></path></svg>
                  <slot name="left" />
                </button>
              </div>
              <div class="title-child" :class="{ 'justify-self-center': left, 'col-span-2': !left }" key="title">
                <p :class="classes.titleText" v-if="title">{{ title }}</p>
                <slot name="title" />
              </div>
              <div v-if="$slots.right || right" class="title-child justify-self-end" key="right">
                <button :class="[classes.titleButton, classes.titleButtonRight]" @click="$emit('right')">
                  <svg v-if="!$slots.right" :class="classes.titleButtonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"/></svg>
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
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'
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
    const showModal = ref(false)
    const showContent = ref(false)
    const emitDismiss = () => emit('dismiss')
    const emitIfEscape = e => {
      if (e.keyCode === escape) emitDismiss()
    }

    // because we have nested transitions we need to fire this in order
    // we use nextTick to ensure DOM elements are available
    async function handleTransitions(showing) {
      if (showing) showModal.value = showing
      else showContent.value = showing
      await nextTick()
      if (showing) showContent.value = showing
      else showModal.value = showing
      await nextTick()
    }

    async function handleShow(showing) {
      await handleTransitions(showing)
      focusLock[showing ? 'on' : 'off'](modalEl.value)
      document?.querySelector('body').classList[showing ? 'add' : 'remove']('f-modal-showing')
      if (showing) {
        addEventListener('keydown', emitIfEscape, { passive: true })
        disableBodyScroll(contentEl.value)
      } else {
        removeEventListener('keydown', emitIfEscape)
        clearAllBodyScrollLocks()
      }
    }

    watch(() => props.modelValue, handleShow)
    onBeforeUnmount(async () => handleShow(false))

    return {
      classes,
      modalEl,
      emitDismiss,
      contentEl,
      showModal,
      showContent
    }
  }
}
</script>

<style scoped>
.f-modal-backdrop {
  --f-modal-max-height: 80vh;
  --f-modal-width: 640px;
  background-color: rgba(0, 0, 0, 0.35);
}
.f-modal {
  max-height: var(--f-modal-max-height);
  height: var(--f-modal-height);
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
.content-slot :slotted(*:last-child) {
  margin-bottom: 0;
}
:global(.f-modal-showing) {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.smaller-mobile-kill-sometime {
  @media (max-width: 480px) {
    min-width: 32px;
    min-height: 32px;
  }
}
/* vue-specific transitions handlers */
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

  @media (min-width: 480px) {
    transform: translateY(50%);
  }
}
</style>
