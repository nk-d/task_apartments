<template>
    <button :class="{ 'like': true, 'like--active': isAdded }" @click="likeHandler" v-if="true">
        {{ isAdded ? 'Удалить из закладок' : 'Добавить в закладки' }}
    </button>
</template>

<script>
    import { LIKED } from '@/constants';

    export default {
        name: 'Like',
        data() {
            return {
                isAdded: false
            };
        },
        props: {
            id: Number
        },
        created() {
            let liked = JSON.parse(localStorage.getItem(LIKED) || '[]');

            this.isAdded = liked.some(el => el === this.$props.id);
        },
        methods: {
            likeHandler() {
                let liked = JSON.parse(localStorage.getItem(LIKED));

                if(liked === null || !liked.length) {
                    localStorage.setItem(LIKED, JSON.stringify([this.$props.id]));
                    this.isAdded = true;
                    return true;
                } else if(liked.some(el => el === this.$props.id)) {
                    let index = liked.indexOf(this.$props.id);
                    liked.splice(index, 1);
                    if (index > -1) {
                        localStorage.setItem(LIKED, JSON.stringify(liked));
                        this.isAdded = false;
                    }
                } else {
                    localStorage.setItem(LIKED,
                        JSON.stringify(
                            [...liked, this.$props.id]
                        )
                    );
                    this.isAdded = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .like {
        border: 1px solid gray;
        padding: 7px 15px;
        border-radius: 5px;
        margin-top: 15px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color .3s;

        &:hover {
            background-color: #edffe0;
        }
        
        &--active {
            border-color: #009843;
            
            &:hover {
                background-color: #ffd1d2;
            }
        }
    }
</style>