<template>
  <div class="card-types">
    <div class="card-types__image-wrapper">
      <img :src="`/_nuxt/public/img/${img}-card.png`" :alt="img" />
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
    
    &__image-wrapper {
        margin-bottom: 48px;
    }

    &__body {
        @include flex-container(column, center, center);

        background-color: white;

        gap: 48px;
    }

    &__title {
        @include font(20, 28, 400);
        letter-spacing: 0.02em;
        color: #009B3E;
    }
}

</style>