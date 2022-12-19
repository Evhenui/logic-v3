<template>
  <div class="item">
    <div class="item__icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 12.5L10 15.5L17 8.5" stroke="#009B3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009B3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="item__text">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.item {
  @include flex-container(row, flex-start, flex-start);

  gap: 16px;

  &__check {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    color: #009b3e;
  }

  &__text {
    @include font(18, 25, 500);
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }
}
</style>
