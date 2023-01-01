<template>
  <div
    class="modal-slider"
    :class="{ active: modalState.activeModal }"
    @click.stop="closeModal"
  >
    <div @click.stop class="modal-slider__wrapper">
      <section class="modal-slider__content">
        <div class="modal-slider__header">
          <div class="modal-slider__pages">
            <span class="modal-slider__page"
              >{{ sliderCounter.counter }}/{{ sliderLength.length }}</span
            >
          </div>

          <button class="modal-slider__close" @click="closeModal">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00972 22.9902L15.9999 16M22.9901 9.00981L15.9999 16M15.9999 16L9.00972 9.00981M15.9999 16L22.9901 22.9902"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
            <ButtonNav class="card-slider__modal-prev" @click="prevSlide" />
            <Slider :items="items" :modal="true" class="card-slider__slider" />
            <ButtonNav
              class="card-slider__modal-next"
              :buttonNext="true"
              @click="nextSlide"
            />
          </div>
        </div>

        <div class="modal-slider__footer">
          <Prices :price="price" />
          <ButtonBuy class="modal-slider__button-buy" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Suggestions from "~~/components/card_slider/UI/Suggestions.vue";
import Pagination from "~~/components/card_slider/sections/Pagination.vue";
import Slider from "~~/components/card_slider/sections/Slider.vue";
import Prices from "~~/components/common/sections/Prices.vue";
import ButtonBuy from "~~/components/common/buttons/ButtonBuy.vue";
import ButtonNav from "~~/components/card_slider/UI/ButtonNav.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const sliderCounter = slider.getCounter;
const sliderLength = slider.getLength;
const modalState = slider.getSliderModal;
const changeCounter = slider.changeCounter;
const activeModal = slider.activeSliderModal;

const items = [
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
  { image: "slider-modal-item" },
];

const suggestions = {
  topSales: "top-sales",
  novelty: "novelty",
  stock: "stock",
};

const price = {
  price: "2 625 ₴",
  discount: "3 500 ₴",
};

const pages = {
  actual: "1",
  maxLength: "12",
};

const active = ref(false);

function closeModal() {
  activeModal();
  document.body.style.overflow = "auto";
}

function prevSlide() {
  if (sliderCounter.counter !== 0) {
    changeCounter("remove");
  }
}

function nextSlide() {
  if (sliderCounter.counter < sliderLength.length) {
    changeCounter("add");
  }
}
</script>

<style lang="scss" scoped>
.modal-slider {
  @include flex-container(column, center, center);

  position: fixed;
  @include setAbs(0, 0, 0, 0);

  background-color: rgba(217, 217, 217, 0.4);
  backdrop-filter: blur(3px);

  z-index: 510;
  visibility: hidden;
  opacity: 0;

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

    padding: 0 16px;

    overflow: auto;
    
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__content {
    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 24px;

    @include bigMobile {
      padding: 16px;
    }
  }

  &__header {
    @include flex-container(row, space-between, center);

    @include bigMobile {
      @include flex-container(row, flex-end, center);

      margin-bottom: 58px;
    }
  }

  &__pages {
    width: max-content;

    background-color: #e9e9e9;
    border-radius: 8px;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__page {
    @include font(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__close {
    font-size: 0;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &__footer {
    @include flex-container(column, center, center);
    gap: 16px;

    @include mobile {
      @include flex-container(column, center, flex-start);
    }
  }

  &__button-buy {
    @include mobile {
      width: 100%;
    }
  }
}

.card-slider {
  width: 100%;

  margin-bottom: 32px;

  @include bigMobile {
    margin-bottom: 62px;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, flex-start);

    gap: 72px;

    @include bigMobile {
      @include flex-container(column-reverse, center, center);
    }
  }

  &__modal-prev,
  &__modal-next {
    align-self: center;

    @include bigMobile {
      display: none;
    }
  }

  &__pagination {
    align-self: flex-end;

    margin-right: 47px;

    @include smallestScreen {
      margin-right: 0;
    }

    @include bigMobile {
      margin: 0 auto;
    }
  }

  &__suggestions {
    display: none;
  }
}
</style>