import { h } from 'vue'

export const ShowToken = (props) => h('p', {
  class: 'token text-12 text-aqua-800 mt-16 p-16 bg-gray-100 rounded-4 overflow-scroll'
}, props.token)

export const VariantHeading = (props) => h('h4', {
  class: 'h4 inline-block text-aqua-600 mt-32 mb-12 py-4 px-8 border-aqua-500 border border-l-0 border-r-0'
}, props.label)

export const SectionHeader = (props) =>  h('h3', { class: 'h3 mb-32 mt-64 border-b-2 pb-8' }, props.label)
