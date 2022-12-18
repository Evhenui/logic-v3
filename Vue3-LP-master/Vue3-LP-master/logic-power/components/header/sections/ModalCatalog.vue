<template>
  <section class="catalog" :class="{ active: menuItems.active }">
    <div class="catalog__wrapper">
      <ul class="catalog__main-list">
        <li
          class="catalog__main-item"
          v-for="(item, index) in menuItems.menu"
          :key="index"
          @click="selectIndex(index)"
        >
          <div class="catalog__item-wrapper">
            <div class="catalog__image">
              <img
                :src="`/_nuxt/public/icons/${item.image}`"
                :alt="item.title"
              />
            </div>
            <span class="catalog__title">{{ item.title }}</span>
          </div>

          <div class="catalog__image-arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#F36C21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
      </ul>
      <section class="catalog__submenu">
        <div
          class="catalog__submenu-item"
          v-for="(item, index) in menuItems.submenu"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <ul class="catalog__submenu-list">
            <li
              class="catalog__category-item"
              v-for="(category, i) in item.catogory"
              :key="i"
              @click="selectIndexSubmenu(i)"
            >
              <span class="catalog__title">{{ category }}</span>
              <div v-if="item.submenu" class="catalog__image-arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#F36C21"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="catalog__submenu-deep">
        <div
          class="catalog__submenu-item"
          v-for="(item, index) in menuItems.submenuDeep"
          :key="index"
          :class="{ active: index === currentIndexSubmenu }"
        >
          <ul class="catalog__submenu-list">
            <li
              class="catalog__category-item"

              v-for="(category, i) in item.catogory"
              :key="i"
            >
              <span class="catalog__title">{{ category }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { useHeaderlStore } from "~~/store/headerStore";

const header = useHeaderlStore();
const menuItems = header.getModalCatalog;
const activeCatalog = header.activeCatalog;

const currentIndex = ref(null);
const currentIndexSubmenu = ref(null);

function selectIndex(i) {
  currentIndex.value = i;
}

function selectIndexSubmenu(i) {
  currentIndexSubmenu.value = i;
}

function closeCatalog() {
  if(window.innerWidth < 1024) {
    activeCatalog(false)
  }
}

onMounted(()=>{
  window.addEventListener('resize', closeCatalog);
})

</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;

  display: none;

  &.active {
    display: flex;

    @include bigMobile {
      display: none;
    }
  }

  &__wrapper {
    width: 100%;

    display: flex;
  }

  &__main-list {
    max-width: 415px;
    width: 100%;

    @include flex-container(column, flex-start);

    background-color: white;

    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    gap: 8px;
    padding: 24px 0;
  }

  &__main-item {
    min-height: 56px;

    @include flex-container(row, space-between, center);

    padding: 16px;

    cursor: pointer;

    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #efefef;
    }
  }

  &__item-wrapper {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__image {
    flex: 1 0 auto;

    font-size: 0;
  }

  &__image-arrow {
    font-size: 0;
  }

  &__title {
    max-width: 270px;
    width: 100%;

    @include font(16, 22, 400);
    color: #2B2B2B;
    letter-spacing: 0.02em;
  }

  &__submenu {
    background-color: white;

    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    padding: 24px 0;
  }

  &__submenu-item {
    display: none;

    &.active {
      display: block;
    }
  }

  &__submenu-list {
    @include flex-container(column, flex-start);

    gap: 8px;
  }

  &__category-item {
    min-height: 56px;

    @include flex-container(row, space-between, center);

    padding: 16px 32px;

    cursor: pointer;

    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #efefef;
    }
  }

  &__submenu-deep {
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  }
}
</style>
