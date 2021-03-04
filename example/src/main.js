import { createApp } from 'vue'
import App from './App.vue'
import Cleave from 'cleave-lite'
import { createRouter, createWebHistory } from 'vue-router'
import ToastInstaller from '@finn-no/fabric-vue-toast'

import Home from './examples/Home.vue'
import Button from './examples/Button.vue'
import Slider from './examples/Slider.vue'
import Toast from './examples/Toast.vue'
import Modal from './examples/Modal.vue'
import Breadcrumbs from './examples/Breadcrumbs.vue'
import Form from './examples/Form.vue'
import Box from './examples/Box.vue'
import Expandable from './examples/Expandable.vue'
import Steps from './examples/Steps.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: Button },
  { path: '/slider', component: Slider },
  { path: '/toast', component: Toast },
  { path: '/modal', component: Modal },
  { path: '/breadcrumbs', component: Breadcrumbs },
  { path: '/forms', component: Form },
  { path: '/box', component: Box },
  { path: '/expandable', component: Expandable },
  { path: '/steps', component: Steps },
]

const router = createRouter({ history: createWebHistory(), routes })

createApp(App).provide('Cleave', Cleave).use(router).use(ToastInstaller).mount('#app')
