<template>
  <div class="slider-main">
    <div 
      class="slider-main__wrapper"
      :class="[{moving: moving}, {modal: modal}]"
      ref="sliderMain"
      :style="[{ '--translateX': - translateX + 'px' }]"
      @touchstart="handleTouchStart($event)"
      @touchmove="handleTouchMove($event)"
      @mousedown="mouseDown($event)"
      @mousemove="mouseMove($event)"
      @mouseup="mouseUp"
    >
      <Slide
        ref="slides"
        v-for="(item, index) in items"
        :key="index"
        :img="item.image"
        :mainSlide="true"
      />
    </div>
  </div>
</template>

<script setup>
import Slide from "~~/components/card_slider/UI/Slide.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const counterSlider = slider.getCounter;
const sliderLength = slider.getLength;
const changeCounter = slider.changeCounter;

const positionLeft = ref(0);
const translateX = ref(0);
const difference = ref(0);
const sizeSlide = ref(0);
const moving = ref(false);

const slides = ref(null);
const sliderMain = ref(null);

defineProps({
  items: { type: Array, required: true },
  modal: { type: Boolean, required: false },
});

function getSizeSlide() {
  sizeSlide.value = sliderMain.value.children[0].offsetHeight;
}

function resizeSlider() {
  getSizeSlide()
  translateX.value = 0;
  changeCounter('null');
}

function getStartPosition(position) {
  positionLeft.value = position;
  moving.value = true;
}

function mouseUp() {
  moving.value = false;
}

function getMovePosition(position) {
  const positionMove = position;
  const diff = positionMove - positionLeft.value;

  if(!positionLeft.value) return false;

  difference.value = diff;

  if(difference.value > 0) {
    if(counterSlider.counter !== 0) {
      changeCounter('remove');
    }
  } else {
    if(counterSlider.counter !== sliderLength.length) {
      changeCounter('add');
    }
  } 
  positionLeft.value = null;
}

function handleTouchStart(event) {
  getStartPosition(event.touches[0].clientX)
}

function handleTouchMove(event) {
  getMovePosition(event.touches[0].clientX)
}

function mouseDown (event) {
  getStartPosition(event.pageX)
}

function mouseMove(event) {
  getMovePosition(event.pageX)
}

watch(counterSlider, (current) => translateX.value = sizeSlide.value * current.counter);


onMounted(() => {
  getSizeSlide();
  window.addEventListener('resize', resizeSlider);
});
</script>

<style lang="scss" scoped>
.slider-main {
  width: 491px;

  overflow: hidden;

  @include mobile {
    width: 272px;
  }
  
  &__wrapper {
    width: max-content;
    
    @include flex-container(row, flex-start, center);

    overflow: hidden;

    transition: transform .3s ease-in-out;

    --translateX: 0;
    transform: translateX(var(--translateX));

    cursor: grab;

    &.moving {
      cursor: grabbing;
    }
  }
}

</style>