const TOP = 'top'
const BOTTOM = 'bottom'
const LEFT = 'left'
const RIGHT = 'right'
export const opposites = {
  [TOP]: BOTTOM,
  [BOTTOM]: TOP,
  [LEFT]: RIGHT,
  [RIGHT]: LEFT
}
export const directions = [TOP, BOTTOM, LEFT, RIGHT]
export const rotation = { [LEFT]: -45, [TOP]: 45, [RIGHT]: 135, [BOTTOM]: -135 }

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const props = {
  tooltip: Boolean,
  popover: Boolean,
  callout: Boolean,
  noArrow: Boolean,
  ...directions.reduce((acc, e) => (acc[e] = Boolean, acc), {})
}
