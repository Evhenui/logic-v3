<template>
  <button class="button-transparent">
    <div class="button-transparent__image">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="button-transparent__image-state" d="M4.9984 2H2V4.9984H4.9984V2Z" stroke="#009B3E" stroke-width="1.4992" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M4.99805 3.5H18.9982" stroke="#009B3E" stroke-width="1.50335" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M3.5 4.99805V19" stroke="#009B3E" stroke-width="1.35589" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M20.498 5V19.002" stroke="#009B3E" stroke-width="1.35589" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M4.99805 20.5H18.9982" stroke="#009B3E" stroke-width="1.50335" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M4.9984 19H2V21.9984H4.9984V19Z" stroke="#009B3E" stroke-width="1.4992" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M21.9984 2H19V4.9984H21.9984V2Z" stroke="#009B3E" stroke-width="1.4992" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M21.9984 19H19V21.9984H21.9984V19Z" stroke="#009B3E" stroke-width="1.4992" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="button-transparent__image-state" d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#009B3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    <span class="button-transparent__title"
      >Заказать монтаж: +38(067)585-67-53</span
    >
  </button>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.button-transparent {
  width: max-content;

  @include flex-container(row, center, center);

  border: 1px solid #009b3e;
  border-radius: 6px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  gap: 8px;
  padding: 8px 16px;

  transition: background-color 0.1s ease-in-out;
  transition: border-color 0.1s ease-in-out;

  @include bigMobile {
    width: 100%;
  }

  &:hover {
    border-color: #00bc4b;
    background-color: #00bc4b;

    .button-transparent__title {
      color: white;
    }

    .button-transparent__image-state {
      stroke: white;
    }
  }

  &:active {
    border-color: #007730;
    background-color: #007730;

    .button-transparent__title {
      color: white;
    }

    .button-transparent__image-state {
      stroke: white;
    }
  }

  &:disabled {
    cursor: auto;

    border-color: #8a8a8a;
    background-color: #8a8a8a;

    .button-transparent__title  {
      color: white;
    }

    .button-transparent__image-state {
      stroke: white;
    }
  }

  &__image {
   font-size: 0;
  }

  &__title {
    max-width: 180px;
    width: 100%;

    @include font(18, 24, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #009b3e;
  }
}
</style>
  