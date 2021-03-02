import { installer } from '@finn-no/fabric-vue-utilities'
import fExpandable from './f-expandable.vue'

export default {
  install: installer([fExpandable])
}

export { fExpandable }
export { fExpandTransition } from './f-expand-transition'
export { default as fWillExpand } from './f-will-expand.vue'
