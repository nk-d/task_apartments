<template>
    <div class="address">
        <div class="address__icon">
            <AddressIcon />
        </div>
        <div class="address__text">
            Город {{ address.city }},
            улица {{ address.street }},
            дом {{ address.house }},
            квартира {{ address.room }}
        </div>
    </div>
</template>

<script>
    import AddressIcon from '@/components/icons/Address';

    export default {
        name: 'ApartmentAddress',
        components: {
            AddressIcon
        },
        props: {
            address: Object
        }
    }
</script>

<style lang="scss">
    .address {
        display: flex;
        margin-top: 10px;

        &__icon svg {
            width: 15px;
            height: 15px;
            fill: rgba(#6642d6, .7);
            margin-right: 10px;
        }

        &__text {
            color: rgba(#6642d6, .7);
        }
    }
</style>