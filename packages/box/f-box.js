import { box as c } from '@finn-no/fabric-component-classes'
import { h } from 'vue'

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
  setup: (props, { slots }) => () => h(props.as, {
    class: {
      [c.box]: true,
      [c.bleed]: props.bleed,
      [c.clickable]: props.clickable,
      'bg-aqua-50': props.info,
      'hover:bg-aqua-100 active:bg-aqua-200': props.info && props.clickable,
      'bg-bluegray-100': props.neutral,
      'hover:bg-bluegray-200 active:bg-bluegray-300': props.neutral && props.clickable,
      'border-2 border-bluegray-300': props.bordered
    },
    tabindex: props.clickable ? 0 : undefined,
    role: props.clickable ? 'button' : undefined
  }, slots.default())
}
