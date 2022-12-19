<template>
  <section class="service-price">
    <div class="service-price__wrapper">
      <h1 class="service-price__title">{{ title }}</h1>
      <p class="service-price__price">{{ price }}</p>
      <div class="service-price__body">
        <div class="service-price__info">
          <div class="service-price__list">
            <slot name="item"></slot>
          </div>

          <ButtonTransparent />
        </div>
        <div class="service-price__image">
          <img :src="`/_nuxt/public/img/${img}-stock-card.png`" :alt="img">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonTransparent from "../UI/ButtonTransparent.vue";

defineProps({
  title: { type: String, required: true },
  price: { type: String, required: true },
  img: { img: String, required: true },
});
</script>

<style lang="scss" scoped>
.service-price {
  &__wrapper {
    @include flex-container(column, center, center);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 32px;
  }

  &__title {
    max-width: 733px;
    width: 100%;

    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;
    color: #1f1f1f;

    margin-bottom: 24px;

    @include bigMobile {
      @include font(16, 19, 700);
    }
  }

  &__price {
    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;
    color: #009b3e;

    margin-bottom: 64px;

    @include bigMobile {
      @include font(16, 22, 400);

      margin-bottom: 16px;
    }
  }

  &__body {
    max-width: 917px;
    width: 100%;

    @include flex-container(row, space-between);

    gap: 136px;

    @include bigMobile {
      @include flex-container(column-reverse, center, center);

      gap: 16px;
    }
  }

  &__info {
    @include flex-container(column, space-between);

    gap: 48px;
  }

  &__list {
    @include flex-container(column, space-between);

    gap: 24px;
  }

  &__image {
    max-width: 347px;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
  