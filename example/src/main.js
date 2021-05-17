import { createApp } from 'vue'
import App from './App.vue'
import Cleave from 'cleave-lite'
import { createRouter, createWebHistory } from 'vue-router'
import ToastInstaller from '@finn-no/fabric-vue-toast'
import { ShowToken, VariantHeading, SectionHeader } from './util.js'
import DocsTable from './DocsTable.vue'

import Home from './examples/Home.vue'
import Icons from './examples/Icons.vue'
import Button from './examples/Button.vue'
import Slider from './examples/Slider.vue'
import Switch from './examples/Switch.vue'
import Toast from './examples/Toast.vue'
import Modal from './examples/Modal.vue'
import Breadcrumbs from './examples/Breadcrumbs.vue'
import Form from './examples/Form.vue'
import Box from './examples/Box.vue'
import Expandable from './examples/Expandable.vue'
import Steps from './examples/Steps.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/icons', component: Icons },
  { path: '/button', component: Button },
  { path: '/slider', component: Slider },
  { path: '/switch', component: Switch },
  { path: '/toast', component: Toast },
  { path: '/modal', component: Modal },
  { path: '/breadcrumbs', component: Breadcrumbs },
  { path: '/forms', component: Form },
  { path: '/box', component: Box },
  { path: '/expandable', component: Expandable },
  { path: '/steps', component: Steps },
]

const scrollBehavior = () => ({ top: 0 })
const router = createRouter({ history: createWebHistory(), routes, scrollBehavior })

createApp(App)
  .provide('Cleave', Cleave)
  .component('show-token', ShowToken)
  .component('variant-heading', VariantHeading)
  .component('section-header', SectionHeader)
  .component('docs-table', DocsTable)
  .use(router)
  .use(ToastInstaller)
  .mount('#app')
