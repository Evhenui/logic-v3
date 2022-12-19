<template>
  <div class="card-capabilities" :class="{ column: column }">
    <div class="card-capabilities__wrapper">
      <div class="card-capabilities__image-wrapper">
        <img :src="`/_nuxt/public/icons/${img}-capabilities.svg`" :alt="img" />
      </div>
      <p class="card-capabilities__subtitle">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  column: { type: Boolean, required: false, default: false },
  img: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.card-capabilities {
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  &.column {
    .card-capabilities__wrapper {
      @include flex-container(column, center, center);
    }
  }

  &__wrapper {
    @include flex-container(row, center, center);

    background-color: white;

    padding: 32px;
    gap: 32px;

    @include bigMobile {
      @include flex-container(column, center, center);

      padding: 16px 8px 24px 8px;
      gap: 16px;
    }
  }

  &__subtitle {
    max-width: 312px;
    width: 100%;

    @include font(20, 28, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }
}
</style>
  