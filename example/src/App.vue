<template>
  <div class="layout">
    <nav class="sidebar bg-gray-50 p-16">
      <h1 class="text-22 flex items-center">
        Fabric
        <img class="h-24 ml-8" src="/vue-logo.png" />
      </h1>


      <h2 class="mt-32 text-16">Components</h2>
      <sidebar-link to="/button" label="Button" />
      <sidebar-link to="/slider" label="Slider" />
      <sidebar-link to="/switch" label="Switch" />
      <sidebar-link to="/toast" label="Toast" />
      <sidebar-link to="/modal" label="Modal" />
      <sidebar-link to="/breadcrumbs" label="Breadcrumbs" />
      <sidebar-link to="/forms" label="Forms" />
      <sidebar-link to="/box" label="Box" />
      <sidebar-link to="/card" label="Card" />
      <sidebar-link to="/expandable" label="Expandable" />
      <sidebar-link to="/steps" label="Steps" />

      <h2 class="mt-32 text-16">General</h2>
      <sidebar-link to="/" label="Home" />
      <sidebar-link to="/icons" label="Icons" />
    </nav>
    <main class="p-16 lg:p-64 mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { fExpandTransition } from '@finn-no/fabric-vue-expandable'

const SidebarLink = (props) => h(RouterLink, {
  to: props.to,
  class: 'h5 block rounded-4 pl-8 py-8 font-normal text-gray-700'
}, () => props.label)
</script>

<style scoped>
.layout {
  padding-left: 240px;
}
@media (max-width: 767px) {
  .layout {
    padding-left: 0;
  }
}
.router-link-active {
  background-color: var(--f-gray-200);
}
.vue-logo {
  height: 24px;
}
@media (min-width: 768px) {
  main {
    max-width: 1080px;
  }
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 240px;
  }
}
</style>

<style>
.token {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  white-space: pre;
  line-height: 1.8;
}
code {
  color: var(--f-aqua-800);
}
</style>
