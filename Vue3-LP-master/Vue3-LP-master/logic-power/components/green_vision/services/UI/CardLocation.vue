<template>
  <div 
    class="card-location"
    :class="{row: row}"
  >
    <div class="card-location__wrapper">
      <div class="card-location__image">
        <img :src="`/_nuxt/public/icons/${img}-location.svg`" :alt="img">
      </div>
      <p 
        class="card-location__subtitle"
        v-if="title"
      > 
      {{ title }} 
      </p>

      <div class="card-location__items">
        <slot name="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row: { type: Boolean, required: false, default: false },
  description: { type: String, required: false },
  title: { type: String, required: false },
  img: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.card-location {
  --gap: 96px;

  @include set-item-count-in-row(3);

  @include bigMobile {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &.row {
    .card-location__wrapper {
      min-height: 100%;

      @include flex-container(row, flex-start, center);

      gap: 24px;

      @include bigMobile {
        @include flex-container(row, flex-start, center);

        padding: 16px 8px;
        gap: 32px;
      }
    }

    .card-location__image {
      max-width: 134px;
      width: 100%;
      @include bigMobile {
        max-width: 70px;
      }
    }

    .card-location__subtitle {
      display: none
    }

    .card-location__items {
      @include flex-container(column, flex-start, flex-start);

      gap: 24px;
    }
  }

  &__wrapper {
    @include flex-container(column, center, center);

    gap: 24px;

    @include bigMobile {
      @include flex-container(row, flex-start, center);

      padding: 16px 8px;
      gap: 32px;
    }
  }

  &__image {
    flex: 1 1 auto;

    @include bigMobile {
      flex: none;
    }
  }

  &__subtitle {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    text-align: center;
    color: black;
  }

  &__items {
    display: none;
  }
}
</style>
  