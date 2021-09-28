import { installer, fClickable } from '@fabric-ds/vue-utilities'
import fBox from './f-box.vue'

export default {
  install: installer([fBox, fClickable])
}

export { fBox, fClickable }
