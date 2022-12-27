<template>
  <section class="pagination">
    <PaginationBtnArrow
      @click="prevPage"
    />

    <div class="pagination__pages">
      <PaginationBtnNumber 
        v-for="(item,index) in (sliderValues.length / 4)"
        :key="index"
        :directionRight="index + 1" 
        :class="{ active: index === sliderValues.counter }"
        @click="activePage(index)"
      />
    </div>
    <PaginationBtnArrow 
      :directionRight="true"
      @click="nextPage" 
    />
  </section>
</template>

<script setup>
import { useSliderCardStore } from "~~/store/sliderCard";
import PaginationBtnArrow from '~~/components/common/buttons/PaginationBtnArrow.vue';
import PaginationBtnNumber from '~~/components/common/buttons/PaginationBtnNumber.vue';

const sliderNewProd = useSliderCardStore();
const sliderValues = sliderNewProd.getSliderNewProduct;
const changeCounter = sliderNewProd.changeCounterNewProduct;
const activePagination = sliderNewProd.activeCounterNewProduct;

const indexSlide = ref(0);
const counter = ref(0);

function activePage(index) {
  activePagination(index)
}

function prevPage() {
  let maxStep = 0;

  if(window.innerWidth > 680) {
    maxStep = (sliderValues.length / sliderValues.amountItems) - 1;
  } else  {
    maxStep = (sliderValues.length / sliderValues.amountItemsMobile) - 1;
  }

  if (sliderValues.counter !== 0) {
    indexSlide.value--;
    changeCounter('remove');
  }
}

function nextPage() {
  let maxStep = 0;

  if(window.innerWidth > 680) {
    maxStep = (sliderValues.length / sliderValues.amountItems) - 1;
  } else  {
    maxStep = (sliderValues.length / 2) - 1;
  }

  if (sliderValues.counter < maxStep) {
    indexSlide.value++;
    changeCounter('add');
  }
}

onMounted(() => {
});

</script>

<style lang="scss" scoped> 
.pagination {
  @include flex-container(row, center, center);

  gap: 24px;

  @include bigMobile { 
    gap: 64px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 24px;

    @include bigMobile { 
      display: none;
    }
  }
}

</style>