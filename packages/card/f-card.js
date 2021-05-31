import { card as c } from '@finn-no/fabric-component-classes'
import { h } from 'vue'

export default {
  name: 'fCard',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    selected: Boolean
  },
  setup: (props, { slots }) => () => h(props.as, {
    class: {
      [c.card]: true,
      [c.cardSelected]: props.selected
    },
    tabindex: 0,
    role: 'button'
  }, [h('div', { class: {
    [c.cardOutline]: true,
    [props.selected ? c.cardOutlineSelected : c.cardOutlineUnselected]: true
  }
  }), slots.default()])
}
