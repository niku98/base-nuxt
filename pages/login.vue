<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <button
      class="bg-blue-600 text-white p-2 border-0 focus:outline-none"
      @click="loginWithFacebook"
    >
      Dang nhap bang facebook
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    loginWithFacebook() {
      this.$auth.loginWith('facebook')
    },
  },
})
</script>

<style></style>
