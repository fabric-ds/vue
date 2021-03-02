<template>
  <div>
    <h1>f-toast</h1>
    <p>This component still in development</p>

    <!-- <button class="button u-mt32" @click="showToast">Toast me!</button> -->

    <!-- <button @click="val = !val">toggle</button> -->
    <!-- <f-toast v-model="" success> -->
    <!-- <teleport to="[data-f-toast]"> -->
    <!--   <h2>OMG HI</h2> -->
    <!--   <h1 v-if="val">lel</h1> -->
    <!-- </teleport> -->
    <!-- </f-toast> -->
    <button class="button" @click="showing.good = !showing.good">toggle good</button>
    <button class="button" @click="showing.meh = !showing.meh">toggle meh</button>
    <button class="button" @click="showing.bad = !showing.bad">toggle bad</button>

    <aside class="fixed bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50">
      <div class="toaster grid auto-rows-auto gap-16 justify-items-center justify-center mx-auto">
        <transition-group name="toast">
        <div key="bad" v-if="showing.bad" class="toast flex p-8 rounded-8 border-2 w-full" :class="{ 'bg-green-50 border-green-200': false, 'bg-yellow-50 border-yellow-500': false, 'bg-red-50 border-red-200': true }">
          <div class="flex-shrink-0 rounded-full w-16 h-16 m-8" :class="{ 'bg-green-300 text-green-800': false, 'bg-yellow-300 text-yellow-800': false, 'bg-red-300 text-red-800': true }">
            <!-- alert circle -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 9V4"/><circle cx="8" cy="11.8" r=".8" fill="currentColor"/></svg>
            <!-- check circle -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9l2 1.5L11 6"/></svg> -->
          </div>
          <div class="self-center mr-8 last-child:mb-0" :class="{ 'text-green-800': false, 'text-yellow-800': false, 'text-red-800': true }">
            <!-- <p>Upload and verification failed. Please try again.</p> -->
            <p>Upload and verification failed. Please try again. Omg I am just the longest text ever.</p>
          </div>

          <!-- <span data-f-toast class="toast-content last-child:mb-0" v-html="html" role="alert" /> -->

          <div class="ml-auto p-8" :class="{ 'text-green-800': false, 'text-yellow-800': false, 'text-red-800': true }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div key="meh" v-if="showing.meh" class="toast flex p-8 rounded-8 border-2 w-full" :class="{ 'bg-green-50 border-green-200': false, 'bg-yellow-50 border-yellow-500': true }">
          <div class="flex-shrink-0 rounded-full w-16 h-16 m-8" :class="{ 'bg-green-300 text-green-800': false, 'bg-yellow-300 text-yellow-800': true }">
            <!-- alert circle -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 9V4"/><circle cx="8" cy="11.8" r=".8" fill="currentColor"/></svg>
            <!-- check circle -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9l2 1.5L11 6"/></svg> -->
          </div>
          <div class="self-center mr-8 last-child:mb-0" :class="{ 'text-green-800': false, 'text-yellow-800': true }">
            <p>Sorry! Something went wrong.</p>
          </div>

          <!-- <span data-f-toast class="toast-content last-child:mb-0" v-html="html" role="alert" /> -->

          <div class="ml-auto p-8" :class="{ 'text-green-800': false, 'text-yellow-800': true }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div key="good" v-if="showing.good" class="toast flex p-8 rounded-8 border-2 w-full" :class="{ 'bg-green-50 border-green-200': true }">
          <div class="flex-shrink-0 rounded-full w-16 h-16 m-8" :class="{ 'bg-green-300 text-green-800': true }">
            <!-- alert circle -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 9V4"/><circle cx="8" cy="11.8" r=".8" fill="currentColor"/></svg> -->
            <!-- check circle -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9l2 1.5L11 6"/></svg>
          </div>
          <div class="self-center mr-8 last-child:mb-0" :class="{ 'text-green-800': true }">
            <p>All good! Move on and keep smiling!</p>
          </div>

          <!-- <span data-f-toast class="toast-content last-child:mb-0" v-html="html" role="alert" /> -->

          <div class="ml-auto p-8" :class="{ 'text-green-800': true }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z" clip-rule="evenodd"/></svg>

          </div>
        </div>
        </transition-group>
      </div>
    </aside>

  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  setup() {
    const showing = ref({
      good: false,
      meh: false,
      bad: false
    })
    const toast = inject('toast')
    toast.push({ html: '<h3>I am a toast!</h3>', classes: 'bg-white text-gray-700', timeout: 0 })

    const showToast = () => toast.push({ html: '<h2 class="u-strong">Why hello again you amazing human!</h2>' })
    const val = ref(false)

    return { showToast, val, showing }
  }
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active,
.toast-move {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.toast-leave-active {
  position: absolute;
}
.toaster {
  grid-template-columns: minmax(min-content, 420px);
}
</style>
