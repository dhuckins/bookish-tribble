<template>
  <table class="table">
    <thead>
      <tr>
        <th>header</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      <Row msg="foo" v-bind:row-index="0"></Row>
    </tbody>
  </table>
</template>

<script>

import Row from './Row'

export default {
  name: 'Table',
  components: { Row }
}
</script>

<style scoped>

</style>
