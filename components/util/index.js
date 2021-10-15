import { defineCustomElement } from 'vue'
const prefix = Date.now().toString(36).slice(5, 7) + Math.random().toString(36).slice(2, 5)
let _id = 0

export const id = { default: () => 'f-' + prefix + _id++ }
export const absentProp = Symbol()
export const generateWebComponents = (arr) => {
  arr.forEach(c => {
    if (!customElements.get(c.name)) {
      customElements.define(c.name, defineCustomElement({ ...c.comp, styles: ['@import "https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"'] }))
    }
  })
}
export { default as fClickable } from './f-clickable'
