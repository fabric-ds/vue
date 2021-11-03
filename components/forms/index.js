import fField from './f-field.vue'
import fInput from './f-input.vue'
import fSelect from './f-select.vue'
import fTextarea from './f-textarea.vue'
import fToggle from './f-toggle.vue'
import fToggleItem from './f-toggle-item.vue'
import fForm from './f-form.vue'
import fSuffix from './f-suffix.vue'

export const Forms = { install: (app) => [fField, fInput, fSelect, fTextarea, fToggle, fToggleItem, fForm, fSuffix].forEach(c => app.component(c.name, c)) }
export * from './validation'
export { fInput, fSelect, fTextarea, fToggle, fToggleItem, fField, fForm, fSuffix }
