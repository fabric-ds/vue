<template>
  <div :class="wrapperClass">
    <div class="absolute w-full flex justify-center inset-0" style="top: -9px">
      <svg width="36" height="9" viewBox="0 0 36 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4142 2.41421L25.1213 8.12132C25.6839 8.68393 26.447 9 27.2426 9L8.75736 9C9.55301 9 10.3161 8.68393 10.8787 8.12132L16.5858 2.41421C17.3668 1.63316 18.6332 1.63316 19.4142 2.41421Z" :fill="`var(${beakBackground})`"/>
        <path d="M27 8V8C26.3597 8 25.7456 7.74565 25.2929 7.29289L20.1213 2.12132C18.9497 0.949744 17.0503 0.949747 15.8787 2.12132L10.7071 7.29289C10.2544 7.74565 9.64029 8 9 8V8" :stroke="`var(${beakBorder})`" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <p class="mb-0">OMG this is just so much text that it can fill an entire tooltip thing, oh crap not quite enough but now this should be good</p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'fAttention',
  props: {
    tooltip: Boolean,
    popover: Boolean,
    callout: Boolean,
  },
  setup: (props) => ({
    wrapperClass: computed(() => ({
      ['border-2 relative']: true,
      ['bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8']: props.tooltip,
      ['bg-green-100 border-green-400 py-8 px-16 rounded-8']: props.callout,
      ['bg-white border-white rounded-8 p-16 filter-shadow-20']: props.popover,
    })),
    beakBorder: computed(() => {
      if (props.tooltip) return '--f-gray-700'
      if (props.callout) return '--f-green-400'
      if (props.popover) return '--f-white'
    }),
    beakBackground: computed(() => {
      if (props.tooltip) return '--f-gray-700'
      if (props.callout) return '--f-green-100'
      if (props.popover) return '--f-white'
    })
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
