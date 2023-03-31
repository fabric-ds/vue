<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClass"
    v-bind="saneDefaults"
  >
    <slot>{{ label }}</slot>
    <span
      v-if="loading"
      role="progressbar"
      aria-valuenow="0"
      :aria-valuetext="ariaValueText"
      class="sr-only"
    />
  </component>
</template>

<script>
export default { name: 'fButton' };
</script>

<script setup>
import { i18n } from '@lingui/core';
import { computed, useAttrs } from 'vue';
import { activateI18n } from '../util/i18n';

await activateI18n('button');

const attrs = useAttrs();
const props = defineProps({
  primary: Boolean,
  secondary: Boolean,
  negative: Boolean,
  utility: Boolean,
  quiet: Boolean,
  small: Boolean,
  link: Boolean,
  pill: Boolean,
  loading: Boolean,
  href: String,
  label: String,
  ariaValueText: { type: String, default: i18n._('Loading...') },
});
const buttonClass = computed(() => ({
  button: true,
  // primary buttons
  'button--primary': props.primary && !props.negative,
  'button--destructive': props.primary && props.negative,
  // quiet
  'button--flat':
    (props.secondary || (!props.negative && !props.utility)) && props.quiet,
  'button--destructive-flat': props.negative && props.quiet,
  'button--utility-flat': props.utility && props.quiet,
  // others
  'button--small': props.small,
  'button--utility': props.utility && !props.quiet,
  'button--link': props.link,
  'button--pill': props.pill,
  'button--in-progress': props.loading,
}));
const saneDefaults = computed(() => ({
  type: props.href ? undefined : attrs.type || 'button',
  rel: attrs.target === '_blank' ? attrs.rel || 'noopener' : undefined,
}));
</script>
