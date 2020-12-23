<template>
  <nuxt-link :to="to" class="nav-link" :exact="exact" active-class="active">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="css" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.nav-link {
  @apply py-2 px-4 inline-block font-bold rounded-md;
}

.nav-link:hover,
.nav-link.active {
  @apply bg-green-400 text-white;
}
</style>
