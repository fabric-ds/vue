import { generateWebComponents } from '#util'
import fBreadcrumbs from './f-breadcrumbs.vue'

export const Breadcrumbs = { install: (app) => app.component(fBreadcrumbs.name, fBreadcrumbs) }
export { fBreadcrumbs }

generateWebComponents([
  { name: 'f-breadcrumbs', comp: fBreadcrumbs }
])
