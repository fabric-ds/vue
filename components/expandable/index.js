import { installer } from '#util'
import fExpandable from './f-expandable.vue'
import fExpandTransition from './f-expand-transition.js'
import fWillExpand from './f-will-expand.vue'

export const Expandable = { install: installer([fExpandable, fExpandTransition, fWillExpand]) }
export { fExpandable, fExpandTransition, fWillExpand }
