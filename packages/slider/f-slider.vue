<template>
  <div :class="c.wrapper">
    <div :class="{ [c.trackDisabled]: disabled, [c.track]: true }" ref="sliderLine" @click="handleClick" />
    <div :class="{ [c.activeTrackDisabled]: disabled, [c.activeTrack]: true }" :style="sliderActiveStyle" @click="handleClick" />
    <div :class="{ [c.thumbDisabled]: disabled, [c.thumbEnabled]: !disabled, [c.thumb]: true }"
      ref="thumb"
      role="slider"
      tabindex="0"
      v-bind="aria"
      :style="thumbStyles"
      @mousedown="handleMouseDown"
      @touchstart="handleMouseDown"
      @blur="handleBlur"
      @focus="handleFocus"
      @keydown="handleKeyDown">
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { modelProps, createModel } from 'create-v-model'
// import { slider as c } from '@finn-no/fabric-component-classes'
import { useDimensions } from './util.js'
import { createHandlers } from './handlers.js'
const c = {
    wrapper: 'f-slider relative w-full h-44',
    track: 'track absolute bg-blue-200 h-4 top-20 rounded-4 w-full',
    trackDisabled: 'pointer-events-none bg-gray-200',
    activeTrack: 'active-track absolute bg-blue-600 h-4 top-20 rounded-4',
    activeTrackDisabled: 'bg-bluegray-300 pointer-events-none',
    thumb: 'f-thumb absolute w-24 h-24 bottom-10 rounded-4 outline-none',
    thumbEnabled: 'shadow bg-blue-600 cursor-pointer',
    thumbDisabled: 'bg-bluegray-300 cursor-disabled pointer-events-none'
}

export default {
  name: 'fSlider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: Number,
    label: String,
    labelledBy: String,
    disabled: Boolean,
    ...modelProps()
  },
  setup(props, { emit }) {
    const sliderLine = ref(null)
    const thumb = ref(null)
    const { dimensions } = useDimensions(sliderLine)
    const sliderPressed = ref(false)
    const v = createModel({ props })
    const position = ref(v.value)

    // step is a computed so we can check if props.step is set or not
    // and only do shiftedChange when set
    const step = computed(() => props.step || 1)
    const shiftedChange = (n) => {
      const r = 1.0 / step.value
      return Math.floor(n * r) / r
    }

    watch(position, () => {
      // prevents shiftedChange when modelValue was set externally
      if (position.value === props.modelValue) return
      const n = props.step ? shiftedChange(position.value) : position.value
      if (v.value === n) return
      v.value = n
    })
    watch(() => props.modelValue, () => {
      if (sliderPressed.value || (position.value === props.modelValue)) return
      position.value = props.modelValue
    })
    const thumbPosition = computed(() => ((position.value - props.min) / (props.max - props.min) * 100))
    const transformValue = computed(() => (thumbPosition.value / 100) * dimensions.value.width) || 0
    const thumbStyles = computed(() => ({
      transform: 'translateX(' + transformValue.value + 'px)',
    }))
    const sliderActiveStyle = computed(() => ({
      left: 0,
      right: (100 - thumbPosition.value) + '%',
    }))
    const aria = computed(() => ({
      'aria-label': props.label,
      'aria-labelledby': props.labelledBy,
      'aria-valuemin': props.min,
      'aria-valuemax': props.max,
      'aria-valuenow': v.value,
      'aria-valuetext': v.value
    }))

    const { handleKeyDown, handleFocus, handleBlur, handleMouseDown, handleMouseUp, handleClick } = createHandlers({ props, emit, step, position, v, sliderPressed, thumb, dimensions })

    return { c, aria, sliderLine, thumb, sliderActiveStyle, thumbStyles, handleClick, handleBlur, handleFocus, handleKeyDown, handleMouseDown, v }
  }
}
</script>

<style scoped>
.active-track {
  height: 6px;
  top: 19px;
}
.f-thumb {
  transition: 0.1s box-shadow;
}
.f-thumb:hover, .f-thumb:focus {
  box-shadow: 0 0 0 6px rgba(var(--f-blue-400-rgb), 0.4);
}
.f-thumb:active {
  box-shadow: 0 0 0 8px rgba(var(--f-blue-400-rgb), 0.4);
}
</style>
