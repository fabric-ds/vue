<template>
  <component :is="as" tabindex="0" role="button" :class="{ [c.card]: true, 'f-card-selected': selected }">
    <div :class="c.cardOutline" />
    <slot />
  </component>
</template>

<script>
import { card as c } from '@finn-no/fabric-component-classes'

export default {
  name: 'fCard',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    selected: Boolean
  },
  setup: () => ({ c })
}
</script>
