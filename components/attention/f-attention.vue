<template>
  <article v-if="$slots.target" ref="targetEl" class="inline-flex" @mouseleave="tooltip && hide()" @mouseenter="tooltip && show()">
    <slot name="target" />
  </article>
  <div :class="[{ absolute: !callout }, attentionClass]" ref="attentionRef" v-show="showing">
    <div :class="wrapperClass">
      <f-attention-arrow v-bind="$props" v-if="!noArrow" ref="arrowEl" :direction="actualDirection" />
      <div class="last-child:mb-0"><slot /></div>
    </div>
  </div>
</template>

<script>
import { watch, computed, ref, onMounted, nextTick } from 'vue'
import { props as attentionProps, directions, sleep } from './attentionUtil.js'
import fAttentionArrow from './f-attention-arrow.vue'
import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'

const middlePosition = 'calc(50% - 7px)'
const isDirectionVertical = (name) => ['top', 'bottom'].includes(name)
const computeCalloutArrow = ({ actualDirection, directionName, arrowEl }) => {
  actualDirection.value = directionName.value
  const directionIsVertical = isDirectionVertical(directionName.value)
  arrowEl.value.$el.style.left = directionIsVertical ? middlePosition : null
  arrowEl.value.$el.style.top = !directionIsVertical ? middlePosition : null
}

export default {
  name: 'fAttentionItem',
  props: {
    ...attentionProps,
    attentionClass: [Object, String],
    attentionEl: {
      default: () => ref(null)
    }
  },
  components: { fAttentionArrow },
  setup: (props) => {
    const directionName = computed(() => directions.find(e => props[e]))
    const wrapperClass = computed(() => ({
      ['border-2 relative']: true,
      ['bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8']: props.tooltip,
      ['bg-green-100 border-green-400 py-8 px-16 rounded-8']: props.callout,
      ['bg-white border-white rounded-8 p-16 filter drop-shadow-20']: props.popover,
    }))

    const targetEl = ref(null)
    const arrowEl = ref(null)
    const actualDirection = ref(directionName.value)
    const showing = ref(props.callout)
    const recompute = async () => {
      if (props.callout) computeCalloutArrow({ directionName, arrowEl, actualDirection })
      else {
        const position = await computePosition(targetEl.value, props.attentionEl.value, {
          placement: directionName.value,
          middleware: [
            flip(),
            offset(12),
            shift({ padding: 16 }),
            arrow({ element: props.noArrow ? undefined : arrowEl.value.$el })
          ]
        })
        actualDirection.value = position.placement
        Object.assign(props.attentionEl.value.style, {
          left: '0',
          top: '0',
          transform: `translate3d(${Math.round(position.x)}px, ${Math.round(position.y)}px, 0)`
        })
        let { x, y } = position.middlewareData.arrow
        arrowEl.value.$el.style.left = x ? (x + 'px') : null
        arrowEl.value.$el.style.top = y ? (y + 'px') : null
      }
    }

    onMounted(async () =>  {
      if (props.callout) {
        await nextTick()
        recompute()
      }

      // if (props.tooltip && slots.target) {
      //   recompute()
      // }
    })
    watch(() => [props.top, props.bottom, props.left, props.right], recompute)
    const hide = async () => {
      // TODO: add sleep
      showing.value = false
    }
    const show = async () => {
      showing.value = true
      await nextTick()
      await recompute()
    }

    return { wrapperClass, attentionRef: props.attentionEl, targetEl, arrowEl, actualDirection, show, hide, showing }
  }
}
</script>
