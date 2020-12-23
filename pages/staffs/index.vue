<template>
  <div class="px-4 w-full xl:w-9/12 mx-auto">
    <h1 class="text-3xl mb-4">Danh sach nhan vien</h1>
    <Table :columns="columns" :data="staffs">
      <template #full-name="{ record }">
        <div class="flex items-center">
          <img :src="record.picture" class="rounded w-10 mr-2" />
          <span class="font-bold">{{
            record.firstName + ' ' + record.lastName
          }}</span>
        </div>
      </template>
      <template #actions="{ record }">
        <NuxtLink :to="$routes.staffs.detail(record.id)">
          <Button><EyeIcon class="w-5" /> </Button>
        </NuxtLink>
        <Button class="bg-red-500"><EyeIcon class="w-5" /> </Button>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import storeConstants from '@/constants/store'
import EyeIcon from '@/components/icons/EyeIcon.vue'
import Table from '~/components/Table.vue'
import Button from '~/components/Button.vue'

export default Vue.extend({
  components: { Table, EyeIcon, Button },
  layout: 'main',

  fetch() {
    return this.fetchStaffs()
  },

  data() {
    return {
      columns: [
        {
          title: 'Ma nhan vien',
          dataIndex: 'id',
        },
        {
          title: 'Ten nhan vien',
          dataIndex: 'id',
          slot: 'full-name',
        },
        {
          title: 'Dia chi email',
          dataIndex: 'email',
        },
        {
          title: '',
          dataIndex: 'id',
          slot: 'actions',
        },
      ],
    }
  },

  computed: {
    staffs() {
      return this.$store.state.staff.list
    },
  },

  methods: {
    ...mapActions(storeConstants.staff.name, {
      fetchStaffs: storeConstants.staff.actions.fetch,
    }),
  },
})
</script>
