<template>
    <article class="apartment" v-if="apartment">
        <div class="apartment__item">
            <h2 class="apartment__header">{{ apartment.attributes.title }}</h2>
            <Address v-if="apartment.attributes.address" :address="apartment.attributes.address" />
            <KeyData v-if="apartment.attributes.area || apartment.attributes.rooms"
                    :area="apartment.attributes.area"
                    :unit="apartment.attributes.unit"
                    :rooms="apartment.attributes.rooms" />
            <div v-if="apartment.relationships && apartment.relationships.type === 'agent'">
                Агент:
                {{ apartment.relationships.attributes.last_name }}
                {{ apartment.relationships.attributes.first_name }}
                {{ apartment.relationships.attributes.middle_name }}
            </div>
            <Like :id="apartment.id" />
        </div>
    </article>
</template>

<script>
    import Address from '@/components/ApartmentAddress';
    import KeyData from '@/components/ApartmentKeyData';
    import Like from '@/components/ApartmentLike';

    export default {
        name: 'Apartment',
        components: {
            Address,
            KeyData,
            Like
        },
        props: {
            apartment: Object
        }
    }
</script>

<style lang="scss">
    .apartment + .apartment {
        margin: {
            top: 30px;
        }
    }

    .apartment {
        border: 1px solid #e0e3e6;
        border-radius: 5px;
        padding: 20px;

        &__header {
            font-size: 16px;
            margin: 0;
        }
    }
</style>