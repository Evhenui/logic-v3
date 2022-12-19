<template>
  <div class="card-set">
    <div class="card-set__wrapper">
      <div class="card-set__amount">
        <p class="card-set__amount-text" v-if="number">x{{ number }}</p>
      </div>
      <div class="card-set__image">
        <img :src="`/_nuxt/public/img/${img}-set.png`" :alt="description">
      </div>
      <p class="card-set__item-name">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: { type: String, required: true},
  img: { type: String, required: true},
  description: { type: String, required: true}
});
</script>

<style lang="scss" scoped>
.card-set {
  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  &__wrapper {
    min-height: 100%;

    @include flex-container(column, center, center);

    padding: 16px 16px 32px 16px;
  }

  &__amount {
    width: 100%;

    @include flex-container(row, end);

    margin-bottom: 32px;

    @include bigMobile {
      margin: 0;
    }
  }

  &__amount-text {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    color: #009b3e;
  }

  &__image {
    flex: 1 1 auto;

    margin-bottom: 16px;
  }

  &__item-name {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    text-align: center;
    color: black;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }
}
</style>
  