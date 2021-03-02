import { installer } from '@finn-no/fabric-vue-utilities'
import fStep from './f-step.vue'
import fSteps from './f-steps.vue'

export default {
  install: installer([fStep, fSteps])
}

export { fStep, fSteps }
