import { installer } from '@finn-no/fabric-vue-utilities'
import fTabs from './f-tabs.vue'
import fTab from './f-tab.vue'
import fTabPanel from './f-tab-panel.js'

export default {
  install: installer([fTabs, fTab, fTabPanel])
}

export { fTabs, fTab, fTabPanel }
