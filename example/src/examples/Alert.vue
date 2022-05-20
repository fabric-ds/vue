<template>
  <div>
    <setup title="Alert" compName="fAlert" />
    <f-alert v-model="showing" v-bind="alertProps[current]">
      <p>This is the message text that can be short or a little bit long</p>
      <f-button small>Primary CTA</f-button>
      <f-button small quiet>Secondary CTA</f-button>
    </f-alert>
    <div class="mt-32 space-y-16">
      <f-button utility small @click="showing = !showing">Toggle show/hide</f-button>
      <f-select label="Alert type" v-model="current">
        <option value="negative">Negative</option>
        <option value="positive">Positive</option>
        <option value="warning">Warning</option>
        <option value="neutral">Neutral</option>
        <option value="info">Info</option>
      </f-select>
    </div>

    <section-header label="Documentation" />

    <h4>Token</h4>
    <show-token :token="token" />
  </div>
</template>

<script setup>
import { fAlert, fButton, fSelect } from '#components'
import { ref } from 'vue'

const alertProps = {
  negative: {
    negative: true,
    title: 'Oh no there are zombies in mah Cheerios!'
  },
  positive: {
    positive: true,
    title: 'Hooray there are zombies in mah Cheerios!'
  },
  warning: {
    warning: true,
    title: 'Maybe there are zombies in mah Cheerios?'
  },
  neutral: {
    neutral: true,
    title: 'Meh, there are zombies in mah Cheerios.'
  },
  info: {
    info: true,
    title: 'Just so you know, there are zombies in mah Cheerios.'
  }
}
const current = ref('negative')
const showing = ref(true)
const token =
`<f-alert negative title="I am a title"
  <p>I am an excellent message for the user.</p>
  <f-button small>Primary CTA</f-button>
  <f-button small quiet>Secondary CTA</f-button>
</f-alert>`
</script>
