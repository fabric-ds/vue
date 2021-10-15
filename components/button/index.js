import { defineCustomElement } from 'vue'
import fButton from './f-button.vue'

export const Button = { install: (app) => app.component(fButton.name, fButton) }
export { fButton }

if (!customElements.get('f-button')) {
  customElements.define('f-button', defineCustomElement({ ...fButton, styles: ['@import "https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"'] }))
}
