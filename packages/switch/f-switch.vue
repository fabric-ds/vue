<template>
  <div class="tap-highlight-transparent">
    <input type="checkbox" class="sr-only" :id="id" v-model="model" :disabled="disabled" />
    <label :for="id" :class="{ [c.label]: true, [c.labelDisabled]: disabled }">
      <div :class="{
        [c.switchTrack]: true,
        [c.switchTrackSelected]: model && !disabled,
        [c.switchTrackUnselected]: !model && !disabled,
        [c.switchTrackDisabled]: disabled
      }" />
      <div :class="{
        [c.switchThumb]: true,
        [c.switchThumbSelected]: model,
        [c.switchThumbNotDisabled]: !disabled,
        [c.switchThumbDisabled]: disabled
      }" />
    </label>
  </div>
</template>

<script>
import { switchToggle as c } from '@finn-no/fabric-component-classes'
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

    return { model, c }
  }
}
</script>
