<template>
  <section class="our-project">
    <h1 class="our-project__title">Наши объекты</h1>
    <div class="our-project__cards">
      <CardProject
        v-for="(item, index) in values"
        :key="index"
        :img="item.img"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </div>
  </section>
</template>

<script setup>
import CardProject from "../UI/CardProject.vue";

defineProps({
  values: { type: Array, required: true}
});
</script>

<style lang="scss" scoped>
.our-project {
  @include flex-container(column, center, center);

  gap: 24px;

  &__title {
    @include font(30, 39, 600);
    letter-spacing: 0.02em;
    color: #1f1f1f;

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
  