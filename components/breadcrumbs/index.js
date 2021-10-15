import { defineCustomElement } from 'vue'
import fBreadcrumbs from './f-breadcrumbs.vue'

export const Breadcrumbs = { install: (app) => app.component(fBreadcrumbs.name, fBreadcrumbs) }
export { fBreadcrumbs }

if (!customElements.get('f-breadcrumbs')) {
  customElements.define('f-breadcrumbs', defineCustomElement({ ...fBreadcrumbs, styles: ['@import "https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"'] }))
}
