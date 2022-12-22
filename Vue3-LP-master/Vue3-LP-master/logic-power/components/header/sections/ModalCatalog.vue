<template>
  <section 
    class="catalog" 
    :class="{ active: menuItems.active }"
    ref="modal"
  >
    <div class="catalog__wrapper">
      <ul class="catalog__main-list">
        <li
          class="catalog__main-item"
          v-for="(item, index) in menuItems.menu"
          :key="index"
          @mouseover="selectIndex(index)"
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
      <section class="catalog__submenu" :class="{active:counterMenu >= 1}">
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
              @mouseover="selectIndexSubmenu(i)"
            >
              <span class="catalog__title submenu">{{ category }}</span>
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
      <section class="catalog__submenu-deep" :class="{active:counterMenu === 2}">
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
              <span class="catalog__title submenu">{{ category }}</span>
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
const modal = ref(null);
const counterMenu = ref(0);

const emits = defineEmits(['catalogModal']);

function selectIndex(i) {
  currentIndex.value = i;
  counterMenu.value = 1;
}

function selectIndexSubmenu(i) {
  currentIndexSubmenu.value = i;
  counterMenu.value = 2;
}

function resizeCatalog() {
  if(window.innerWidth < 1024) {
    activeCatalog(false)
  }
}

onMounted(()=>{
  emits('catalogModal', modal.value);

  window.addEventListener('resize', resizeCatalog);
})

</script>

<style lang="scss" scoped>
.catalog {
  display: flex;

  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;

    @include bigMobile {
      display: none;
    }
  }

  &__wrapper {
    width: 100%;

    display: flex;

    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  }

  &__main-list {
    width: 415px;

    @include flex-container(column, flex-start);

    background-color: white;

    gap: 8px;
    padding: 24px 0;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
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

    &.submenu {
      white-space: nowrap;
    }
  }

  &__submenu {
    width: 0;

    background-color: white;

    padding: 24px 0;

    overflow: hidden;

    transition: width .4s ease-in-out;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &.active {
      width: 415px;

      box-shadow: -16px -16px 7px -16px rgba(0, 0, 0, 0.25);
    }
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
    width: 0;

    transition: width .4s ease-in-out;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &.active {
      width: 415px;

      box-shadow: -16px -16px 7px -16px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
