<template>
  <section class="part-process">
    <div class="part-process__wrapper">
      <h1 class="part-process__title">
        Из каких этапов состоит процесс установки системы видеонаблюдения?
      </h1>
      <div class="part-process__cards">
        <CardPartInstall 
          class="part-process__card"
          v-for="(item,index) in values"
          :key="index"
          :number="index + 1"
          :title="item.title"
          :subtitle="item.subtitle"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardPartInstall from "../UI/CardPartInstall.vue";

defineProps({
  values: { type: Array, required: true}
});

</script>

<style lang="scss" scoped>
.part-process {
  background-color: #f5f5f5;

  &__wrapper {
    @extend %width-main;

    padding: 48px 16px;
    margin: 0 auto;

    @include bigMobile {
      padding: 24px 16px;
    }
  }

  &__title {
    max-width: 665px;
    width: 100%;

    @include font(30, 39, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin: 0 auto 24px auto;

    @include bigMobile {
      @include font(16, 19, 700);
      text-transform: uppercase;
    }
  }

  &__cards {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 24px;

    @include bigMobile {
      gap: 16px;
    }
  }
}
</style>
  