<template>
  <div class="absolute">
    <div :class="wrapperClass">
      <div class="absolute w-full flex justify-center inset-0" style="top: -9px">
        <svg width="36" height="9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 9">
          <path :fill="`var(${beakBackground})`" d="m19.4 2.4 5.7 5.7a3 3 0 0 0 2.1.9H8.8a3 3 0 0 0 2-.9l5.8-5.7a2 2 0 0 1 2.8 0Z"/>
          <path :stroke="`var(${beakBorder})`" d="M27 8c-.6 0-1.3-.3-1.7-.7L20 2a3 3 0 0 0-4.2 0l-5.2 5.2c-.4.4-1 .7-1.7.7" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div class="last-child:mb-0"><slot /></div>
    </div>
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
