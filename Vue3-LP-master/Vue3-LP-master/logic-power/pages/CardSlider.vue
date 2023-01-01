<template>
  <div class="card-slider">
    <div class="card-slider__wrapper">
        <Suggestions 
          class="card-slider__suggestions" 
          :status="suggestions.topSales"
        />
        <Pagination :items="items" />
        <Slider :items="items"/>
    </div>
  </div>
</template>

<script setup>
import Suggestions from "~~/components/card_slider/UI/Suggestions.vue";
import Pagination from "~~/components/card_slider/sections/Pagination.vue"
import Slider from "~~/components/card_slider/sections/Slider.vue";

const items = [
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    
]

const suggestions = {
  topSales: 'top-sales',
  novelty: 'novelty',
  stock: 'stock'
}
</script>

<style lang="scss" scoped>
.card-slider {
  max-width: 590px;
  width: 100%;

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include mobile {
    max-width: 343px;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, space-between);

    padding: 16px 8px;
    gap: 8px;
  }

  &__suggestions {
    position: absolute;
    right: 16px;
    top: 16px;
  }
}
</style>