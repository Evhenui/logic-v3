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
            <span class="modal-slider__page">{{ sliderCounter.counter }}/{{ sliderLength.length }}</span>
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
              <Pagination 
                :items="items" 
                class="card-slider__pagination"
                :modal="true"
              />
              <ButtonNav 
                class="card-slider__modal-prev" 
                @click="prevSlide"
              />
              <Slider :items="items" :modal="true"/>
              <ButtonNav 
                class="card-slider__modal-next" 
                :buttonNext="true"
                @click="nextSlide"
              />
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
import ButtonNav from "~~/components/card_slider/UI/ButtonNav.vue";

import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const sliderCounter = slider.getCounter;
const changeCounter = slider.changeCounter;
const sliderLength = slider.getLength;

const items = [
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
    {image: 'slider-modal-item'},
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

function prevSlide() {
  if (sliderCounter.counter !== 0) {
    changeCounter('remove');
  }
}

function nextSlide() {
  if (sliderCounter.counter < sliderLength.length) {
    changeCounter('add');
  }
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
    max-width: 1240px;
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    padding: 0 16px;
  }

  &__content {
    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 24px;

    @include bigMobile {
      padding: 16px 0;
    }
  }

  &__header {
    @include flex-container(row, space-between, center);

    @include bigMobile {
      @include flex-container(row, flex-end, center);

      padding-right: 16px;
    }
  }

  &__pages {
    width: max-content;

    background-color: #E9E9E9;
    border-radius: 8px;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__page {
    @include font(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2B2B2B;
  }

  &__close {
    font-size: 0;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @include bigMobile {
      margin-bottom: 24px;
    }
  }

  .card-slider__pagination {
    align-self: flex-end;

    margin-right: 47px;

    @include bigMobile {
      align-self: flex-start;
      
      margin: 0;
    }
  }

  .card-slider__suggestions {
    display: none;
  }

  &__footer {
    @include flex-container(column, center, center);
    gap: 16px;
  }
}

.card-slider {
  width: 100%;

  margin-bottom: 32px;

  @include bigMobile {
    padding-left: 16px;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, flex-start);

    gap: 72px;

    @include bigMobile {
      @include flex-container(column-reverse, center, center);

      gap: 48px;
    }
  }

  &__modal-prev,
  &__modal-next {
    align-self: center;

    @include bigMobile {
      display: none;
    } 
  }
}
</style>