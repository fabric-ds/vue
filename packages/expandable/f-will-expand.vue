<template>
  <div :key="key">
    <slot />
  </div>
</template>

<script>
import { id as key } from '@finn-no/fabric-vue-utilities'

export default {
  name: 'fWillExpand',
  props: { key }
}
</script>
