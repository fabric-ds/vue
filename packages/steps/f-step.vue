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
    }" />
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
</style>
