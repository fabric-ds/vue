<template>
  <div :class="wrapperClasses">
    <button v-if="title || $slots.title" :aria-expanded="expanded" :class="buttonClasses" @click="expanded = !expanded">
      <slot name="title" />
      <span class="h4" v-if="title">{{ title }}</span>
      <div :class="chevronClasses" v-if="chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 5.5L8 11l5.5-5.5"/></svg>
      </div>
    </button>
    <component :is="content" @expand="$emit('expand')" @collapse="$emit('collapse')">
      <f-will-expand v-if="expanded">
        <div :class="contentClasses">
          <slot />
        </div>
      </f-will-expand>
    </component>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import { modelProps, createModel } from 'create-v-model'
import { buttonReset, box as boxClasses } from '@finn-no/fabric-component-classes'
import fWillExpand from './f-will-expand.vue'

export default {
  name: 'fExpandable',
  components: { fWillExpand },
  props: {
    title: String,
    box: Boolean,
    bleed: Boolean,
    info: Boolean,
    buttonClass: String,
    chevron: {
      type: Boolean,
      default: true
    },
    as: {
      type: String,
      default: 'div'
    },
    content: {
      default: 'div'
    },
    ...modelProps()
  },
  setup: (props, { emit }) => {
    const expanded = ('modelValue' in props) ? createModel({ props, emit }) : ref(false)

    const wrapperClasses = computed(() => ({
      'bg-aqua-50': props.info,
      ['py-0 px-0 ' + boxClasses.box]: props.box,
      [boxClasses.bleed]: props.bleed
    }))

    const buttonClasses = computed(() => ({
      [props.buttonClass]: true,
      [buttonReset + ' hover:underline focus:underline']: true,
      ['w-full text-left relative ' + boxClasses.box]: props.box,
      'hover:text-aqua-700 active:text-aqua-800': props.info
    }))

    const chevronClasses = computed(() => ({
      'inline-block align-middle transform transition-transform': true,
      '-rotate-180': expanded.value,
      'relative left-8': !props.box,
      'box-chevron absolute right-16': props.box
    }))

    const contentClasses = computed(() => ({
      ['pt-0 ' + boxClasses.box]: props.box,
    }))

    return { expanded, buttonClasses, chevronClasses, contentClasses, wrapperClasses }
  }
}
</script>

<style scoped>
.box-chevron {
  top: calc(50% - 8px);
}
</style>
