<template>
  <button 
    class="button-buy"
    :class="[{active: active}, {'card-mobile': cardMobile}]"
    @click="active = !active"
  >
    <div class="button-buy__image-wrapper">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="button-buy__image-state" d="M20 22C20.8284 22 21.5 21.3284 21.5 20.5C21.5 19.6716 20.8284 19 20 19C19.1716 19 18.5 19.6716 18.5 20.5C18.5 21.3284 19.1716 22 20 22Z" fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="button-buy__image-state" d="M10 22C10.8284 22 11.5 21.3284 11.5 20.5C11.5 19.6716 10.8284 19 10 19C9.17157 19 8.5 19.6716 8.5 20.5C8.5 21.3284 9.17157 22 10 22Z" fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="button-buy__image-state" d="M5.5 4H22.5L20.5 15H7.5L5.5 4ZM5.5 4C5.33333 3.33333 4.5 2 2.5 2" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="button-buy__image-state" d="M20.5 15H7.5H5.73077C3.94646 15 3 15.7812 3 17C3 18.2188 3.94646 19 5.73077 19H20" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span v-if="!active" class="button-buy__title">Купить</span>
    <span v-else class="button-buy__title">В корзине</span>
  </button>
</template>

<script setup>

const active = ref(false);
defineProps({
  cardMobile: { type: Boolean, required: false},
});
</script>

<style lang="scss" scoped>
.button-buy {
  width: max-content;

  @include flex-container(row, center, center);

  background-color: #F36C21;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: 1px solid #F36C21;
  border-radius: 6px;

  padding: 8px 62px;
  gap: 8px;

  &.active {
    background-color: rgba(243, 108, 33, 0.1);

    .button-buy__image-state {
      stroke: #F36C21;
    }

    .button-buy__title {
      color: #F36C21;
    }
  }

  &.card-mobile {
    padding: 8px 4px;
  }

  &__image-wrapper {
    font-size: 0;
  }

  &__image-state {
    stroke: white;
  }

  &__title {
    @include font(18, 24, 400);
    color: white;
  }
}

</style>