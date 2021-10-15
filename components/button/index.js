import { generateWebComponents } from '#util'
import fButton from './f-button.vue'

export const Button = { install: (app) => app.component(fButton.name, fButton) }
export { fButton }

generateWebComponents([
  { name: 'f-button', comp: fButton }
])
