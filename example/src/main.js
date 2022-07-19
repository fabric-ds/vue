import { createApp } from 'vue';
import App from './App.vue';
import Cleave from 'cleave-lite';
import { router } from './router'
import { ShowToken, VariantHeading, SectionHeader, ExampleHeader } from './util.js';
import { setWasm, setCDN, getHighlighter } from 'shiki'
import DocsTable from './DocsTable.vue';
import Setup from './Setup.vue';

setWasm('/shiki/dist/onigasm.wasm')
setCDN('/shiki/')

const highlighter = await getHighlighter({ theme: 'nord', langs: ['js', 'vue-html'] })

createApp(App)
  .provide('Cleave', Cleave)
  .provide('highlighter', highlighter)
  .component('show-token', ShowToken)
  .component('variant-heading', VariantHeading)
  .component('section-header', SectionHeader)
  .component('example-header', ExampleHeader)
  .component('docs-table', DocsTable)
  .component('setup', Setup)
  .use(router)
  .mount('#app');
