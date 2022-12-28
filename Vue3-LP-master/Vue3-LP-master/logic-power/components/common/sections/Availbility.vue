<template>
  <div 
    class="availbility"
    :class="[{'not-available' : !availbility}, {'in-stock' : availbility}]"
  >
    <div class="availbility__wrapper">
      <span v-if="availbility" class="availbility__title in-stock">В наличии</span>
      <span v-else class="availbility__title not-available">Нет в наличии</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  availbility: { type: Boolean, required: true},
});
</script>

<style lang="scss" scoped>
.availbility {
  @include flex-container(row, center, center);

  white-space: nowrap;

  border-radius: 8px;

  &.not-available {
    background-color: rgba(196, 196, 196, 0.5);

    .availbility__title {
      color: #8A8A8A;
    }
  }

  &.in-stock {
    background-color: rgba(21, 152, 34, 0.1);

    .availbility__title {
      color: #159822;
    }
  }

  &__wrapper {
    padding: 2px 8px;
  }

  &__title {
    @include font(14, 24, 400);
  }
}
</style>