<template>
  <button class="pagination-button">
    <span class="pagination-button__number">{{ directionRight }}</span>
  </button>
</template>

<script setup>
defineProps({
  directionRight: { type: Number, required: true},
});
</script>

<style lang="scss" scoped>
.pagination-button {
  width: 47px;
  height: 47px;

  @include flex-container(column, center, center);

  border-radius: 50%;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &.active {
    .pagination-button__number {
      color: #F36C21;
    }
  }

  &__number {
    @include font(20, 30, 600);
    color: #2B2B2B;
    text-transform: uppercase;
  }
}

</style>