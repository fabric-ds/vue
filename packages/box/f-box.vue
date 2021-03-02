<template>
  <component :is="as" :tabindex="clickable ? 0 : undefined" :role="clickable ? 'button' : undefined" :class="{
    [classes.box]: true,
    [classes.bleed]: bleed,
    [classes.clickable]: clickable,
    'bg-aqua-50': info,
    'hover:bg-aqua-100 active:bg-aqua-200': info && clickable,
    'bg-bluegray-100': neutral,
    'hover:bg-bluegray-200 active:bg-bluegray-300': neutral && clickable,
    'border-2 border-bluegray-300': bordered
  }">
    <slot />
  </component>
</template>

<script>
import { box as classes } from '@finn-no/fabric-component-classes'

export default {
  name: 'fBox',
  props: {
    bleed: Boolean,
    as: {
      type: String,
      default: 'div'
    },
    clickable: Boolean,
    info: Boolean,
    neutral: Boolean,
    bordered: Boolean
  },
  setup: () => ({ classes })
}
</script>
