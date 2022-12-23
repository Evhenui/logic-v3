<template>
  <div class="card-types">
    <div class="card-types__image-wrapper">
      <img class="card-types__image" :src="`/_nuxt/public/img/${img}-card.png`" :alt="img" />
    </div>
    <div class="card-types__body">
      <p class="card-types__title">{{ title }}</p>
      <ButtonDetails />
    </div>
  </div>
</template>

<script setup>
import ButtonDetails from "~~/components/green_vision/services/UI/ButtonDetails.vue";

defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.card-types {
  border-radius: 16px;

  background-color: white;

  padding-bottom: 16px;

  &__image-wrapper {
    margin-bottom: 48px;

    @include bigMobile {
      margin-bottom: 24px;
    }
  }

  &__image {
    @include bigMobile {
      margin: auto;
    }
  }

  &__body {
    @include flex-container(column, center, center);

    background-color: white;

    gap: 48px;
  }

  &__title {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    color: #009b3e;

    @include bigMobile {
      @include font(16, 19, 700);
      text-transform: uppercase;
    }
  }
}
</style>