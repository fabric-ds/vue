import { box as c } from '@finn-no/fabric-component-classes'
import { h } from 'vue'

// Manually mapping Enter and Space keydown events to the click event (if there is one).
// The browser doesn't do this automatically unless the element is a button or an a-element.
// The Box element can't be a button or link in case someone puts an interactive element inside the box, which would result in invalid HTML and severe a11y issues.
const useClickableElement = ({ activate, attrs }) => ({
  tabindex: activate ? 0 : undefined,
  onKeydown: activate ? (event) => {
    if (typeof attrs.onClick === 'function' && (event.key === 'Enter' || event.key === ' ')) {
      attrs.onClick(event)
    }
  } : undefined
})

const defaultSlot = ({ slots }) => h('div', { class: 'last-child:mb-0' }, slots.default())
const ariaSpan = h('span', { role: 'button', ariaLabel: 'Les mer' })
const getChildren = ({ props, slots }) => props.clickable
  ? [defaultSlot({ slots }), ariaSpan]
  : defaultSlot({ slots })

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
    ...useClickableElement({ attrs, activate: props.clickable })
  }, getChildren({ props, slots }))
}
