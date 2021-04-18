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
  setup(props) {
    const { allChildrenValid, completed, childrenShouldValidate } = createValidationCollector()
    if ('onUpdate:modelValue' in props) watchEffect(() => props['onUpdate:modelValue'](allChildrenValid.value))
    if ('onUpdate:completed' in props) watchEffect(() => props['onUpdate:completed'](completed.value))
    if ('shouldValidate' in props) watchEffect(() => childrenShouldValidate.value = props.shouldValidate)
  }
}
</script>
