<template>
  <div :class="arrowClass" :style="arrowStyle" :id="arrowId" />
</template>

<script>
import { computed } from 'vue'
import attentionProps from './attentionProps.js'

const directions = ['top', 'left', 'right', 'bottom']
const rotation = {
  left: -45,
  top: 45,
  right: 135,
  bottom: -135
}

export default {
  name: 'fAttentionArrow',
  props: {
    ...attentionProps,
    ...directions.reduce((acc, e) => (acc[e] = Boolean, acc), {})
  },
  setup: (props) => {
    const directionName = computed(() => directions.find(e => props[e]))
    const arrowClass = computed(() => ({
      ['absolute h-14 w-14 border-2 border-b-0 border-r-0 transform']: true,
      [`-${directionName.value}-8`]: true,
      ['bg-gray-700 border-gray-700']: props.tooltip,
      ['bg-green-100 border-green-400']: props.callout,
      ['bg-white border-white']: props.popover,
    }))
    const arrowStyle = computed(() => ({
      // TW doesn't let us specify exactly one corner, only whole sides
      borderTopLeftRadius: '4px',
      // border alignment is off by a fraction of a pixel, this fixes it
      [`margin-${directionName.value}`]: '-0.5px',
      transform: `rotate(${rotation[directionName.value]}deg)`
    }))

    return { arrowClass, arrowStyle }
  }
}
</script>
