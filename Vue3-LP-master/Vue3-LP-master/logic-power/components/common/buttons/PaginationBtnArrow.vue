<template>
  <button 
    class="pagination-arrow" 
    :class="{'direction-right' : directionRight}"
  >
    <div class="pagination-arrow__image">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
defineProps({
  directionRight: { type: Boolean, required: false},
});
</script>

<style lang="scss" scoped>
.pagination-arrow {
  width: 48px;
  height: 48px;

  @include flex-container(column, center, center);

  border-radius: 50%;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &.direction-right {
    .pagination-arrow__image {
      transform: rotateZ(180deg);
    }
  }

  @include bigMobile { 
    width: 36px;
    height: 36px;
  }

  &__image {
    font-size: 0;
  }
}
</style>