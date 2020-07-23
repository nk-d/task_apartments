<template>
  <div id="app">
    <header role="banner">
      <h1>Список квартир:</h1>
    </header>
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

  #app {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>
