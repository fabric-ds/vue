<template>
  <div :class="[{ 'absolute z-50': !callout }, attentionClass]" ref="attentionRef" v-show="model">
    <div :class="wrapperClass">
      <f-attention-arrow v-bind="$props" v-if="!noArrow" ref="arrowEl" :direction="actualDirection" />
      <div class="last-child:mb-0"><slot /></div>
    </div>
  </div>
</template>

<script>
import { watch, computed, ref, onMounted, nextTick } from 'vue'
import { absentProp } from '#util'
import { props as attentionProps, directions } from './attentionUtil.js'
import fAttentionArrow from './f-attention-arrow.vue'
import { createModel, modelProps } from 'create-v-model'
import { useRecompute } from './logic.js'

export default {
  name: 'fAttentionItem',
  props: {
    ...attentionProps,
    ...modelProps({ modelDefault: absentProp }),
    targetEl: Object,
    attentionClass: [Object, String],
    attentionEl: {
      default: () => ref(null)
    }
  },
  components: { fAttentionArrow },
  setup: (props, { emit }) => {
    const directionName = computed(() => directions.find(e => props[e]))
    const wrapperClass = computed(() => ({
      ['border-2 relative']: true,
      ['bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8']: props.tooltip,
      ['bg-green-100 border-green-400 py-8 px-16 rounded-8']: props.callout,
      ['bg-white border-white rounded-8 p-16 filter drop-shadow-20']: props.popover,
    }))

    const model = (props.modelValue === absentProp) ? ref(true) : createModel({ props, emit })
    const arrowEl = ref(null)
    const actualDirection = ref(directionName.value)
    const attentionState = {
      get isShowing() { return model.value },
      get isCallout() { return props.callout },
      get actualDirection() { return actualDirection.value },
      set actualDirection(v) { actualDirection.value = v},
      get directionName() { return directionName.value },
      get arrowEl() { return arrowEl.value.$el },
      get attentionEl() { return props.attentionEl.value },
      set attentionEl(v) { props.attentionEl.value = v },
      get targetEl() { return props.targetEl },
      get waitForDOM() { return nextTick },
      get noArrow() { return props.noArrow }
    }
    const recompute = useRecompute(attentionState)

    onMounted(async () =>  {
      watch(() => [props.top, props.bottom, props.left, props.right], recompute)
      watch(model, recompute, { immediate: props.callout }) // if we have a callout, we want to compute the arrow position as soon as we mount
    })

    return { wrapperClass, attentionRef: props.attentionEl, arrowEl, actualDirection, model }
  }
}
</script>
