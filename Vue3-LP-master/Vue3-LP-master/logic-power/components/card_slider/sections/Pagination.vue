<template>
  <div class="paginaion">
    <div class="paginaion__wrapper">
      <ArrowButton :bottom="false" @click="prevSlide" />
      <div class="paginaion__slides">
        <PreviewItem
            ref="slides"
          v-for="(item, index) in items"
          :key="index"
          :img="item.image"
          :class="{ active: index === indexSlide }"
          @click="activeItem(index)"
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

const slides = ref(null);

defineProps({
  items: { type: Array, required: true },
});

function activeItem(item) {
  indexSlide.value = item;
}

function prevSlide() {
  if (indexSlide.value !== 0) {
    indexSlide.value--;
  }
}

function nextSlide(maxSlides) {
  if (indexSlide.value < maxSlides) {
    indexSlide.value++;
  }
}

function getMaxSlides() {
    maxSlides.value = (slides.value.length - 1);
}

onMounted(() => {
    getMaxSlides();
});
</script>
  
<style lang="scss" scoped>
.paginaion {
  &__wrapper {
    @include flex-container(column, center, center);
  }

  &__slides {
    @include flex-container(column, center, center);

    gap: 8px;
  }
}
</style>