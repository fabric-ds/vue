import { h } from 'vue'

export default {
  name: 'fTabPanel',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: (props, { slots }) => () => h('div', {
    tabindex: -1,
    role: 'tabpanel',
    id: `fabric-tabpanel-${props.name}`,
    ariaLabelledby: `fabric-tab-${props.name}`,
  }, slots.default())
}
