<template>
  <div>
    <h1>Home</h1>

    <section-header label="Functional components" />
      <p class="text-14">Functional components are quite handy when working with Tailwind/Fabric, since one is often combining several classes to create a style, rather than placing one CSS class on an element, and adding styles to that class.</p>
  </div>
</template>

<script>
import { fToggle } from '@finn-no/fabric-vue-forms'

export default {
  name: 'Home',
  components: { fToggle },
  setup() {

  }
}
</script>
