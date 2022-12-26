<template>
  <section class="slider">
    <div class="slider__wrapper">
      <div class="slider__items">
        <CardProductVue />
        <CardProductVue />
        <CardProductVue />
        <CardProductVue />
        <CardProductVue />
        <CardProductVue />
        <CardProductVue />
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script setup>
import Pagination from '~~/components/new_product_slider/sections/Pagination.vue'
import CardProductVue from './CardProduct.vue';
</script>

<style lang="scss" scoped>
.slider {
  max-width: 1440px;
  width: 100%;

  &__wrapper {
    @include flex-container(column, flex-start,);

    gap: 48px;
  }

  &__items {
    width: 100%;

    @include flex-container(row, flex-start,);

    gap: 8px;

    overflow: hidden;
  }
}
</style>