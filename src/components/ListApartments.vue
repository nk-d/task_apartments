<template>
  <main class="list-apartments" role="main">
    <template v-if="apartments.length && !error">

      <Apartment v-for="apartment in apartments" :key="apartment.id" :apartment="apartment" />

    </template>

    <template v-else-if="!apartments.length && !error">Some loading with interactive elements, mb use spin</template>

    <template v-else-if="error">Упс, ошибка, попробуйте обновить страницу позже!</template>
  </main>
</template>

<script>
  import { getApartments } from '@/services/ApiClient';
  import Apartment from "./Apartment";

  export default {
    name: 'ListApartments',
    components: {Apartment},
    data() {
      return {
        apartments: [],
        error: false
      };
    },
    created() {
      getApartments()
              .then(res => this.apartments = res)
              .catch(() => this.error = true);
    }
  }
</script>

<style lang="scss">
  .list-apartments {
    display: flex;
  }
</style>