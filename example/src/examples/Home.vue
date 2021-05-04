<template>
  <p>More info to come</p>

  <div class="flex items-center">
    <f-toggle radio class="h-24" :toggles="[{ value: 'foo' }]" />
    <div class="ml-16">
      <h4>Liten</h4>
      <p class="u-stone mb-0">Opptil 5kg</p>
    </div>
  </div>
  <!-- <h2>Info about functional components in Vue 3</h2> -->
  <!-- <h2>Note about the 'browser' field + Rollup</h2> -->
  <!-- <h2>Rollup template</h2> -->
</template>

<script>
import { fToggle } from '@finn-no/fabric-vue-forms'

export default {
  name: 'Home',
  components: { fToggle },
  setup() {

  }
}
</script>
