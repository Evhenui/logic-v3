<template>
  <section class="offers">
    <h1 class="offers__title">
      Мы готовы взять на себя все заботы, связанные с внедрением систем
      видеонаблюдения, чтобы вы могли получить эффективный инструмент контроля и
      обеспечения безопасности вашего имущества.
    </h1>
    <div class="offers__items">
      <CardOffers
        v-for="(item,index) in values"
        :key="index"
        :title="item.title"
        :img="item.img"
        :subtitle="item.subtitle"
      />
    </div>
  </section>
</template>

<script setup>
import CardOffers from "../UI/CardOffers.vue";

defineProps({
  values: { type: Array, required: true}
});
</script>

<style lang="scss" scoped>
.offers {
  &__title {
    max-width: 954px;
    width: 100%;

    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;
    color: #009b3e;

    margin: 0 auto 124px auto;

    @include bigMobile {
      @include font(16, 19, 700);
      text-align: left;

      margin: 0 auto 84px auto;
    }
  }

  &__items {
    @include flex-container(row, space-between);
    flex-wrap: wrap;

    gap: 149px 16px;

    @include bigMobile {
      gap: 99px;
    }
  }
}
</style>
    