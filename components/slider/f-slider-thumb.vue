<template>
  <div :class="{ [c.thumbDisabled]: disabled, [c.thumbEnabled]: !disabled, [c.thumb]: true }"
    ref="thumb"
    role="slider"
    tabindex="0"
    v-bind="aria"
    :style="thumbStyles"
    data-test="thumb"
    @mousedown="handleMouseDown"
    @touchstart="handleMouseDown"
    @blur="handleBlur"
    @focus="handleFocus"
    @keydown="handleKeyDown" />
</template>

<script>
export default { name: 'fSliderThumb' }
</script>

<script setup>
import { computed, ref, watch, useAttrs } from 'vue'
import { modelProps, createModel } from 'create-v-model'
import { slider as c } from '@fabric-ds/css/component-classes'
import { createHandlers } from './logic'

const attrs = useAttrs()
const props = defineProps({
  min: Number,
  max: Number,
  step: Number,
  dimensions: Object,
  disabled: Boolean,
  ...modelProps()
})
const emit = defineEmits(['focus', 'blur', 'thumb-change'])

const thumb = ref(null)
const v = createModel({ props, emit })
const position = ref(v.value)
const sliderPressed = ref(false)

// step is a computed so we can check if props.step is set or not
// and only do getShiftedChange when set
const step = computed(() => props.step || 1)

const sliderState = {
  get position() { return position.value },
  set position(v) { position.value = v },
  get sliderPressed() { return sliderPressed.value },
  set sliderPressed(v) { sliderPressed.value = v },
  get val() { return v.value },
  get thumbEl() { return thumb.value },
  get dimensions() { return props.dimensions },
  get step() { return step.value },
  emitFocus(v) { emit('focus', v) },
  emitBlur(v) { emit('blur', v) }
}

const { handleKeyDown, handleFocus, handleBlur, handleMouseDown, handleClick, getThumbPosition, getThumbTransform, getShiftedChange } = createHandlers({ props, sliderState })

const emitThumbUpdate = (v) => emit('thumb-change', v)
const thumbPosition = computed(getThumbPosition)
watch(thumbPosition, emitThumbUpdate)
emitThumbUpdate(getThumbPosition()) // TODO - how was this running onmount before?

const transformValue = computed(getThumbTransform)
const thumbStyles = computed(() => ({
  transform: 'translateX(' + transformValue.value + 'px)',
}))
const aria = computed(() => ({
  'aria-label': props.label,
  'aria-labelledby': props.labelledBy,
  'aria-valuemin': props.min,
  'aria-valuemax': props.max,
  'aria-valuenow': v.value,
  'aria-valuetext': attrs['aria-valuetext'] // FIXME
}))

watch(position, () => {
  // prevents shiftedChange when modelValue was set externally
  // TODO: props.updateHook should go here - will need one per slider
      // if (props.second && position.value < 5_000_000) {
      //   position.value = 5_000_000
      //   return
      // }
  if (position.value === props.modelValue) return
  const n = props.step ? getShiftedChange(position.value) : position.value
  if (v.value === n) return
  v.value = n
})

const clamp = (v, { min, max }) => Number.isFinite(parseFloat(v)) ? Math.min(Math.max(v, min), max) : min
watch(() => props.modelValue, () => {
  // if the slider gets bad values, it shouldn't break the page by placing the thumb at an insane left/right value
  if (props.modelValue > props.max || props.modelValue < props.min) position.value = clamp(props.modelValue, props)
  else if (sliderPressed.value || (position.value === props.modelValue)) return
  else position.value = props.modelValue
}, { immediate: true })
</script>
