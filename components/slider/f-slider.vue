<template>
  <div :class="c.wrapper">
    <div :class="{ [c.trackDisabled]: disabled, [c.track]: true }" ref="sliderLine" @click="proxyTrackClick" />
    <div :class="{ [c.activeTrackDisabled]: disabled, [c.activeTrack]: true }" :style="sliderActiveStyle" @click="proxyTrackClick" data-test="slider-active" />
    <f-slider-thumb v-bind="{ min, max, step }" v-model="lowerModel" @thumb-change="handleFirstThumbChange" />
    <f-slider-thumb v-if="hasTwoThumbs" v-bind="{ min, max, step }" v-model="upperModel" @thumb-change="handleSecondThumbChange" />
  </div>
</template>

<script>
export default { name: 'fSlider' }
</script>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, provide } from 'vue'
import { modelEmits, modelProps, createModel } from 'create-v-model'
import { slider as c } from '@fabric-ds/css/component-classes'
import { useDimensions, computeValueFromEvent } from './logic'
import fSliderThumb from './f-slider-thumb.vue'

const props = defineProps({
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
  ...modelProps({ modelType: [Number, Array] }),
})

const emit = defineEmits(modelEmits())

const hasTwoThumbs = computed(() => Array.isArray(props.modelValue))
const model = createModel({ props, emit })
const lowerModel = computed({
  get: () => hasTwoThumbs.value ? props.modelValue[0] : props.modelValue,
  set: v => hasTwoThumbs.value ? model.value[0] = v : model.value = v
})
const upperModel = computed({
  get: () => props.modelValue[1],
  set: v => model.value[1] = v
})
const sliderLine = ref(null)
const dimensions = ref({})
const sliderThumbs = ref([])
// TODO: refactor this pattern to generics, we use it in tabs and here
const registerThumb = (thumb) => sliderThumbs.value.push(thumb)
const unregisterThumb = (thumb) => {
  const idx = sliderThumbs.value.indexOf(thumb)
  if (idx !== -1) sliderThumbs.value.splice(idx, 1)
}
const updateDimensions = _v => dimensions.value = _v
const { mountedHook, unmountedHook } = useDimensions(updateDimensions)
onMounted(() => mountedHook(sliderLine.value))
onBeforeUnmount(unmountedHook)
provide('dimensions', dimensions)
provide('slider-controller', { registerThumb, unregisterThumb })

const proxyTrackClick = (evt) => {
  if (!hasTwoThumbs.value) return sliderThumbs.value[0].handleClick(evt)
  const value = computeValueFromEvent({ dimensions: dimensions.value, min: props.min, max: props.max, evt })
  console.log("I MADE A VALUE", value)
  sliderThumbs.value.forEach(thumb => thumb.maybeHandleClick())
}

// TODO - make sure changing min/max dynamically works

const thumbPositions = ref([])
const handleThumbChange = (v, index) => thumbPositions.value[index] = v
const handleFirstThumbChange = v => handleThumbChange(v, 0)
const handleSecondThumbChange = v => handleThumbChange(v, 1)
const lowerThumbPosition = computed(() => hasTwoThumbs.value ? thumbPositions.value[0] : 0)
const upperThumbPosition = computed(() => thumbPositions.value[hasTwoThumbs.value ? 1 : 0])
const sliderActiveStyle = computed(() => ({
  left: lowerThumbPosition.value + '%',
  right: (100 - upperThumbPosition.value) + '%',
}))
</script>
