<template>
  <section class="header-nav">
    <div class="header-nav__wrapper">
      <h1 class="header-nav__title">Сравнение товаров</h1>
      <nav class="header-nav__navbar">
        <h3 class="header-nav__subtitle">Категории товаров</h3>
        <ul class="header-nav__list">
          <li
            class="header-nav__list-item"
            v-for="(item, id) in listSelected"
            :key="id"
          >
            <SelectedNavigation 
              ref="selectItems"
              @click="addSelect"
              :itemName="item.name"
              :itemAmount="item.amount"
            >
            </SelectedNavigation>
          </li>
        </ul>
       <!--  <DropdownMenu class="header-nav__dropdown"></DropdownMenu> -->
      </nav>
    </div>
  </section>
</template>

<script setup>
import SelectedNavigation from "../UI/SelectedNavigation.vue";
import DropdownMenu from "../UI/DropdownMenu.vue"

const listSelected = [
  { name: "Комплект резервного питания", amount: '12' },
  { name: "Комплект питания", amount: '2' },
  { name: "Комплект питания", amount: '2' },
  { name: "Комплект резервного питания", amount: '12' },
  { name: "Комплект резервного питания", amount: '12' },
  { name: "Комплект питания", amount: '2' },
];

const selectItems = ref(null);

function delActiv(param) {
  param.forEach((el) => {
    el.$el.classList.remove('active');
  })
}

function addSelect(event) {
  delActiv(selectItems.value);
  event.currentTarget.classList.add('active');
}

</script>
 
<style lang="scss" scoped>
.header-nav {
  margin-bottom: 24px;

  @include bigMobile {
    margin-bottom: 16px;
    padding-right: 16px;
  }

  &__title {
    @include font(36, 43, 700);
    color: #2b2b2b;

    margin-bottom: 32px;

    @include bigMobile {
      @include font(24, 29, 700);

      margin-bottom: 16px;
    }
  }

  &__subtitle {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    margin-bottom: 16px;

    @include bigMobile {
      @include font(16, 22, 400);

      margin-bottom: 8px;
    }
  }

  &__list {
    @include flex-container(row, left, center);
    gap: 16px;
    padding-bottom: 16px;

    overflow-y: auto;

    @include bigMobile {
      display: none;
    }
    
    &::-webkit-scrollbar {
      height: 8px;
      background-color: #d1d1d1;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
      background-color: #393d38;
      border-radius: 100px;
    }
  }

  &__dropdown {
    display: none;

    @include bigMobile {
      width: 100%;

      display: inline-block; 
    }
  }
}
</style>
 