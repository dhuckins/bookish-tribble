<template>
  <div>
    Value: {{ count }}
    <button @click="addOne">+</button>
    <button @click="minusOne">-</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../store/counter/actions'

export default {
  name: 'Counter',
  computed: mapGetters(['count']),
  methods: {
    addOne () {
      console.log(this)
      this.$store.dispatch(INCREMENT_COUNTER)
    },

    minusOne () {
      console.log(this)
      this.$store.dispatch(DECREMENT_COUNTER)
    }
  }

}
</script>

<style scoped>

</style>
