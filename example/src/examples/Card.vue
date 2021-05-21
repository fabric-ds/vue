<template>
  <div>
    <setup title="Card" pkg-name="@finn-no/fabric-vue-card" compName="fCard" />

    <section-header label="Example" />

    <f-card>
      <div class="p-24">
        <h1 class="mb-0">lol</h1>
      </div>
    </f-card>
  </div>
</template>

<script>
import Setup from '../Setup.vue'
import { fCard } from '@finn-no/fabric-vue-card'

export default {
  components: { Setup, fCard }
}
</script>
