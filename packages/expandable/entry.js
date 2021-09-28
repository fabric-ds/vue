import { installer } from '@fabric-ds/vue-utilities'
import fExpandable from './f-expandable.vue'

export default {
  install: installer([fExpandable])
}

export { fExpandable }
export { default as fExpandTransition } from './f-expand-transition.js'
export { default as fWillExpand } from './f-will-expand.vue'
