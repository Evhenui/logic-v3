<template >
  <button class="button-details">
    <span class="button-details__title">Подробнее</span>
    <div class="button-details__arrow">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9987 8H12.332M12.332 8L8.33203 4M12.332 8L8.33203 12" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button-details {
  width: max-content;

  @include flex-container(row, flex-start, center);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  gap: 8px;

  &:hover,
  &:active {
    .button-details__title:after {
      width: 100%;
    }
  }

  &__title {
    position: relative;

    @include font(16, 24, 400);
    letter-spacing: 0.02em;
    color: #009b3e;

    &:after {
      content: "";

      width: 0;
      height: 1px;

      position: absolute;
      bottom: 0;
      left: 0;

      background-color: #009b3e;

      transition: width 0.2s ease-in-out;
    }
  }

  &__arrow {
    font-size: 0;
  }
}
</style>
  