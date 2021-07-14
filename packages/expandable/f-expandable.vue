<template>
  <div class="f-expandable" :class="wrapperClasses">
    <button v-if="hasTitle" type="button" :aria-expanded="expanded" :class="buttonClasses" @click="expanded = !expanded">
      <slot name="title" :expanded="expanded" />
      <span class="h4" v-if="title">{{ title }}</span>
      <div :class="chevronClasses" v-if="chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 5.5L8 11l5.5-5.5"/></svg>
      </div>
    </button>
    <component :is="content" @expand="$emit('expand')" @collapse="$emit('collapse')">
      <div v-if="expanded">
        <div :class="contentClasses">
          <slot />
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { modelProps, createModel } from 'create-v-model'
import { absentProp } from '@finn-no/fabric-vue-utilities'
import { buttonReset, box as boxClasses } from '@finn-no/fabric-component-classes'

export default {
  name: 'fExpandable',
  props: {
    title: String,
    box: Boolean,
    bleed: Boolean,
    info: Boolean,
    buttonClass: String,
    contentClass: String,
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
    ...modelProps({ modelDefault: absentProp })
  },
  setup: (props, { emit, slots }) => {
    const expanded = (props.modelValue === absentProp) ? ref(false) : createModel({ props, emit })

    const hasTitle = computed(() => props.title || slots.title)

    const wrapperClasses = computed(() => ({
      'bg-aqua-50': props.info,
      ['py-0 px-0 ' + boxClasses.box]: props.box,
      [boxClasses.bleed]: props.bleed
    }))

    const buttonClasses = computed(() => ({
      [props.buttonClass || '']: true,
      [buttonReset + ' hover:underline focus:underline']: true,
      ['w-full text-left relative ' + boxClasses.box]: props.box,
      'hover:text-aqua-700 active:text-aqua-800': props.info
    }))

    const chevronClasses = computed(() => ({
      'inline-block align-middle transform transition-transform': true,
      '-rotate-180': expanded.value,
      'relative left-8': !props.box,
      'f-expandable-chevron absolute right-16': props.box
    }))

    const contentClasses = computed(() => ({
      [props.contentClass || '']: true,
      [boxClasses.box + (hasTitle.value ? ' pt-0' : '')]: props.box,
    }))

    return { expanded, buttonClasses, chevronClasses, contentClasses, wrapperClasses, hasTitle }
  }
}
</script>
