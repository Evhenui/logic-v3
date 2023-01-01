<template>
  <div class="increase">
    <div class="increase__wrapper">
      <div class="increase__button">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6164 16.0295L16.3164 12.6816C16.9164 11.4642 17.3164 10.0438 17.3164 8.62349C17.3164 3.85521 13.5164 0 8.81641 0C4.11641 0 0.316406 3.85521 0.316406 8.62349C0.316406 13.3918 4.11641 17.247 8.81641 17.247C10.2164 17.247 11.6164 16.8412 12.8164 16.2324L16.1164 19.5804C17.1164 20.5949 18.6164 20.5949 19.6164 19.5804C20.5164 18.5659 20.5164 17.0441 19.6164 16.0295ZM2.31641 8.62349C2.31641 4.97119 5.21641 2.02906 8.81641 2.02906C12.4164 2.02906 15.3164 4.97119 15.3164 8.62349C15.3164 12.2758 12.4164 15.2179 8.81641 15.2179C5.21641 15.2179 2.31641 12.2758 2.31641 8.62349Z" fill="white"/>
        </svg>
      </div>
      <div class="increase__tip">
        <p class="increase__title">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.increase {
  cursor: pointer;

  &:hover {
    .increase__tip {
      visibility: visible;
      opacity: 1;
    }
  }

  &__wrapper {
    position: relative;
  }

  &__button {
    width: 30px;
    height: 30px;

    @include flex-container(column, center, center);

    font-size: 0;

    border-radius: 50%;

    background-color: #F36C21;
  }

  &__tip {
    width: max-content;

    position: absolute;
    left: 20px;

    border-radius: 8px;

    background-color: white;

    padding: 8px;

    visibility: hidden;
    opacity: 0;

    transition: opacity .2s ease-in-out;
  }

  &__title {
    max-width: 186px;
    width: 100%;

    @include font(12, 15, 400);
    color: #363636;
  }
}
</style>