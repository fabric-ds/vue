import { installer, fClickable } from '@finn-no/fabric-vue-utilities'
import fBox from './f-box.js'

export default {
  install: installer([fBox, fClickable])
}

export { fBox, fClickable }
