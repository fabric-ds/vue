<template>
  <component :is="as" tabindex="0" role="button" class="rounded-8 f-card" :class="{ 'f-card-selected': selected }" @click="selected = !selected">
    <slot />
  </component>
</template>

<script>
import { ref } from 'vue'
// import { box as classes } from '@finn-no/fabric-component-classes'

export default {
  name: 'fCard',
  props: {
    as: {
      type: String,
      default: 'div'
    },
  },
  setup: () => ({
    selected: ref(false)
  })
}
</script>

<style scoped>
.f-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  border: 2px solid transparent;
  transition: 0.3s ease;
  outline: none !important;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
    transform: translateY(-2px);
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23); */
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
    border-color: var(--f-gray-300);
  }

  &:focus-visible {
    border-color: var(--f-aqua-400);
  }
}
.f-card-selected {
  border-color: var(--f-blue-600);
  background-color: var(--f-blue-50);
}
</style>
