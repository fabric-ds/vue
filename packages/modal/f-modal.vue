<template>
  <transition name="fade">
    <div :class="c.backdrop" v-if="showModal" @click.self="emitDismiss">
      <transition name="slide">
        <div v-if="showContent" :class="c.modal" tabindex="-1" aria-modal="true" role="dialog" ref="modalEl">
          <div v-if="$slots.title || title || $slots.right || right" :class="c.title">
            <transition-group name="f-modal-title">
              <div v-if="$slots.left || left" :class="[c.transitionTitle, 'justify-self-start']" key="left">
                <button :class="[c.titleButton, c.titleButtonLeft]" @click="$emit('left')">
                  <svg v-if="!$slots.left" :class="[c.titleButtonIcon, 'transform rotate-90']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="nonzero" d="M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"></path></svg>
                  <slot name="left" />
                </button>
              </div>
              <div :class="{ [c.transitionTitle]: true, 'justify-self-center': left, 'col-span-2': !left }" key="title">
                <p :class="c.titleText" v-if="title">{{ title }}</p>
                <slot name="title" />
              </div>
              <div v-if="$slots.right || right" :class="[c.transitionTitle, 'justify-self-end']" key="right">
                <button :class="[c.titleButton, c.titleButtonRight]" @click="$emit('right')">
                  <svg v-if="!$slots.right" :class="c.titleButtonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"/></svg>
                  <slot name="right" />
                </button>
              </div>
            </transition-group>
          </div>
          <div class="px-16 sm:px-32" :class="[c.content]" v-if="$slots.default" ref="contentEl">
            <slot />
          </div>
          <div class="px-16 sm:px-32" :class="[c.footer]" v-if="$slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'
import { modal as c } from '@finn-no/fabric-component-classes'
import focusLock from 'dom-focus-lock'
import { setup as setupScrollLock, teardown as teardownScrollLock } from 'scroll-doctor'

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

    // vue-ism
    // because we have nested transitions we need to fire this in order
    // we use nextTick to ensure DOM elements are available for later
    async function handleTransitions(showing) {
      if (showing) showModal.value = showing
      else showContent.value = showing
      await nextTick()
      if (showing) showContent.value = showing
      else showModal.value = showing
      await nextTick()
    }

    // change the modal's border radius when within 2% of full height
    const modifyBorderRadius = () => {
      if (modalEl.value.scrollHeight * 1.02 > innerHeight) modalEl.value.style.borderRadius = '0px'
      else modalEl.value.style.borderRadius = null
    }

    async function handleShow(showing) {
      await handleTransitions(showing)
      focusLock[showing ? 'on' : 'off'](modalEl.value)
      if (showing) {
        addEventListener('keydown', emitIfEscape, { passive: true })
        // we do not remove this event listener because the element itself is getting reaped
        modalEl.value.addEventListener('transitionend', modifyBorderRadius, { passive: true })
        setupScrollLock(contentEl.value)
      } else {
        removeEventListener('keydown', emitIfEscape)
        teardownScrollLock()
      }
    }

    watch(() => props.modelValue, handleShow)
    onBeforeUnmount(handleShow)

    return {
      c,
      modalEl,
      emitDismiss,
      contentEl,
      showModal,
      showContent
    }
  }
}
</script>
