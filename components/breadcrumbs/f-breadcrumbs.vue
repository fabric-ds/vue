<template>
  <nav :aria-label="ariaLabel">
    <h2 class="sr-only">{{ ariaLabel }} </h2>
    <div class="flex space-x-8">
      <breadcrumbify>
        <slot />
      </breadcrumbify>
    </div>
  </nav>
</template>

<script>
import { h, Fragment } from 'vue'
import { interleave as coreInterleave } from '@fabric-ds/core/breadcrumbs'

const separator = h('span', { ariaHidden: true, class: 'select-none' }, '/')
const Breadcrumbify = (_, context) => {
  const slot = context.slots.default()
  // check if the default slot is using v-for or just normal elements
  const arr = slot[0].type === Fragment ? slot[0].children : slot
  return coreInterleave(arr, separator)
}

// because most of the logic is in Breadcrumbify
// there's no reason to script-setup this component
export default {
  name: 'fBreadcrumbs',
  components: { Breadcrumbify },
  props: {
    ariaLabel: { type: String, default: 'Her er du' }
  }
}
</script>
