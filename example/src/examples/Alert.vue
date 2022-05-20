<script setup>
import { fAlert, fButton } from '#components'
import { ref } from 'vue'

const showing = ref(false)
</script>

<template>
  <div class="space-y-16">
    <h1>Pretend I am form stuff</h1>
    <f-button primary @click="showing = !showing">Do a neat action</f-button>
    <f-alert v-model="showing" neutral title="Oh no there are zombies in mah Cheerios">
      <p>This is the message text that can be short or a little bit long</p>
      <f-button small>Primary CTA</f-button>
      <f-button small quiet>Secondary CTA</f-button>
    </f-alert>
    <!-- <div class="mt-16">
      <f-button utility small @click="showing = !showing">Toggle</f-button>
    </div> -->
  </div>
</template>
