import { h, Fragment } from 'vue'

const separator = () => h('span', { ariaHidden: true, class: 'select-none' }, '/')
// from https://stackoverflow.com/a/55387306/966362
const interleave = (slot, el) => {
  // check if the default slot is using v-for or just normal elements
  const arr = slot[0].type === Fragment ? slot[0].children : slot
  return [].concat(...arr.map(n => [n, el])).slice(0, -1)
}

export default {
  name: 'fBreadcrumbs',
  props: {
    ariaLabel: { type: String, default: 'Her er du' }
  },
  setup: (_, { slots }) => () => h('nav',
    { class: 'flex space-x-8' },
    interleave(slots.default(), separator())
  )
}
