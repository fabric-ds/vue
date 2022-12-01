<script setup>
import { fToggleItem, fInput } from '#components'
import { ref } from 'vue'

const foo = ref(false)
</script>

<template>
  <div>
    <h1>Fabric Vue</h1>
    <div class="my-32">
      <div class="f-spinner" />
    </div>
    <div class="my-32">
      <div class="f-spinner" style="--spinner-size: 64px;" />
    </div>
    <!-- <div class="fixed inset-0 z-50 flex items-center"> -->
    <!-- <div class="f-spinner" /> -->
    <!-- </div> -->
  </div>
</template>
