<template>
  <div class="field" :class="{ 'is-invalid': hasErrorMessage, 'is-disabled': disabled, [$attrs.class || '']: true }" :role="role" v-bind="aria">
    <label v-if="label" class="field-label" :id="labelId" :for="id">{{ label }}</label>
    <slot :triggerValidation="triggerValidation" :for="id" :labelId="labelId" />
    <slot name="control" :form="collector" />
    <div class="field-hint">
      <span :id="hintId" v-if="hint" v-html="hint" />
      <span v-if="hint && hasErrorMessage">, </span>
      <span :id="errorId" v-if="hasErrorMessage">{{ validationMsg }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { createValidation } from './validation'
import { id } from '@finn-no/fabric-vue-utilities'
import { modelProps } from 'create-v-model'

export const fieldProps = {
  id,
  label: String,
  role: String,
  invalid: Boolean,
  hint: String,
  rules: {
    type: Array,
    default: () => ([])
  },
  ...modelProps(),
}

export default {
  name: 'fField',
  inheritAttrs: false,
  props: {
    ...fieldProps,
    required: [Boolean, Function],
    disabled: Boolean,
  },
  setup(props, { attrs, slots }) {
    const { triggerValidation, valid, validationMsg, hasErrorMessage, collector } = createValidation(props)

    const labelId = computed(() => (props.label || slots.label) && (props.id + ':label'))
    const hintId = computed(() => props.id + ':hint')
    const errorId = computed(() => hasErrorMessage.value ? props.id + ':error' : undefined)
    const aria = computed(() => ({
      'aria-labelledby': labelId.value,
      'aria-describedby': props.hint ? hintId.value : undefined,
      'aria-errormessage': errorId.value,
      'aria-invalid': !valid.value || props.invalid || undefined,
      'aria-required': props.required && true
    }))

    return { triggerValidation, validationMsg, hasErrorMessage, labelId, hintId, errorId, aria, collector }
  }
}
</script>
