<template>
  <section>
    <h3 class="h1 mb-32">{{ title }}</h3>
    <section-header label="Setup" />
    <h5 class="font-normal">Install</h5>
    <p class="bg-gray-100 p-16 rounded-4 text-12"><code>yarn add {{ pkgName }}</code></p>
    <h5 class="mt-32 font-normal">Use in entire app</h5>
    <p class="bg-gray-100 p-16 rounded-4 text-12">
      <code class="block mb-4">import {{ title }} from '{{ pkgName }}'</code>
      <code>app.use({{ title }})</code>
    </p>
    <h5 class="mt-32 font-normal">Use in one component and special imports</h5>
    <p class="bg-gray-100 p-16 rounded-4 text-12"><code>import { {{ compName }} } from '{{ pkgName }}'</code></p>
  </section>
</template>

<script>
import { SectionHeader } from './util'

export default {
  components: { SectionHeader },
  props: {
    title: String,
    pkgName: String,
    compName: String
  }
}
</script>
