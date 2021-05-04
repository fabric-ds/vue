<template>
  <div>
    <setup title="Switch" pkg-name="@finn-no/fabric-vue-switch" compName="fSwitch" />

    <section-header label="Example" />

    <div class="mt-16 space-y-32">
      <f-field label="a switch">
        <f-switch v-model="model" />
      </f-field>
      <f-field label="a disabled switch">
        <f-switch v-model="model" disabled />
      </f-field>
    </div>

    <section-header label="Documentation" />

    <h4>Token</h4>
    <show-token :token="token" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { fField } from '@finn-no/fabric-vue-forms'
import { fSwitch } from '@finn-no/fabric-vue-switch'
import Setup from '../Setup.vue'

const token =
`<f-switch v-model="model" />`

export default {
  components: { fField, fSwitch, Setup },
  setup: () => ({
    token,
    model: ref(false)
  })
}
</script>
