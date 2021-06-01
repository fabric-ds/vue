<template>
  <nav :class="{ [contained ? c.wrapperContained : c.wrapperUnderlined]: true }">
    <div :class="{ [c.tabContainer]: true, [`grid-cols-${numberOfTabs}`]: true }" ref="tabContainer">
      <slot />
      <span v-if="!contained" :class="c.wunderbar" ref="wunderbar" />
    </div>
  </nav>
</template>

<script>
import { tabs as c } from '@finn-no/fabric-component-classes'
import { provide, computed, ref, toRef, watch, nextTick, onMounted } from 'vue'
import { modelProps, createModel } from 'create-v-model'
import debounce from 'femtobounce'

export default {
  name: 'fTabs',
  props: {
    contained: Boolean,
    ...modelProps()
  },
  setup(props) {
    const activeTab = createModel({ props })
    const tabContainer = ref(null)
    const wunderbar = ref(null)
    const tabs = ref([])
    const registerTab = (tab) => tabs.value.push(tab)
    const unregisterTab = (tab) => {
      const idx = tabs.value.indexOf(tab)
      if (idx !== -1) tabs.value.splice(idx, 1)
    }
    const numberOfTabs = computed(() => tabs.value.length)
    provide('tab-controller', { registerTab, unregisterTab })
    provide('activeTab', activeTab)
    provide('contained', toRef(props, 'contained'))

    const updateWunderbar = async () => {
      if (props.contained) return
      await nextTick()
      try {
        const activeEl = tabContainer.value.querySelector('.active-tab')
        const { left: parentLeft } = tabContainer.value.getBoundingClientRect()
        const { left, width } = activeEl.getBoundingClientRect()
        wunderbar.value.style.left = (left - parentLeft) + 'px'
        wunderbar.value.style.width = width + 'px'
      } catch (err) {
        console.warn('Problem updating tabs', err)
      }
    }

    onMounted(() => {
      watch(activeTab, updateWunderbar, { immediate: true })
      watch(() => props.contained, updateWunderbar)
      const resizeHandler = new ResizeObserver(debounce(updateWunderbar, 100))
      resizeHandler.observe(tabContainer.value)
    })

    return { c, tabContainer, wunderbar, numberOfTabs }
  }
}
</script>
