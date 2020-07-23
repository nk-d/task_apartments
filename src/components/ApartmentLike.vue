<template>
    <button class="like__button" @click="likeHandler" v-if="true">
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
    }
</style>