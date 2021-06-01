import { installer } from '@finn-no/fabric-vue-utilities'
import fTabs from './f-tabs.vue'
import fTab from './f-tab.vue'

export default {
  install: installer([fTabs, fTab])
}

export { fTabs, fTab }
