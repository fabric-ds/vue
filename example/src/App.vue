<script setup>
import { routes } from './router'
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-16">
    <nav class="flex flex-col bg-gray-100 p-32 pt-64">
      <router-link v-for="r in routes" :to="{ name: r.name }" class="field-label">{{ r.name }}</router-link>
    </nav>
    <div class="p-64 col-span-2">
      <router-view />
    </div>
  </div>
</template>

<style>
.token {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  white-space: pre;
  line-height: 1.8;
}
code {
  color: var(--f-aqua-800);
}
</style>
