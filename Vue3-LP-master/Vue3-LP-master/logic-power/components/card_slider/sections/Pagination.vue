<template>
  <div class="paginaion">
    <div class="paginaion__wrapper">
      <ArrowButton :bottom="false" @click="prevSlide" />
      <div 
        class="paginaion__slides"
        ref="pagination"
      >
        <Slide
          ref="slides"
          v-for="(item, index) in items"
          :key="index"
          :img="item.image"
          :class="{ active: index === sliderCounter.counter }"
          :mainSlide="false"
          @click="activeSlide(index)"
        />
      </div>
      <ArrowButton :bottom="true" @click="nextSlide" />
    </div>
  </div>
</template>
  
<script setup>
import Slide from "~~/components/card_slider/UI/Slide.vue";
import ArrowButton from "~~/components/card_slider/UI/ArrowButton.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const sliderCounter = slider.getCounter;
const changeCounter = slider.changeCounter;
const activeCounter = slider.activeCounter;
const calcSliderLength = slider.calcSliderLength;
const sliderLength = slider.getLength;

const indexSlide = ref(0);
const positionScroll = ref(0);
const sizeSlide = ref(0);

const slides = ref(null);
const pagination = ref(null);

defineProps({
  items: { type: Array, required: true },
});

function getValuesSlider() {
  const gap = parseInt(getComputedStyle(pagination.value, null).getPropertyValue("gap"));
  const heightSlide = pagination.value.children[0].offsetHeight;

  sizeSlide.value = heightSlide + gap;
  calcSliderLength(slides.value);
}

function resizePagination() {
  getValuesSlider();
  changeCounter('null');

  positionScroll.value = 0
}

function activeSlide(index) {
  activeCounter(index);
  indexSlide.value = index;
}

function prevSlide() {
  if (sliderCounter.counter !== 0) {
    indexSlide.value--;
    changeCounter('remove');
  }
}

function nextSlide() {
  if (sliderCounter.counter < sliderLength.length) {
    indexSlide.value++;
    changeCounter('add');
  }
}

watch(sliderCounter, (current) => {
  positionScroll.value =  sizeSlide.value * current.counter;
  pagination.value.scrollTop = sizeSlide.value * current.counter;
});

onMounted(() => {
  getValuesSlider();

  window.addEventListener('resize', resizePagination)
});

</script>
  
<style lang="scss" scoped>
.paginaion {
  &__wrapper {
    @include flex-container(column, center, center);
  }

  &__slides {
    height: 430px;

    @include flex-container(column, flex-start, center);

    gap: 8px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0px;
    }

    @include mobile {
      height: 221px;

      gap: 4px;
    }
  }
}
</style>