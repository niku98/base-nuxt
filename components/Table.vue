<template>
  <div class="overflow-x-auto max-w-full">
    <table class="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th
            v-for="(column, index) of columns"
            :key="'table-column-' + index"
            :class="['border py-2 px-3 text-left', column.headerClasses]"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) of data" :key="'table-row-' + index">
          <td
            v-for="(column, colIndex) of columns"
            :key="'table-row-' + index + '-column-' + colIndex"
            class="border py-1 px-3"
          >
            <template v-if="column.slot">
              <slot
                :name="column.slot"
                :record="record"
                :col="record[column.dataIndex]"
                :index="index"
              />
            </template>
            <template v-else>
              {{ record[column.dataIndex] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TableColumn } from '@/models/Table'

export default Vue.extend({
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    console.log(this.$slots)
  },
})
</script>
