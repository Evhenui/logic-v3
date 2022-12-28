<template>
  <section class="slider" ref="slider">
    <div class="slider__wrapper">
      <PaginationBtnArrow @click="prevSlide" class="slider__prev" :directionRight="false"/>
        <div 
          class="slider__items"
          ref="items"
        >
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
          <CardProduct class="slider__item"/>
        </div>
      <PaginationBtnArrow 
          class="slider__next"
          :directionRight="true"
          @click="nextSlide" 
      />
    </div>
  </section>
</template>

<script setup>
import { useSliderCardStore } from "~~/store/sliderCard";
import PaginationBtnArrow from '~~/components/common/buttons/PaginationBtnArrow.vue';
import CardProduct from './CardProduct.vue';

const items = ref(null);
const slider = ref(null);

const slideWidth = ref(0);
const spaceSlides = ref(0);
const distance = ref(0);
const translateX = ref(0);
const counter = ref(0);
const translateXVar = ref('');

function getSizeSlide() {
  slideWidth.value = items.value.children[0].offsetWidth;
  spaceSlides.value = parseInt(getComputedStyle(items.value).gap);
}

function nextSlide() {
  const sliderWidth = items.value.scrollWidth;
  const sliderWindow = slider.value.offsetWidth;
  const slidesLength = items.value.children.length;
  const maxStep = Math.round(slidesLength - sliderWindow / slideWidth.value);
  distance.value = sliderWidth - sliderWindow - (translateX.value + slideWidth.value);

  if (distance.value >= 0 && counter.value < maxStep - 1) {
    counter.value++;
    translateX.value = (slideWidth.value + spaceSlides.value) * counter.value;
    translateXVar.value = `-${translateX.value}px`;

  } else {
    translateX.value =( sliderWidth + spaceSlides.value) - sliderWindow;
    counter.value = maxStep;
    translateXVar.value = `-${translateX.value}px`;
  }
}

function prevSlide() {
/*   const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
  const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
  const slidesLength: number = this.$refs.slides.length;
  const slideWidth: number = sliderWidth / slidesLength;
  const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);
  const startingPosition: number = 0;

  this.slider.distance = sliderWidth - sliderWindow - (this.slider.positionLeft - slideWidth);

  if (this.slider.distance <= sliderWidth - sliderWindow) {
    this.slider.counter--;
    this.slider.positionLeft = slideWidth * this.slider.counter;
  } else {
    this.slider.positionLeft = startingPosition;
    this.slider.distance = sliderWidth - sliderWindow;
    } */
}










/* const sliderNewProd = useSliderCardStore();
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
} */

/* watch(sliderValues, (current) => {
  if(window.innerWidth > 680) {
    translateX.value =  - ((widthWindow.value + 8) * current.counter) + 'px';
  } else {
    translateX.value =  - ((widthWindow.value + 16) * current.counter) + 'px';
  }
  
});
 */
onMounted(() => {
/*   getLengthSlider();

  resizeCards();
  window.addEventListener('resize', resizeCards); */

  getSizeSlide();
  window.addEventListener('resize', getSizeSlide);
});

</script>

<style lang="scss" scoped>
.slider {
  max-width: 1440px;
  width: 100%;

  overflow: hidden;

  &__wrapper {
    @include flex-container(column, flex-start,);

    position: relative;

    gap: 48px;

    @include bigMobile { 
      gap: 16px;
    }
  }

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 80;

    transform: translateY(-50%);
  }

  &__next {
    left: auto;
    right: 0;
  }

  &__items {
    width: 100%;

    @include flex-container(row, flex-start,);

    gap: 8px;
    
    transition: transform .3s ease-in-out;
    transform: translateX(v-bind(translateXVar));

    @include mobile {
      gap: 16px;
    }
  }

/*   &__item {
    flex: 1 0 v-bind(widthSlide);
  } */
}
</style>