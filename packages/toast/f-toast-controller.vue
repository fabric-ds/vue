<template>
  <div></div>
  <!-- <transition name="toast-slide"> -->
    <!-- <aside class="fixed bottom-16 z-50 toast" :class="{ 'sm:top-48': belowTopbar }" v-show="showing"> -->
    <!--   <div :class="['w-full', classes]"> -->
    <!--     <div class="page-container bg-transparent flex items-center py-16"> -->
    <!--       <div class="mr-16"> -->
    <!--       </div> -->

    <!--       <span data-f-toast class="toast-content last-child:mb-0" v-html="html" role="alert" /> -->

<!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z" clip-rule="evenodd"/></svg> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </aside> -->
  <!-- </transition> -->
</template>

<script>
import { ref } from 'vue'
import { buttonReset, box as boxClasses } from '@finn-no/fabric-component-classes'

let timer = null
const queue = ref([])

const next = () => {
  // hide current toast
  // check queue
}

// const default_opts = {
//   html: '<h3>Salutations, I am a toast.</h3>',
//   classes: 'bg-green-200 text-green-700',
//   timeout: 3600
// }

// const types = {
//   neutral: { classes: 'bg-white text-gray-700' },
//   positive: { classes: 'bg-green-200 text-green-800' },
//   negative: { classes: 'bg-red-200 text-red-800' }
// }

// const html = ref('')
// const classes = ref('')
// const timer = ref(null)
// const queue = ref([])
// const showing = ref(false)
// const sleeping = ref(false)

// const merge = opts => Object.assign({}, default_opts, opts)
// export const push = opts => {
//   queue.value.push(merge(opts))
//   checkQueue()
// }
// const clearQueue = () => queue.value = []
// const clearTimer = () => {
//   if (timer.value) {
//     clearTimeout(timer.value)
//     timer.value = null
//   }
// }
// function checkQueue() {
//   if (showing.value === false && sleeping.value === false && queue.value.length > 0) show(queue.value.shift())
// }
// function show(opts) {
//   html.value = opts.html
//   classes.value = opts.classes
//   // timeout of 0 means never auto-hide
//   if (opts.timeout !== 0) timer.value = setTimeout(hide, opts.timeout)
//   showing.value = true
// }
// const sleep = () => {
//   showing.value = false
//   sleeping.value = true
// }
// const unsleep = () => {
//   sleeping.value = false
//   checkQueue()
// }
// export function hide() {
//   clearTimer()
//   sleep()
//   setTimeout(unsleep, 300)
// }

export const push = () => {}
export const hide = () => {}

export default {
  name: 'fToastController',
  setup: () => {
    const html = `
    `
    const cb = () => window.alert('foo')
    return { belowTopbar: false, classes: 'bg-red-50', showing: true, html, cb }
    // onUpdated(() => console.log("UPDATED"))
    // return { showing, html, classes, boxClasses, belowTopbar: false }
  }
}
</script>

<style>
.toast-content * {
  color: inherit;
}
</style>

<style scoped>
.toast {
  transform: translate3d(0,0,0);
}
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  transform: translateY(100%);
}
</style>
