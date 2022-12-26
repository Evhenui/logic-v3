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
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script setup>
import Pagination from '~~/components/new_product_slider/sections/Pagination.vue'
import CardProductVue from './CardProduct.vue';

const items = ref(null);
const slider = ref(null);

const widthWindow = ref(0);
const widthSlide = ref(0);
const widthGap = ref(0);
const widthSpace = ref(0);
const amountSlidesDesktop = ref(4);
const amountSlidesMobile = ref(2);

function resizeCards() {
  widthGap.value = parseInt(getComputedStyle(items.value).gap);
  
  if(window.innerWidth > 680) {
    widthSpace.value = widthGap.value * (amountSlidesDesktop.value - 1)
    widthWindow.value = slider.value.offsetWidth - widthSpace.value;
    widthSlide.value = (widthWindow.value / amountSlidesDesktop.value) + 'px';
  } else {
    widthSpace.value = widthGap.value * (amountSlidesMobile.value - 1)
    widthWindow.value = slider.value.offsetWidth - widthSpace.value;
    widthSlide.value = (widthWindow.value / amountSlidesMobile.value) + 'px';
  }
}

onMounted(() => {
  resizeCards()
  window.addEventListener('resize', resizeCards);
});

</script>

<style lang="scss" scoped>
.slider {
  max-width: 1440px;
  width: 100%;

  &__wrapper {
    @include flex-container(column, flex-start,);

    gap: 48px;

    @include bigMobile { 
      gap: 16px;
    }
  }

  &__items {
    width: 100%;

    @include flex-container(row, flex-start,);

    gap: 8px;

    overflow: hidden;

    @include mobile {
      gap: 16px;
    }
  }

  &__item {
    flex: 1 0 v-bind(widthSlide);
  }
}
</style>