<template>
  <nav 
    class="navigation"
    :class="{active: state}"
  >
<!--     <div
      class="navigation__pin"
      :class="{ active: activePin }"
      @click="activePin = !activePin"
    >
      <svg
        class="navigation__pin-image"
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="navigation__pin-state"
          d="M9.5019 15.5351L3 22.1242M5.00058 10.4514L14.1963 19.7704L15.8938 18.0501L15.5006 14.2112L21.0123 9.47414L15.1605 3.54395L10.4852 9.12948L6.69808 8.73109L5.00058 10.4514Z"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div> -->
    <div
      class="navigation__like"
      :class="{ active: activeLike }"
      @click="activeLike = !activeLike"
    >
      <svg
        class="navigation__like-image"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="navigation__like-state"
          d="M22.0078 8.86222C22.0078 10.4087 21.4141 11.8941 20.3536 12.9929C17.9127 15.523 15.5453 18.1613 13.0131 20.5997C12.4327 21.1505 11.512 21.1304 10.9566 20.5547L3.66157 12.9929C1.45656 10.7072 1.45656 7.01723 3.66157 4.73157C5.88825 2.42345 9.51575 2.42345 11.7424 4.73157L12.0076 5.00642L12.2726 4.73173C13.3402 3.6245 14.7942 3 16.3132 3C17.832 3 19.2859 3.62444 20.3536 4.73157C21.4141 5.83045 22.0078 7.31577 22.0078 8.86222Z"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="navigation__trash">
      <svg
        class="navigation__trash-image"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="navigation__trash-state"
          d="M19.0078 11V20.4C19.0078 20.7314 18.7392 21 18.4078 21H5.60781C5.27644 21 5.00781 20.7314 5.00781 20.4V11"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="navigation__trash-state"
          d="M10.0078 17V11"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="navigation__trash-state"
          d="M14.0078 17V11"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="navigation__trash-state"
          d="M21.0078 7L16.0078 7M3.00781 7L8.00781 7M8.00781 7V3.6C8.00781 3.26863 8.27644 3 8.60781 3L15.4078 3C15.7392 3 16.0078 3.26863 16.0078 3.6V7M8.00781 7L16.0078 7"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  state: { type: Boolean, required: false},
});

const emits = defineEmits(["getPin"]);

const activePin = ref(false);
const activeLike = ref(false);

/* function activePin(event) {
  stateActive.pin = !stateActive.pin;
  emits("getPin", stateActive.pin);
} */
</script>

<style lang="scss" scoped>
.navigation {
  @include flex-container(row, center, center);

  gap: 16px;

  @include bigMobile {
    .navigation__pin-image,
    .navigation__like-image,
    .navigation__trash-image {
      width: 16px;
      height: 16px;
    }
  }

  &__pin,
  &__like,
  &__trash {
    font-size: 0;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    cursor: pointer;
  }

  &__pin-image,
  &__like-image,
  &__trash-image {
    width: 24px;
    height: 24px; 
  }

  &__pin-state,
  &__like-state,
  &__trash-state {
    transition: all 0.1s ease-in-out;
  }

  &__pin:hover &__pin-state {
    stroke: #F36C21;
  }

  &__pin.active &__pin-state {
    fill: #F36C21;
    stroke: #F36C21;
  }

  &__like:hover &__like-state {
    stroke: #e14141;
  }

  &__like.active &__like-state {
    stroke: #e14141;
    fill: #e14141;
  }

  &__trash:hover &__trash-state {
    stroke: #2b2b2b;
  }
}
</style>
    