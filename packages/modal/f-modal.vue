<template>
  <div :class="[classes.backdrop, 'f-modal']" v-if="modelValue" @click.self="emitDismiss" ref="modalEl" @keyup.esc="emitDismiss">
    <div :class="[classes.modal, 'space-y-32']" tabindex="-1" aria-modal="true">
      <div :class="[classes.content, 'default slot']" v-if="$slots.default">
        <slot />
      </div>
      <div :class="[classes.footer, 'footer slot']" v-if="$slots.footer">
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
    modelValue: Boolean
  },
  emits: ['dismiss'],
  setup(props, { emit }) {
    const modalEl = ref(null)
    watch(() => props.modelValue, async (showing) => {
      await nextTick() // wait for the DOM to update so that modalEl exists
      focusLock[showing ? 'on' : 'off'](modalEl.value)
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
.f-modal {
  --f-modal-padding: 32px;
  --f-modal-max-height: 80vh;
  --f-modal-width: 640px;
}
.modal {
  max-height: var(--f-modal-max-height);
  width: var(--f-modal-width);
  padding-bottom: var(--f-modal-padding);
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.35);
}
.slot {
  &.default {
    padding: var(--f-modal-padding);
    padding-bottom: 0;
  }
  &.default :slotted(*:last-child) {
    margin-bottom: 0;
  }
  &.footer {
    padding: 0 var(--f-modal-padding);
    margin-top: var(--f-modal-padding);
  }
}
</style>
