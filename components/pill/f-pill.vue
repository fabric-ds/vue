<template>
  <div class="flex items-center">
    <button
      type="button"
      :class="{
        [c.pill]: true,
        [suggestion ? c.pillSuggestion : c.pillFilter]: true,
        [c.label]: true,
        [canClose ? c.labelWithClose : c.labelWithoutClose]: true,
      }"
      v-bind="$attrs"
    >
      <span class="sr-only">{{ openFilterSrText }}</span>
      <span>{{ label }}</span>
    </button>
    <button
      type="button"
      :class="{
        [c.pill]: true,
        [suggestion ? c.pillSuggestion : c.pillFilter]: true,
        [c.close]: true,
      }"
      v-if="canClose"
      @click="$emit('close')"
    >
      <span class="sr-only">{{ removeFilterSrText }} {{ label }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { i18n } from '@lingui/core';
import { activateI18n } from '../util/i18n';

await activateI18n('pill');

const c = {
  pill: 'inline-flex items-center py-8 focus-ring text-12 transition-all',
  pillSuggestion:
    'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 font-bold',
  pillFilter: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
  label: 'pl-12 rounded-l-full',
  labelSuggestion: '',
  labelFilter: '',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 py-10 rounded-r-full',
};

export default {
  name: 'fPill',
  inheritAttrs: false,
  props: {
    label: String,
    canClose: Boolean,
    suggestion: Boolean,
  },
  setup: () => {
    const openFilterSrText = i18n._('Open filter');
    const removeFilterSrText = i18n._('Remove filter');
    return {
      c,
      openFilterSrText,
      removeFilterSrText,
    };
  },
};
</script>
