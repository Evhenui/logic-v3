<template>
<!--   <section class="about-product">
    <div class="about-product__wrapper">
      <CardProductNav :currentNav="1" />
      <CardAboutProduct />
    </div>
  </section>
  
  <CardProductAside :code="123123" :navHeight="200"/>
  <CardProductCharacteristics />
  <CardProductDescription />
  <CardProductInstruction />
  <CardProductVideo /> -->
  <div>
    <CardProduct />

  </div>
</template>

<script setup>
import CardAboutProduct from '~~/components/about_product/CardAboutProduct.vue';
import CardProductAside from '~~/components/about_product/CardProductAside.vue';
import CardProductCharacteristics from '~~/components/about_product/CardProductCharacteristics.vue';
import CardProductDescription from '~~/components/about_product/CardProductDescription.vue';
import CardProductInstruction from '~~/components/about_product/CardProductInstruction.vue';
import CardProductNav from '~~/components/about_product/CardProductNav.vue';
import CardProductVideo from '~~/components/about_product/CardProductVideo.vue';

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