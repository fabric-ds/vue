<template>
  <aside class="fixed bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none">
    <div class="toaster grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none">
      <f-expand-transition group>
        <f-toast v-for="t in shownToasts" v-bind="t.value" :key="t.value.key" />
      </f-expand-transition>
    </div>
  </aside>
</template>

<script>
import { shownToasts } from './controller.js'
import fToast from './f-toast.vue'
import { fExpandTransition } from '@finn-no/fabric-vue-expandable'

export default {
  name: 'fToastController',
  components: { fToast, fExpandTransition },
  setup: () => ({ shownToasts })
}
</script>

<style scoped>
.toaster {
  grid-template-columns: minmax(min-content, 420px);
  margin-bottom: env(safe-area-inset-bottom, 0px);
}
</style>
