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
  setup: (props, { slots, attrs }) => () => h(props.as, {
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
    onKeydown: props.clickable ? (event) => {
      // Manually mapping Enter and Space keydown events to the click event (if there is one).
      // The browser doesn't do this automatically unless the element is a button or an a-element.
      // The Box element can't be a button or link in case someone puts an interactive element inside the box, which would result in invalid HTML and severe a11y issues.
      if (typeof attrs.onClick === 'function' && (event.keyCode === 13 || event.keyCode === 32)) {
        attrs.onClick(event)
      }
    } : undefined
  }, props.clickable ? [
    slots.default(),
    h('span', {
      role: 'button',
      'aria-label': 'Les mer'
    })
  ] : slots.default())
}
