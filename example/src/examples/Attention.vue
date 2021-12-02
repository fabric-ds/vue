<template>
  <section class="p-64">
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
  <div style="height: 256px">
  <!-- <div class="relative my-32 h-64"> -->
    <f-attention popover ref="popover" arrow-id="arrow">
      <h5 class="antialiased mb-4">Heading</h5>
      <p>Text goes in this box and is responsive so that if more text is written it grows in size.</p>
    </f-attention>
    <button ref="target">lol</button>
  <!-- </div> -->
  </div>
  </section>
</template>

<script setup>
import { fAttention } from '#components'
import { onMounted, ref, nextTick } from 'vue'
import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'

const target = ref(null)
const popover = ref(null)
onMounted(async () => {
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
  popover.value.$el.style.left = `${r.x}px`
  popover.value.$el.style.top = `${r.y}px`
  arrowEl.style.left = r.middlewareData.arrow.x + 'px'
})
</script>
