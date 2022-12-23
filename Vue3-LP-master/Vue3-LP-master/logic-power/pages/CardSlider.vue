<template>
  <div class="card-slider">
    <div class="card-slider__wrapper">

        <Pagination :items="items" />
    </div>
  </div>
</template>

<script setup>
import Pagination from "~~/components/card_slider/sections/Pagination.vue"

const items = [
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
]
</script>

<style lang="scss" scoped>
</style>