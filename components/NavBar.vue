<template>
  <nav>
    <ul class="flex">
      <li
        v-for="(item, index) of items"
        :key="'nav-bar-item' + index"
        class="nav-item"
      >
        <nav-bar-link :to="item.to" :exact="item.exact">{{
          item.title
        }}</nav-bar-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { NavBarItem } from '@/models/NavBarItem'

import Vue, { PropType } from 'vue'
import NavBarLink from './NavBarLink.vue'
export default Vue.extend({
  components: {
    NavBarLink,
  },

  props: {
    items: {
      type: Array as PropType<NavBarItem[]>,
      required: true,
    },
  },
})
</script>

<style scoped>
.nav-item + .nav-item {
  @apply ml-1;
}
</style>
