<template>
  <section 
    class="menu-bar"
    :class="{active: activeScroll}"
  >
    <div class="menu-bar__wrapper">
      <div class="menu-bar__section-wrapper">
        <h3 class="menu-bar__title">Характеристики:</h3>
        <div class="menu-bar__inputs">
          <InputSwitch v-model="switchState"/>
          <span class="menu-bar__switch-title">Только отличия</span>
        </div>
      </div>
      <section class="menu-bar__buttons">
        <ButtonWhite 
          :state="state" 
          :scrollState="activeScroll"
        >Добавить товар
        </ButtonWhite>
      </section>
    </div>
  </section>
</template>

<script setup>
import ButtonWhite from "~~/components/comparison/UI/ButtonWhite.vue";
import InputRadio from "~~/components/comparison/UI/InputRadio.vue";
import InputSwitch from "~~/components/common/inputs/InputSwitch.vue";

const props = defineProps({
  heightCard: { type: String, required: false },
  activeScroll: { type: Boolean, required: false },
  mobileSize: { type: Number, required: false },
});

const switchState = ref(false);
const state = ref(false);
const resizeHeight = ref('');

watch(props, (current) => {
  resizeHeight.value =  window.innerWidth > props.mobileSize? current.heightCard: 'auto';
});
</script>
 
<style lang="scss" scoped>
.menu-bar {
  height: 100%;
  
  transition: all .2s ease-in-out;

  &.active {

    .menu-bar__wrapper {
      width: 100%;
    }
    .menu-bar__buttons {
      flex-direction: row;
    } 
  }

  &__wrapper {
    max-width: 274px;
    width: 100%;
    height: 100%;

    @include flex-container(column, space-between, left);

    border: 1px solid #e9e9e9;

    background-color: white;

    padding: 16px;

    @include bigMobile {
      max-width: 100%;
      height: auto;

      border: none;
      border-radius: 8px;

      gap: 24px;
    }
  }

  &__section-wrapper {
    @include flex-container(column, flex-start, left);
    gap: 16px;
  }

  &__title {
    @include font(16, 22, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    @include bigMobile {
      display: none;
    }
  }

  &__inputs {
    @include flex-container(row, flex-start, center);
    
    gap: 16px;
  }

  &__switch-title {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

/*   &__buttons {
    @include flex-container(column, flex-start, stretch);
    gap: 24px;

    @include bigMobile {
      @include flex-container(row, center, center);
    }
  } */
}
</style>
 