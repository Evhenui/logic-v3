<template>
  <button
    class="button"
    :class="[{ del: buttonType }, { active: state }, { active: scrollState }]"
  >
    <div class="button__image">
      <svg
        class="button__image-plus"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="button__image-state"
          d="M6 12H12M18 12H12M12 12V6M12 12V18"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        class="button__image-basket"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="button__image-state"
          d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="button__image-state"
          d="M10 17V11"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="button__image-state"
          d="M14 17V11"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="button__image-state"
          d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span class="button__name">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineProps({
  buttonType: { type: Boolean, required: false },
  state: { type: Boolean, required: false },
  scrollState: { type: Boolean, required: false },
});
</script>
 
<style lang="scss" scoped>
.button {
  width: max-content;

  @include flex-container(row, center, center);
  gap: 10px;

  border: 1px solid #F36C21;
  border-radius: 6px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: white;

  padding: 8px 31px;

  transition: all 0.1s ease-in-out;

  @include bigMobile {
    width: 100%;
  }

  /*   &.active {
    width: 100%;

    @include flex-container(row, center);

    .button__name {
      display: none;
    }
  } */

  &:hover {
    border-color: #ff5b00;

    background-color: #ff5b00;

    .button__name {
      color: white;
    }

    .button__image-state {
      stroke: white;
    }
  }

  &:active {
    border-color: #ac450b;

    background-color: #ac450b;

    .button__name {
      color: white;
    }

    .button__image-state {
      stroke: white;
    }
  }

  &:disabled {
    border-color: #8a8a8a;

    background-color: #8a8a8a;

    cursor: auto;

    .button__name {
      color: white;
    }

    .button__image-state {
      stroke: white;
    }
  }

  &.del {
    padding: 8px 26px;
  }

  &.del &__image-basket {
    display: flex;
  }

  &.del &__image-plus {
    display: none;
  }

  &__image {
    font-size: 0;
  }

  &__image-state {
    transition: all 0.1s ease-in-out;
  }

  &__image-basket {
    display: none;
  }

  &__name {
    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: #F36C21;

    transition: all 0.1s ease-in-out;

    /*     @include bigMobile {
      display: none;
    } */
  }
}
</style>
 