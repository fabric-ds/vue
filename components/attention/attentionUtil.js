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

export const props = {
  tooltip: Boolean,
  popover: Boolean,
  callout: Boolean,
  noArrow: Boolean,
  ...directions.reduce((acc, e) => (acc[e] = Boolean, acc), {})
}

const middlePosition = 'calc(50% - 7px)'
const isDirectionVertical = (name) => [TOP, BOTTOM].includes(name)
export const computeCalloutArrow = ({ actualDirection, directionName, arrowEl }) => {
  actualDirection = directionName
  const directionIsVertical = isDirectionVertical(directionName)
  arrowEl.style.left = directionIsVertical ? middlePosition : null
  arrowEl.style.top = !directionIsVertical ? middlePosition : null
}
