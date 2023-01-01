<template>
  <div>
    <CardProduct />
  </div>
</template>

<script setup>
import CardProduct from '~~/components/about_product/CardProduct.vue'

</script>

<style lang="scss" scoped>
.about-product {
  @extend %width-main;

  margin: auto;
  padding: 0 16px;

  &__wrapper {
    
  }
}
</style>