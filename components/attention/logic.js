import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'

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

const middlePosition = 'calc(50% - 7px)'
const isDirectionVertical = (name) => [TOP, BOTTOM].includes(name)
const computeCalloutArrow = ({ actualDirection, directionName, arrowEl }) => {
  actualDirection = directionName
  const directionIsVertical = isDirectionVertical(directionName)
  arrowEl.style.left = directionIsVertical ? middlePosition : null
  arrowEl.style.top = !directionIsVertical ? middlePosition : null
}


export const useRecompute = (state) => async () => {
  if (!state.isShowing) return // we're not currently showing the element, no reason to recompute
  await state?.waitForDOM?.()  // wait for DOM to settle before computing
  if (state.isCallout) return computeCalloutArrow(state) // we don't move the callout box, only its arrow
  const position = await computePosition(state.targetEl, state.attentionEl, {
    placement: state.directionName,
    middleware: [
      // Should we make this configurable, but have these as sane defaults?
      flip(),
      offset(8),
      shift({ padding: 16 }),
      arrow({ element: state.noArrow ? undefined : state.arrowEl }) // FIXME
    ]
  })
  state.actualDirection = position.placement
  Object.assign(state.attentionEl.style, {
    left: '0',
    top: '0',
    transform: `translate3d(${Math.round(position.x)}px, ${Math.round(position.y)}px, 0)`
  })
  let { x, y } = position.middlewareData.arrow
  state.arrowEl.style.left = x ? (x + 'px') : null
  state.arrowEl.style.top = y ? (y + 'px') : null
}
