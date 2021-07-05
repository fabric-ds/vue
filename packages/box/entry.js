import { installer } from '@finn-no/fabric-vue-utilities'
import fBox from './f-box.js'
import fClickable from './f-clickable.vue'

export default {
  install: installer([fBox, fClickable])
}

export { fBox, fClickable }
