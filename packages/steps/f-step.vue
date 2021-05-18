<template>
  <div class="step" :class="{
      [classes.stepVertical]: vertical,
      [classes.stepVerticalLeft]: vertical && left,
      [classes.stepVerticalRight]: vertical && !left,
      [classes.stepHorizontal]: !vertical
    }">
    <div :class="{
      [classes.stepDot]: true,
      [classes.stepDotVertical]: vertical,
      [classes.stepDotVerticalLeft]: vertical && left,
      [classes.stepDotVerticalRight]: vertical && !left,
      [classes.stepDotHorizontal]: !vertical,
      [classes.stepDotIncomplete]: !(active || complete),
      [classes.stepDotActive]: active,
      [classes.stepDotComplete]: complete
    }">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M13.007 4.447a.75.75 0 01.046 1.06l-5.5 6a.75.75 0 01-1.083.023l-3-3a.75.75 0 011.06-1.06l2.446 2.446 4.971-5.423a.75.75 0 011.06-.046z" clip-rule="evenodd"></path></svg>
    </div>
    <div :class="{
      [classes.stepLine]: true,
      [classes.stepLineVertical]: vertical,
      [classes.stepLineVerticalLeft]: vertical && left,
      [classes.stepLineVerticalRight]: vertical && !left,
      [classes.stepLineHorizontal]: !vertical,
      [classes.stepLineIncomplete]: !complete,
      [classes.stepLineComplete]: complete
    }" />
    <div class="last-child:mb-0" :class="{ 'sr-only': !vertical }">
      <slot />
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import { step as classes } from '@finn-no/fabric-component-classes'

export default {
  name: 'fStep',
  props: {
    active: Boolean,
    complete: Boolean,
  },
  setup: () => ({
    vertical: inject('steps-vertical', true),
    left: inject('steps-left', true),
    classes,
  })
}
</script>

<style scoped>
.step:last-child .step-line {
  display: none;
}
.step-h:last-child {
  flex: 0 1 auto;
}
.step-line-left {
  left: -11px;
}
.step-line-right {
  right: -11px;
}
.step-line-vertical-top {
  top: 22px;
}
</style>
