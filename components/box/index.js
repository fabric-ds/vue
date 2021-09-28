import { installer, fClickable } from '#util'
import fBox from './f-box.vue'

export const Box = { install: installer([fBox, fClickable]) }
export { fBox }
