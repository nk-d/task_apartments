<template>
  <main class="list-apartments" role="main">
    <template v-if="apartments.length">

      <Apartment v-for="apartment in apartments" :key="apartment.id" :apartment="apartment" />

    </template>

    <template v-else>Some loading with interactive elements, mb use spin</template>
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
        apartments: []
      };
    },
    created() {
      getApartments().then(res => this.apartments = res);
    }
  }
</script>

<style lang="scss">
  .list-apartments {
    display: flex;
  }
</style>