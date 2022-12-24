<template>
  <div class="paginaion">
    <div class="paginaion__wrapper">
      <ArrowButton :bottom="false" @click="prevSlide" />
      <div 
        class="paginaion__slides"
        ref="pagination"
      >
        <PreviewItem
          ref="slides"
          v-for="(item, index) in items"
          :key="index"
          :img="item.image"
          :class="{ active: index === indexSlide }"
          @click="activeSlide(index)"
        />
      </div>
      <ArrowButton :bottom="true" @click="nextSlide(maxSlides)" />
    </div>
  </div>
</template>
  
<script setup>
import PreviewItem from "~~/components/card_slider/UI/PreviewItem.vue";
import ArrowButton from "~~/components/card_slider/UI/ArrowButton.vue";

const indexSlide = ref(0);
const maxSlides = ref(0);
const positionScroll = ref(0);
const sizeSlide = ref(0);

const slides = ref(null);
const pagination = ref(null);

defineProps({
  items: { type: Array, required: true },
});

function getValuesSlide() {
  const gap = parseInt(getComputedStyle(pagination.value, null).getPropertyValue("gap"));
  const heightSlide = pagination.value.children[0].offsetHeight;

  sizeSlide.value = heightSlide + gap;
  maxSlides.value = slides.value.length - 1;
}

function activeSlide(index) {
  indexSlide.value = index;
  positionScroll.value =  sizeSlide.value * indexSlide.value;
}

function prevSlide() {
  if (indexSlide.value !== 0) {
    indexSlide.value--;
    positionScroll.value =  sizeSlide.value * indexSlide.value;
  }
}

function nextSlide(maxSlides) {
  if (indexSlide.value < maxSlides) {
    indexSlide.value++;
    positionScroll.value =  sizeSlide.value * indexSlide.value;
  }
}

watch(indexSlide, () => pagination.value.scrollTop = positionScroll.value);


onMounted(() => {
  getValuesSlide();
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
  }
}
</style>