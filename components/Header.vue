<template>
  <header id="main-header" class="bg-white shadow py-1 px-4">
    <div class="w-full xl:w-9/12 mx-auto flex items-center">
      <Logo />
      <span class="mx-2 inline-block" />
      <nav-bar :items="navBarLinks" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'
import { NavBarItem } from '~/models/NavBarItem'

export default Vue.extend({
  components: {
    NavBar,
  },

  computed: {
    navBarLinks(): NavBarItem[] {
      return [
        {
          title: this.$i18n.t(this.$localization.common.home),
          to: '/',
          exact: true,
        },
        {
          title: this.$i18n.t(this.$localization.models.staff.modelName),
          to: this.$routes.staffs.index,
        },
      ]
    },
  },
})
</script>

NavBarLink
