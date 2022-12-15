<template>
    <button @click.prevent class="button-serach">Найти</button>
</template>

<script setup>
import { storeToRefs } from "pinia";
</script>

<style lang="scss" scoped>
.button-serach {
    width: max-content;

    @include font(16, 19, 400);
    color: white;

    background-color: #F36C21;
    border-radius: 6px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 8px 16px;

    transition: background-color .1s ease-in-out;

    &:hover {
        background-color: #FF5B00;
    }

    &:active {
        background-color: #AC450B;
    }

    &:disabled {
        cursor: auto;

        background-color: #8A8A8A;
    }
}
</style>
      