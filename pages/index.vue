<template>
  <div class="w-screen py-32 text-center">
    <h1 class="text-3xl">Hello, world!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'main',
  computed: {
    user() {
      return this.$auth.user
    },
  },
})
</script>

<style></style>
