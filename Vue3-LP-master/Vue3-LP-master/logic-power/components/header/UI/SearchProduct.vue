<template>
    <div class="search">
        <form action="" class="search__form">
            <div class="search__image">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.375 17.0625C13.5171 17.0625 16.875 13.7046 16.875 9.5625C16.875 5.42036 13.5171 2.0625 9.375 2.0625C5.23286 2.0625 1.875 5.42036 1.875 9.5625C1.875 13.7046 5.23286 17.0625 9.375 17.0625Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.75 18.9375L14.6719 14.8594" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <input type="text" class="search__input" placeholder="Поиск товаров">
            <ButtonSearch class="search__button" />
        </form>
        <div class="search__result">

        </div>
    </div>
</template>

<script setup>
import ButtonSearch from "./ButtonSearch.vue";
import { storeToRefs } from "pinia";
</script>

<style lang="scss" scoped>
.search {
    max-width: 700px;
    width: 100%;

    &__form {
        position: relative;

        @include flex-container(row, center, center);
    }

    &__image {
        position: absolute;
        left: 8px;

        font-size: 0;
    }

    &__input {
        width: 100%;

        @include font(16, 22, 400);
        color: #8a8a8a;
        letter-spacing: 0.02em;

        background-color: white;

        border-radius: 6px;

        padding: 8px 80px 8px 40px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;

            margin: 0;
        }

        &::placeholder {
            @include font(16, 22, 400);
            color: black;
        }

        &:focus {
            color: rgba(0, 0, 0, 0.87);
        }
    }

    &__result {
    }

    &__button {
        height: 100%;

        position: absolute;
        right: 0;
    }
}

</style>
      