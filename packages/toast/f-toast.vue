<template>
  <div class="overflow-hidden w-full" style="--f-expansion-duration: 0.15s">
    <div v-bind="$attrs" class="toast flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all" :class="{ 'bg-green-50 border-green-200 text-green-800': positive, 'bg-yellow-50 border-yellow-200 text-yellow-800': warning, 'bg-red-50 border-red-200 text-red-800': negative, 'bg-gray-50 border-gray-200 text-gray-800': neutral }">
      <div class="flex-shrink-0 rounded-full w-16 h-16 m-8" :class="{ 'bg-green-300': positive, 'bg-yellow-300': warning, 'bg-red-300': negative, 'bg-gray-300': neutral, 'animate-bounce': loading }">
        <!-- check circle -->
        <svg v-if="positive" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9l2 1.5L11 6"/></svg>
        <!-- alert circle -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="transition-transform duration-200" :class="{ 'transform rotate-180': neutral }"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 9V4"/><circle cx="8" cy="11.8" r=".8" fill="currentColor"/></svg>
      </div>
      <div class="self-center mr-8 py-4 last-child:mb-0">
        <p v-if="text">{{ text }}</p>
        <slot />
      </div>
      <button class="ml-auto p-8" v-if="canClose" @click="onClose">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z" clip-rule="evenodd"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fToast',
  inheritAttrs: false,
  props: {
    positive: Boolean,
    warning: Boolean,
    negative: Boolean,
    neutral: Boolean,
    loading: Boolean,
    canClose: {
      type: Boolean,
      default: true
    },
    text: String,
    onClose: Function,
    //
    push: null,
    remove: null,
    show: null
  }
}
</script>

<style scoped>
.f-can-expand {
  transition: height var(--f-expansion-duration, 0.3s);
  backface-visibility: hidden;

  &.entering {
    transition-timing-function: ease-out;
  }

  &.leaving {
    transition-timing-function: ease-in;
  }

  @media (prefers-reduced-motion) {
    transition-duration: 0s;
  }
}
</style>
