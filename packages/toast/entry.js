import { mount } from 'mount-vue-component'
import ToastController, { push, hide } from './f-toast-controller.vue'

const exists = (el) => typeof(el) !== 'undefined'

export default {
  install: app => {
    let element
    if (exists(document)) element = document.createElement('div')
    mount(ToastController, { element, app })
    const iface = { push, hide }
    document.body.appendChild(element)
    app.provide('toast', iface)
    if (exists(window)) window.toast = iface
  }
}
