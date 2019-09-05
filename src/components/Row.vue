<template>
  <tr>
    <td>{{ msg }}</td>
    <td>
      <row-actions v-bind:row-index="rowIndex"></row-actions>
    </td>
  </tr>
</template>

<script>

import { mapGetters } from 'vuex'
import RowActions from './RowActions'
import { INIT_ROW } from '../store/table/actions.type'

export default {
  name: 'Row',
  beforeCreate () {
    this.$store.dispatch(INIT_ROW, { rowIndex: this.index })
  },
  computed: mapGetters(['rowIndex']),
  components: { RowActions },
  props: {
    msg: String,
    index: {
      type: Number,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
}
</script>

<style scoped>

</style>
