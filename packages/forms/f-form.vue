<template>
  <component :is="as">
    <slot />
  </component>
</template>

<script>
import { watchEffect } from 'vue'
import { createValidationCollector } from './validation'

export default {
  name: 'fForm',
  props: {
    as: {
      default: 'form'
    },
    shouldValidate: null,
    'onUpdate:modelValue': Function,
    'onUpdate:completed': Function
  },
  setup(props, { emit }) {
    const { allChildrenValid, completed, childrenShouldValidate } = createValidationCollector()
    watchEffect(() => emit('update:modelValue', allChildrenValid.value))
    watchEffect(() => emit('update:completed', completed.value))
    watchEffect(() => childrenShouldValidate.value = props.shouldValidate)
  }
}
</script>
