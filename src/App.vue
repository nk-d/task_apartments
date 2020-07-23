<template>
  <div id="app">
    <ListApartments />
  </div>
</template>

<script>
import ListApartments from './components/ListApartments.vue'

export default {
  name: 'App',
  components: {
    ListApartments
  }
}
</script>

<style lang="scss">
html,
body {
  // mb import normalize, there is no need for this project
  margin: 0;
  padding: 0;
}
</style>
