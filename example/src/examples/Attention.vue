<template>
  <div class="relative my-32 h-64">
    <f-attention tooltip>
      <p>Tooltip</p>
    </f-attention>
  </div>
  <div class="relative my-32 h-64">
    <f-attention callout>
      <p>Callout</p>
    </f-attention>
  </div>
  <div class="relative my-32 h-64">
    <f-attention popover>
      <h5 class="antialiased mb-4">Heading</h5>
      <p>Text goes in this box and is responsive so that if more text is written it grows in size.</p>
    </f-attention>
  </div>
</template>

<script setup>
import { fAttention } from '#components'
</script>
