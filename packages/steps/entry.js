import { installer } from '@fabric-ds/vue-utilities'
import fStep from './f-step.vue'
import fSteps from './f-steps.vue'

export default {
  install: installer([fStep, fSteps])
}

export { fStep, fSteps }
