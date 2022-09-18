<template>
  <div :class="c.wrapper">
    <div :class="{ [c.trackDisabled]: disabled, [c.track]: true }" ref="sliderLine" @click="handleClick" />
    <div :class="{ [c.activeTrackDisabled]: disabled, [c.activeTrack]: true }" :style="sliderActiveStyle" @click="handleClick" data-test="slider-active" />
    <f-slider-thumb v-bind="{ min, max, step, dimensions }" v-model="model" @thumb-change="handleFirstThumbChange" />
    <f-slider-thumb v-if="hasTwoThumbs" v-bind="{ min, max, step, dimensions }" v-model="otherModel" @thumb-change="handleSecondThumbChange" />
  </div>
</template>

<script>
export default { name: 'fSlider' }
</script>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { absentProp } from '#util'
import { modelProps, createModel } from 'create-v-model'
import { slider as c } from '@fabric-ds/css/component-classes'
import { useDimensions } from '@fabric-ds/core/slider'
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
  ...modelProps(),
  ...modelProps({ modelName: 'second', modelDefault: absentProp })
})

// FIXME: defineEmits here to bring in emit

const hasTwoThumbs = computed(() => props.second !== absentProp)
const model = createModel({ props })
const otherModel = hasTwoThumbs.value && createModel({ props, modelName: 'second' })
const sliderLine = ref(null)
const dimensions = ref({})
const updateDimensions = _v => dimensions.value = _v
const { mountedHook, unmountedHook } = useDimensions()
onMounted(() => mountedHook(sliderLine.value, updateDimensions))
onBeforeUnmount(unmountedHook)

// FIXME - should proxy to the nearest thumb
const handleClick = () => {
  console.log("CLICK")
}

const thumbPositions = ref([])
const handleThumbChange = (v, index) => thumbPositions.value[index] = v
const handleFirstThumbChange = v => handleThumbChange(v, 0)
const handleSecondThumbChange = v => handleThumbChange(v, 1)
const lowerThumbPosition = computed(() => Math.min(...thumbPositions.value))
const upperThumbPosition = computed(() => Math.max(...thumbPositions.value))
const sliderActiveStyle = computed(() => ({
  left: hasTwoThumbs.value ? (lowerThumbPosition.value + '%') : 0,
  right: (100 - upperThumbPosition.value) + '%',
}))
</script>
