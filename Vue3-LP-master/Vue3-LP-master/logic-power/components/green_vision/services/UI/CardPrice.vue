<template>
  <div class="card-price">
    <div class="card-price__wrapper">
      <div class="card-price__type">
        <div class="card-price__image-wrapper">
          <slot name="image"></slot>
        </div>
        <h3 class="card-price__title">
          <slot name="title"></slot>
        </h3>
      </div>
      <h1 class="card-price__price">
        <slot name="price"></slot>
      </h1>
      <div class="card-price__serveces">
        <div
          v-for="(item, index) in values"
          :key="index"
          class="card-price__serveces-item"
        >
        <div class="card-price__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12.5L10 15.5L17 8.5" stroke="#009B3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009B3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          <p class="card-price__check-description">{{ item.itemName }}</p>
        </div>
      </div>
      <ButtonDetails />
    </div>
  </div>
</template>

<script setup>
import ButtonDetails from "./ButtonDetails.vue";

defineProps({
  values: { type: Array, required: false, default: false }
});

</script>

<style lang="scss" scoped>
.card-price {
  --gap: 16px;

  @include set-item-count-in-row(3);

  background: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include bigMobile {
    @include set-item-count-in-row(1);
  }

  &__wrapper {
    min-height: 100%;

    @include flex-container(column, center, center);

    padding: 32px;
    gap: 16px;
  }

  &__type {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      @include flex-container(column, center, center);
    }
  }

  &__icon {
    font-size: 0;
  }

  &__title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: black;

    @include bigMobile {
      @include font(16, 19, 700);
    }
  }

  &__price {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: #009b3e;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }

  &__serveces {
    @include flex-container(column, flex-start);
    flex: 1 1 auto;

    gap: 24px;
    margin-bottom: 48px;

    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__serveces-item {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__checkbox {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    color: #009b3e;
  }

  &__check-description {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #1f1f1f;
  }
}
</style>
  