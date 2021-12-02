<template>
  <div :class="arrowClass" :style="arrowStyle" />
</template>

<script>
import { computed } from 'vue'

const directions = ['top', 'left', 'right', 'bottom']
const getDirection = (props) => directions.find(e => props[e])

export default {
  name: 'fAttentionArrow',
  props: {
    tooltip: Boolean,
    callout: Boolean,
    popover: Boolean,
    ...directions.reduce((acc, e) => (acc[e] = Boolean, acc), {})
  },
  setup: (props) => {
    const directionName = computed(() => getDirection(props))
    const arrowClass = computed(() => ({
      ['absolute h-14 w-14 border-2 border-b-0 border-r-0 transform']: true,
      [`-${directionName.value}-8`]: true,
      ['bg-gray-700 border-gray-700']: props.tooltip,
      ['bg-green-100 border-green-400']: props.callout,
      ['bg-white border-white']: props.popover,
      ['rotate-45 -top-8']: props.top,
      ['-rotate-45 -left-8']: props.left
    }))
    const arrowStyle = computed(() => ({
      borderTopLeftRadius: '4px',
      [`margin-${directionName.value}`]: '-0.5px'
    }))

    return { arrowClass, arrowStyle }
  }
}
</script>
