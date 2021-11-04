<template>
  <component :is="as" tabindex="0" role="button" :class="outerClasses">
    <div v-if="!flat" :class="innerClasses" />
    <slot />
  </component>
</template>

<script>
// import { card as c } from '@fabric-ds/component-classes'
import { computed } from 'vue'

const c = {
    card: 'cursor-pointer overflow-hidden relative transition-all outline-none',
    cardShadow: 'f-card rounded-8',
    cardFlat: 'border rounded-4',
    cardFlatUnselected: 'border-gray-300 hover:bg-blue-50 hover:border-blue-600 active:border-blue-700',
    cardFlatSelected: 'border-blue-600 hover:bg-blue-100 hover:border-blue-700 active:border-blue-800',
    cardSelected: 'bg-blue-50',
    cardOutline: 'f-card-outline absolute rounded-8 inset-0 transition-all border-2',
    cardOutlineUnselected: 'border-transparent',
    cardOutlineSelected: 'border-blue-600',
}

export default {
  name: 'fCard',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    selected: Boolean,
    flat: Boolean
  },
  setup: (props) => ({
    outerClasses: computed(() => ({
      [c.card]: true,
      [c.cardShadow]: !props.flat,
      [c.cardSelected]: props.selected,
      [c.cardFlat]: props.flat,
      [props.selected ? c.cardFlatSelected : c.cardFlatUnselected]: props.flat
    })),
    innerClasses: computed(() => ({
      [c.cardOutline]: true,
      [props.selected ? c.cardOutlineSelected : c.cardOutlineUnselected]: true
    }))
  })
}
</script>
