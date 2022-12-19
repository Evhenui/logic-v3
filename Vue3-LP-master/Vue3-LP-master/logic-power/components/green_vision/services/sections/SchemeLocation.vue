<template>
  <section class="scheme">
    <h1 class="scheme__title">Приклад схеми установки системи безпеки</h1>
    <div class="scheme__image">
      <img :src="`/_nuxt/public/img/scheme-${img}.png`" alt="scheme home">
    </div>
  </section>
</template>

<script setup>
defineProps({
  img: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.scheme {
  @include flex-container(column, center, center);

  gap: 64px;

  @include bigMobile {
    gap: 16px;
  }

  &__title {
    @include font(25, 35, 700);
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
    color: #1f1f1f;

    @include bigMobile {
      @include font(16, 19, 700);
    }
  }
}
</style>
        