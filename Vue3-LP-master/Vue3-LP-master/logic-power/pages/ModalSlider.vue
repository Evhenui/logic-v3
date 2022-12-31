<template>
   <div
    class="modal-slider"
    :class="{ active: active }"
    @click.stop="closeModal"
   >
    <div @click.stop class="modal-slider__wrapper">
      <section class="modal-slider__content">
        <div class="modal-slider__header">
          <div class="modal-slider__pages">
            <span class="modal-slider__page">{{ pages.actual }}/{{ pages.maxLength }}</span>
          </div>

          <button class="modal-slider__close">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00972 22.9902L15.9999 16M22.9901 9.00981L15.9999 16M15.9999 16L9.00972 9.00981M15.9999 16L22.9901 22.9902" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="card-slider">
            <div class="card-slider__wrapper">
              <Suggestions 
                class="card-slider__suggestions" 
                :status="suggestions.topSales"
              />
              <Pagination :items="items" />
              <Slider :items="items" :modal="true"/>
            </div>
        </div>

        <div class="modal-slider__footer">
          <Prices :price="price"/>
          <ButtonBuy />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup> 
import Suggestions from "~~/components/card_slider/UI/Suggestions.vue";
import Pagination from "~~/components/card_slider/sections/Pagination.vue"
import Slider from "~~/components/card_slider/sections/Slider.vue";
import Prices from "~~/components/common/sections/Prices.vue"
import ButtonBuy from "~~/components/common/buttons/ButtonBuy.vue";

const items = [
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    {image: 'slide-item'},
    
]

const suggestions = {
  topSales: 'top-sales',
  novelty: 'novelty',
  stock: 'stock'
}

const price = {
  price : '2 625 ₴',
  discount: '3 500 ₴'
}

const pages = {
  actual: '1',
  maxLength: '12'
}

const active = ref(false);

function closeModal() {

}
</script>

<style lang="scss" scoped>
.modal-slider {
  display: flex;

  position: fixed;
  @include setAbs(0, 0, 0, 0);

  background-color: rgba(217, 217, 217, 0.4);
  backdrop-filter: blur(3px);

  z-index: 510;
  visibility: visible;
  opacity: 1;

  transition: all 0.3s ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;

    .modal-slider__wrapper {
      transform: translateX(0);

      transition: transform 0.3s ease-in-out;
    }
  }

  &__wrapper {
    max-width: 1468px;
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 24px;
  }

  &__header {
    @include flex-container(row, space-between, center);
  }

  &__pages {
    width: max-content;

    background-color: #E9E9E9;
    border-radius: 8px;

    padding: 8px 16px;
  }

  &__page {
    @include font(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2B2B2B;
  }

  &__close {
    font-size: 0;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

/*   &__title {
    @include font(24, 20, 500);
    color: #363636;

    margin-bottom: 16px;
  } */

  &__footer {
    @include flex-container(column, center, center);
    gap: 16px;
  }
}

.card-slider {
  width: 100%;

  margin-bottom: 32px;

  @include mobile {
    max-width: 343px;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, flex-start);

    gap: 118px;
  }

  &__suggestions {
    position: absolute;
    right: 16px;
    top: 16px;
  }
}


</style>