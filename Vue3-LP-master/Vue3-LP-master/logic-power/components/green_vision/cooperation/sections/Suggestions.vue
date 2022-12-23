<template>
  <div class="suggestions" :class="{ left: directionLeft }">
    <div class="suggestions__wrapper">
      <div class="suggestions__image">
        <img :src="`/_nuxt/public/img/${img}.png`" :alt="img" />
      </div>
      <div class="suggestions__main-info">
        <h1 class="suggestions__title">{{ title }}</h1>
        <p class="suggestions__subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  directionLeft: { type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>

.suggestions {
  border-radius: 16px;

  background-color: white;

    &__wrapper {
      @include flex-container(row, flex-start, center);

      padding: 32px; 
      gap: 24px;
    }

    &__image {
      flex: 1 0 auto;
    }

    &__main-info {
      @include flex-container(column, flex-start, flex-start);

      gap: 48px;
    }

    &__title {
      @include font(30, 39, 600);
      letter-spacing: 0.02em;
      color: #009B3E;
    }

    &__subtitle {
      @include font(20, 28, 400);
      letter-spacing: 0.02em;
      color: #1F1F1F;
    }
}

</style>