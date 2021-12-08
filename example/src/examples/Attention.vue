<template>
  <section class="p-64">
  <div class="mb-64">
    <f-attention tooltip bottom>
      <template #target>
        <h1 class="w-max mb-0">hover this for useless info</h1>
      </template>
      <p>lol i am a popover</p>
    </f-attention>
  </div>
  <div class="flex items-center">
    <f-box info>
      <h1>I am a box full of info</h1>
    </f-box>
    <f-attention callout right>
      <p>I'm a callout because that box over there is new or something</p>
    </f-attention>
  </div>
  <!-- <div class="relative my-32 h-64"> -->
  <!--   <f-attention tooltip> -->
  <!--     <p>Tooltip</p> -->
  <!--   </f-attention> -->
  <!-- </div> -->
  <!-- <div class="my-32 h-64"> -->
  <!--   <f-attention callout> -->
  <!--     <p>Callout</p> -->
  <!--   </f-attention> -->
  <!-- </div> -->
  <!-- <div style="height: 256px"> -->
  <!--   <f-attention popover ref="popover" arrow-id="arrow" :target="target"> -->
  <!--     <h5 class="antialiased mb-4">Heading</h5> -->
  <!--     <p>Text goes in this box and is responsive so that if more text is written it grows in size.</p> -->
  <!--   </f-attention> -->
  <!--   <button ref="target">lol</button> -->
  <!-- </div> -->
  </section>
</template>

<script setup>
import { fAttention, fBox } from '#components'
import { onMounted, ref, nextTick } from 'vue'

const target = ref(null)
const popover = ref(null)
const updatePopover = async () => {
  await nextTick()
  const arrowEl = document.querySelector('#arrow')
  const r = await computePosition(target.value, popover.value.$el, {
    middleware: [
      offset(12),
      shift({ padding: 16 }),
      arrow({ element: arrowEl })
    ]
  })
  console.log({ r })
  Object.assign(popover.value.$el.style, {
    left: '0',
    top: '0',
    transform: `translate3d(${Math.round(r.x)}px, ${Math.round(r.y)}px, 0)`
  })
  arrowEl.style.left = r.middlewareData.arrow.x + 'px'
}
// onMounted(() => {
//   updatePopover()
//   target.value.addEventListener('mouseenter', () => {
//     console.log("ENTER")
//     popover.value.$el.style.display = 'block'
//     updatePopover()
//   })
//   target.value.addEventListener('mouseleave', () => {
//     console.log("LEAVE")
//     popover.value.$el.style.display = 'none'
//   })
// })
</script>
