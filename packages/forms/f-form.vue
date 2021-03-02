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
    if (props['onUpdate:modelValue']) watchEffect(() => props['onUpdate:modelValue'](allChildrenValid))
    if (props['onUpdate:completed']) watchEffect(() => props['onUpdate:completed'](completed))
    if ('shouldValidate' in props) watchEffect(() => childrenShouldValidate = props.shouldValidate)
  }
}
</script>
