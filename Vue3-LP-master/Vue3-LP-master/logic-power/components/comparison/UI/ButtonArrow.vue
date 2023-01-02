<template>
  <button class="button-arrow" :disabled="isDisabled">
    <svg
      class="button-arrow__image"
      :class="{ right: direction }"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="button-arrow__image-state"
        d="M15 6L9 12L15 18"
        stroke="#F36C21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  direction: { type: Boolean, required: false },
  isDisabled: { type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
.button-arrow {
  width: 32px;
  height: 32px;

  font-size: 0;

  @include flex-container(column, center, center);

  border: 2px solid #f36c21;
  border-radius: 50px;

  background-color: rgba(255, 255, 255, 0.5);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #f36c21;

    .button-arrow__image-state {
      stroke: white;
    }
  }

  &:active {
    border-color: #ac450b;
    background-color: #ac450b;
  }

  &__image {
    &.right {
      transform: rotateZ(180deg);
    }
  }
  &:disabled {
    background-color: #e3e5e6;

    border-color: #e3e5e6;

    cursor: auto;

    .button-arrow__image-state {
      stroke: white;
    }

    &:hover {
      background-color: #e3e5e6;
    }
  }
}
</style>
