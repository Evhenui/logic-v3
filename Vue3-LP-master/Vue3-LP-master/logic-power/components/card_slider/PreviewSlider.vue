<template>
  <div class="card-slider">
    <div class="card-slider__wrapper">
      <div class="card-slider__suggestions">
        <Suggestions
          v-for="(item, index) in sliderValues.suggestions"
          :key="index"
          :status="item"
        />
      </div>
      <Pagination :items="sliderValues.itemsImage" />
      <Slider :items="sliderValues.itemsImage" />
    </div>
  </div>
</template>

<script setup>
import Suggestions from "~~/components/card_slider/UI/Suggestions.vue";
import Pagination from "~~/components/card_slider/sections/Pagination.vue";
import Slider from "~~/components/card_slider/sections/Slider.vue";

defineProps({
  sliderValues: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.card-slider {
  max-width: 590px;
  width: 100%;

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include mobile {
    max-width: 343px;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, space-between);

    padding: 16px 8px;
    gap: 8px;
  }

  &__suggestions {
    @include flex-container(column, space-between, flex-start);

    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 100;

    gap: 4px;
  }
}
</style>