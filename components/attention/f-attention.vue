<template>
  <div v-if="$slots.target" ref="targetEl" class="inline-flex">
    <slot name="target" />
  </div>
  <div :class="[callout ? 'pt-8' : 'absolute']" ref="attentionEl">
    <div :class="wrapperClass">
      <!-- need to send in actual placement to arrow -->
      <f-attention-arrow v-bind="$props" v-if="!noArrow" ref="arrowEl" :direction="actualDirection" />
      <div class="last-child:mb-0"><slot /></div>
    </div>
  </div>
</template>

<script>
import { watch, computed, ref, onMounted, nextTick } from 'vue'
import { props, directions } from './attentionUtil.js'
import fAttentionArrow from './f-attention-arrow.vue'
import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'

export default {
  name: 'fAttentionItem',
  props,
  components: { fAttentionArrow },
  setup: (props, { slots }) => {
    const directionName = computed(() => directions.find(e => props[e]))
    const wrapperClass = computed(() => ({
      ['border-2 relative']: true,
      ['bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8']: props.tooltip,
      ['bg-green-100 border-green-400 py-8 px-16 rounded-8']: props.callout,
      ['bg-white border-white rounded-8 p-16 filter-shadow-20']: props.popover,
    }))

    const targetEl = ref(null)
    const attentionEl = ref(null)
    const arrowEl = ref(null)
    const actualDirection = ref(directionName.value)
    const recompute = async () => {
      const position = await computePosition(targetEl.value, attentionEl.value, {
        placement: directionName.value,
        middleware: [
          flip(),
          offset(12),
          shift({ padding: 16 }),
          arrow({ element: props.noArrow ? undefined : arrowEl.value.$el })
        ]
      })
      actualDirection.value = position.placement
      Object.assign(attentionEl.value.style, {
        left: '0',
        top: '0',
        transform: `translate3d(${Math.round(position.x)}px, ${Math.round(position.y)}px, 0)`
      })
      const { x, y } = position.middlewareData.arrow
      arrowEl.value.$el.style.left = x ? (x + 'px') : null
      arrowEl.value.$el.style.top = y ? (y + 'px') : null
    }

    onMounted(async () =>  {
      await nextTick()

      if (props.tooltip && slots.target) {
        recompute()
      }
    })
    watch(() => [props.top, props.bottom, props.left, props.right], recompute)

    return { wrapperClass, targetEl, attentionEl, arrowEl, actualDirection }
  }
}
</script>

<style>
.filter-shadow-10 {
  filter: drop-shadow(0px 1px 3px rgba(var(--f-bluegray-600-rgb), .12)) drop-shadow(0px 1px 3px rgba(var(--f-bluegray-600-rgb), .24));
}
.filter-shadow-20 {
  filter: drop-shadow(0px 3px 6px rgba(var(--f-bluegray-600-rgb), .16)) drop-shadow(0px 3px 6px rgba(var(--f-bluegray-600-rgb), .24));
}
.filter-shadow-30 {
  filter: drop-shadow(0px 10px 20px rgba(var(--f-bluegray-600-rgb), .19)) drop-shadow(0px 6px 6px rgba(var(--f-bluegray-600-rgb), .23));
}
.filter-shadow-40 {
  filter: drop-shadow(0px 14px 28px rgba(var(--f-bluegray-600-rgb), .25)) drop-shadow(0px 10px 10px rgba(var(--f-bluegray-600-rgb), .22));
}
</style>
