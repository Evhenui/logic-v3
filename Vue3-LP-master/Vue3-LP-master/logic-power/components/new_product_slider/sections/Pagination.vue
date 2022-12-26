<template>
  <section class="pagination">
    <PaginationBtnArrow
      @click="prevPage"
    />

    <div class="pagination__pages">
      <PaginationBtnNumber 
        v-for="(item,index) in sliderSize"
        :key="index"
        :directionRight="item" 
        :class="{ active: index === counter }"
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
import PaginationBtnArrow from '~~/components/common/buttons/PaginationBtnArrow.vue';
import PaginationBtnNumber from '~~/components/common/buttons/PaginationBtnNumber.vue';

const indexSlide = ref(0);
const counter = ref(0);

const sliderSize = [1,2,3,4];

function activePage(index) {
  counter.value = index;
}

function prevPage() {
  if (counter.value !== 0) {
    counter.value--;
  }
}

function nextPage() {
  if (counter.value < 3) {
    counter.value++;
  }
}

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