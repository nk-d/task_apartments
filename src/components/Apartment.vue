<template>
    <div class="apartment" v-if="apartment">
        some data
    </div>
</template>

<script>
    export default {
        name: 'Apartment',
        props: {
            apartment: Object
        }
    }
</script>

<style lang="scss">
    .apartments {
    }
</style>