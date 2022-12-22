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
    background-color: white;

    &__wrapper {
        @include flex-container(row, flex-start, center);

        padding: 32px; 
    }

    &__image {
    }

    &__main-info {

    }

    &__title {
    }

    &__subtitle {
    }
}

</style>