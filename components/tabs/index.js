import { installer } from '#util'
import fTabs from './f-tabs.vue'
import fTab from './f-tab.vue'
import fTabPanel from './f-tab-panel.vue'

export const Tabs = { install: installer([fTabs, fTab, fTabPanel]) }
export { fTabs, fTab, fTabPanel }
