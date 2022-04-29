import { directions } from './logic.js'

export default {
  tooltip: Boolean,
  popover: Boolean,
  callout: Boolean,
  noArrow: Boolean,
  ...directions.reduce((acc, e) => (acc[e] = Boolean, acc), {})
}
