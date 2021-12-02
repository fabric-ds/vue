<template>
  <div class="absolute">
    <div :class="wrapperClass">
      <f-attention-arrow v-bind="$props" top />
      <div class="last-child:mb-0"><slot /></div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import props from './attentionProps.js'
import fAttentionArrow from './f-attention-arrow.vue'

export default {
  name: 'fAttention',
  props,
  components: { fAttentionArrow },
  setup: (props) => ({
    wrapperClass: computed(() => ({
      ['border-2 relative']: true,
      ['bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8']: props.tooltip,
      ['bg-green-100 border-green-400 py-8 px-16 rounded-8']: props.callout,
      ['bg-white border-white rounded-8 p-16 filter-shadow-20']: props.popover,
    }))
  })
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
