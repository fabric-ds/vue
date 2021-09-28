import { installer } from '@fabric-ds/vue-utilities'
import fTabs from './f-tabs.vue'
import fTab from './f-tab.vue'
import fTabPanel from './f-tab-panel.vue'

export default {
  install: installer([fTabs, fTab, fTabPanel])
}

export { fTabs, fTab, fTabPanel }
