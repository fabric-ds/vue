<template>
  <button :type="$attrs.type || 'button'" class="focus-ring">
    <span class="inset-0 absolute" aria-hidden="true" />
    <slot />
  </button>
</template>
