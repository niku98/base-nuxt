<template>
  <button class="button bg-green-500">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.button {
  @apply py-2 px-3 border-0 inline-flex items-center rounded text-white font-bold;
}

.button:focus {
  @apply outline-none;
}
</style>
