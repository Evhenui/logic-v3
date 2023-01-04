<template>
  <div @click="active = !active" class="dropdown" :class="{ active: active }">
    <div 
      class="dropdown__input"
      ref="dropdown"
    >
      <span class="dropdown__selected-item" :class="{ active: activeSelect }">{{ selectItem }}</span>
      <svg
        class="dropdown__arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9.125L12 14.875L18 9.125"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="dropdown__list">
      <div class="dropdown__list-wrapper">
        <ul class="dropdown__menu">
          <li
            v-for="(item, index) in comparisonLists"
            :key="index"
            @click="getItem"
            class="dropdown__item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
defineProps({
  comparisonLists: { type: Array, required: true }
});

const dropdown = ref(null);

const active = ref(false);
const activeSelect = ref(false);
const positionList = ref(0);
const spaceTopList = ref(4);
const selectItem = ref("Списки сравнения");

function getItem(event) {
  selectItem.value = event.target.innerText;
  activeSelect.value = true;
}

function getPositionList() {
  positionList.value = `${dropdown.value.offsetHeight + spaceTopList.value}px`;
}

onMounted(() => {
  getPositionList()
  window.addEventListener('resize', getPositionList)
})

onUnmounted(() => {
  window.removeEventListener('resize', getPositionList)
})
</script>
   
<style lang="scss" scoped>
.dropdown {
  position: relative;

  &.active {
    .dropdown__list {
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }
    .dropdown__arrow {
      transform: rotateZ(180deg);
    }
    .dropdown__input {
     /*  border-color:  #4724FB; */
    }
    .dropdown__label {
    /*   color:  #4724FB; */
    }
    .dropdown__input {
   /*    border-color:  #4724FB; */
    }
  }

  &__input {
    width: 100%;
    height: 48px;

    @include flex-container(row, space-between, center);

    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 8px;

    background-color: white;

    padding: 17px 14px;

    &.is-invalid {
    /*   border-color:  #4724FB; */
    }
  }

  &__selected-item {
    @include font(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    &.active {
      @include font(16, 22, 400);
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &__arrow {
    transform: rotateZ(0deg);
    transition: all 0.2s ease-in-out;
  }

  &__list {
    width: 100%;

    position: absolute;
    top: v-bind(positionList);
    z-index: -100;

    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.4);

    box-shadow: 0px 4px 22px -8px rgba(0, 0, 0, 0.15);
    background-color: white;

    visibility: hidden;
    opacity: 0;

    transition: 0.2s ease-in;
  }

  &__menu {
    @include flex-container(column, space-between, left);
  }

  &__item {
    position: relative;

    @include font(16, 16, 400);
    color: #0E0F0F;
    letter-spacing: 0.02em;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 16px;

    cursor: pointer;

    transition: all 0.1s ease-in-out;

/*     &:hover {
      background-color: #FFE4D6;
    }

    &:active {
      background-color: #FFE4D6;
    } */
  }
}
</style>
   