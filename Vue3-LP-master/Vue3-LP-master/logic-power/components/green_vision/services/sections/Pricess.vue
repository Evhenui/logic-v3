<template>
  <section class="pricess">
    <h1 class="pricess__title">Стоимость установки систем видеонаблюдения</h1>
    <div class="pricess__cards">
      <CardPrice
        v-for="(item,index) in values"
        :key="index"
        :img="item.img"
        :title="item.title"
        :price="item.price"
        :descriptions="item.descriptions"
      />      
    </div> 
  </section>
</template>

<script setup>

import CardPrice from "../UI/CardPrice.vue";

defineProps({
  values: { type: Array, required: true}
});
</script>

<style lang="scss" scoped>
.pricess {
  &__title {
    @include font(30, 39, 600);
    letter-spacing: 0.02em;
    color: #1f1f1f;
    text-align: center;

    margin-bottom: 24px;

    @include bigMobile {
      @include font(16, 19, 700);
      text-transform: uppercase;
    }
  }

  &__cards {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 16px;
  }
}
</style>
  