import { defineCustomElement } from 'vue'
import { fClickable } from '#util'
import fBox from './f-box.vue'

export const Box = { install: (app) => [fBox, fClickable].forEach(c => app.component(c.name, c)) }
export { fBox }

if (!customElements.get('f-box')) {
  customElements.define('f-box', defineCustomElement({ ...fBox, styles: ['@import "https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"'] }))
}
