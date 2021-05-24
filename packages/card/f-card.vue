<template>
  <component :is="as" tabindex="0" role="button" class="cursor-pointer rounded-8 overflow-hidden relative transition-all outline-none f-card" :class="{ 'f-card-selected': selected }">
    <div class="absolute rounded-8 inset-0 transition-all border-2 border-transparent p-card-inner" />
    <slot />
  </component>
</template>

<script>
// import { box as classes } from '@finn-no/fabric-component-classes'

export default {
  name: 'fCard',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    selected: Boolean
  },
}
</script>

<style>
.f-card .field.in-card {
  position: static;

  & .input-toggle {
    position: static;
  }

  & .input-toggle input {
    width: 100%;
    height: 100%;
    clip: auto;
    appearance: none;
    left: 0;
    top: 0;
    cursor: pointer;
  }
}
</style>

<style scoped>
.f-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23); */
  }

  &:active {
    box-shadow: none;
    & .p-card-inner {
      border-color: var(--f-gray-300);
    }
  }

  &:focus-visible {
    & .p-card-inner {
      border-color: var(--f-aqua-400);
    }
  }
}
.f-card-selected {
  background-color: var(--f-blue-50);

  & .p-card-inner {
    border-color: var(--f-blue-600);
  }
}
</style>
