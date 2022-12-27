<template>
  <section class="slider" ref="slider">
    <div class="slider__wrapper">
      <div 
        class="slider__items"
        ref="items"
      >
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
        <CardProductVue class="slider__item"/>
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script setup>
import { useSliderCardStore } from "~~/store/sliderCard";
import Pagination from '~~/components/new_product_slider/sections/Pagination.vue'
import CardProductVue from './CardProduct.vue';
import consolaGlobalInstance from "consola";

const sliderNewProd = useSliderCardStore();
const sliderValues = sliderNewProd.getSliderNewProduct;
const getLength = sliderNewProd.calcSliderLengthNewProduct;
const changeCounter = sliderNewProd.changeCounterNewProduct;

const items = ref(null);
const slider = ref(null);

const widthWindow = ref(0);
const widthSlide = ref(0);
const widthGap = ref(0);
const widthSpace = ref(0);
const translateX = ref(0);

function resizeCards() {
  widthGap.value = parseInt(getComputedStyle(items.value).gap);
  widthWindow.value = slider.value.offsetWidth;

  if(window.innerWidth > 680) {
    widthSpace.value = widthGap.value * (sliderValues.amountItems - 1)
    widthSlide.value = (widthWindow.value / sliderValues.amountItems) - widthGap.value + 2 + 'px';
  } else {
    widthSpace.value = widthGap.value;
    widthSlide.value = (widthWindow.value / 2) - widthGap.value + 8 + 'px';
  }

  translateX.value = 0;
  changeCounter('null');
}

function getLengthSlider() {
  getLength(items.value.children);
}

watch(sliderValues, (current) => {
  if(window.innerWidth > 680) {
    translateX.value =  - ((widthWindow.value + 8) * current.counter) + 'px';
  } else {
    translateX.value =  - ((widthWindow.value + 16) * current.counter) + 'px';
  }
  
});

onMounted(() => {
  getLengthSlider();

  resizeCards();
  window.addEventListener('resize', resizeCards);
});

</script>

<style lang="scss" scoped>
.slider {
  max-width: 1440px;
  width: 100%;

  overflow: hidden;

  &__wrapper {
    @include flex-container(column, flex-start,);

    gap: 48px;
   /*  padding-left: 4px; */

    @include bigMobile { 
      gap: 16px;
      /* padding-left: 8px; */
    }
  }

  &__items {
    width: 100%;

    @include flex-container(row, flex-start,);

    gap: 8px;
    
    transition: transform .4s ease-in-out;
    transform: translateX(v-bind(translateX));

    @include mobile {
      gap: 16px;
    }
  }

  &__item {
    flex: 1 0 v-bind(widthSlide);
  }
}
</style>