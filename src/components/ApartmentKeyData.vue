<template>
    <div class="key-data">
        <h3 class="key-data__header">Данные:</h3>
        <ul class="key-data__items">
            <li class="key-data__item" v-if="area && unit">
                <i class="key-data__icon">
                    <Area />
                </i>
                <div class="key-data__data">
                    <div class="key-data__text">Площадь: ({{ unit }})</div>
                    <div class="key-data__value">{{ area }}</div>
                </div>
            </li>
            <li class="key-data__item" v-if="rooms">
                <i class="key-data__icon">
                    <Rooms />
                </i>
                <div class="key-data__data">
                    <div class="key-data__text">Комнат:</div>
                    <div class="key-data__value">{{ rooms }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Area from '@/components/icons/Area';
    import Rooms from '@/components/icons/Rooms';

    export default {
        name: 'ApartmentAddress',
        components: {
            Area,
            Rooms
        },
        props: {
            area: Number,
            unit: String,
            rooms: Number
        }
    }
</script>

<style lang="scss">

    .key-data {
        margin: {
            top: 35px;
            bottom: 35px;
        };

        &__header {
            color: #6e737c;
            font-weight: normal;
            font-size: 16px;
            margin: {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            };
        }

        &__items {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
        }

        &__item {
            display: flex;
            align-items: center;
            padding-right: 30px;
            padding-top: 15px;
        }

        &__icon {
            width: 45px;
            height:45px;
            background-color: #eaecee;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            margin-right: 15px;

            svg {
                width: 25px;
                height: 25px;
                fill: #687078;
            }
        }

        &__text {
            color: #949aa1;
            font-size: 13px;
        }

        &__value {
            color: #343d49;
        }
    }
</style>