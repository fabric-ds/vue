<template>
  <div>
    <input type="checkbox" class="sr-only" :id="id" v-model="model" :disabled="disabled" />
    <label :for="id" class="block relative h-24 w-44 cursor-pointer group" :class="{ 'pointer-events-none': disabled }">
      <div class="absolute h-full w-full rounded-full transition-colors" :class="{
        'bg-blue-600 group-hover:bg-blue-700': model && !disabled,
        'bg-gray-300 group-hover:bg-gray-400': !model && !disabled,
        'bg-bluegray-200': disabled
      }" />
      <div class="absolute hw-accel h-16 w-16 top-4 left-4 rounded-full transition-transform" :class="{
        'translate-x': model,
        'bg-white shadow-sm': !disabled,
        'bg-bluegray-300': disabled
      }" />
    </label>
  </div>
</template>

<script>
import { createModel, modelProps } from 'create-v-model'
import { id } from '@finn-no/fabric-vue-utilities'

export default {
  name: 'fSwitch',
  props: {
    id,
    disabled: Boolean,
    ...modelProps()
  },
  setup(props) {
    const model = createModel({ props })

    return { model }
  }
}
</script>

<style scoped>
.hw-accel {
  backface-visibility: hidden;
}
.translate-x {
  transform: translateX(20px);
}
</style>
