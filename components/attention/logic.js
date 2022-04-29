import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'
import { computeCalloutArrow } from './attentionUtil.js'

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
