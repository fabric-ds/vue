<template>
  <div class="f-will-expand" :key="key">
    <slot />
  </div>
</template>

<script>
import { id } from '@finn-no/fabric-vue-utilities'

export default {
  name: 'fWillExpand',
  props: {
    key: id
  }
}
</script>

<style scoped>
.f-will-expand {
  overflow: hidden;
  will-change: height;
}
.f-can-expand {
  transition: height 0.3s ease-in-out;

  @media (prefers-reduced-motion) {
    transition-duration: 0s;
  }
}
</style>
