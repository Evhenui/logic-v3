<template>
  <div class="main-info" ref="mainInfo">
    <div class="main-info__wrapper">
      <ButtonBurger />
      <div class="main-info__catalog-menu">
        <ButtonCatalog 
          class="main-info__button-catalog" 
          @buttonCatalog="getButton"
        />
        <ModalCatalog 
          class="main-info__catalog"
          @catalogModal="getModalCatalog" 
        />
      </div>
      <Logo class="main-info__logo"/>
      <SearchProduct  />
      <ChangeLanguage class="main-info__language" />
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import { useHeaderlStore } from "~~/store/headerStore";
import ButtonBurger from "../UI/ButtonBurger.vue";
import ButtonCatalog from "../UI/ButtonCatalog.vue";
import Logo from "../UI/Logo.vue"
import SearchProduct from "../UI/SearchProduct.vue";
import ChangeLanguage from "../UI/ChangeLanguage.vue";
import NavigationMenu from "./NavigationMenu.vue";
import ModalCatalog from "./ModalCatalog.vue";

const header = useHeaderlStore();
const activeCatalog = header.activeCatalog;

const mainInfo = ref(null);

const buttonCatalog = ref(null);
const catalogModal = ref(null);

const emits = defineEmits(['getPosition']);

function getPosition() {
  emits('getPosition', mainInfo.value.getBoundingClientRect().top);
}

function getButton(item) {
  buttonCatalog.value = item;
}

function getModalCatalog(item) {
  catalogModal.value = item;
}

function closeModal(event) {
  const clickModal = event.composedPath().includes(catalogModal.value);
  const clickButton = event.composedPath().includes(buttonCatalog.value);

    if(!clickModal && !clickButton) {
      activeCatalog(false);
    }
}

onMounted(()=>{
  getPosition();
  window.addEventListener('resize', getPosition);

  window.addEventListener('click', function(event) {
    closeModal(event);
  });
})

</script>

<style lang="scss" scoped>
.main-info {
    background-color: #393D38;
    
    &__wrapper {
      @extend %width-main;

      @include flex-container(row, flex-start, center);

      position: relative;

      padding: 4px 16px;
      margin: 0 auto;
      gap: 32px;

      @include bigMobile {
        @include flex-container(row, space-between, center);

        gap: 16px;
        padding: 8px 16px;
      }
    }

    &__catalog {
      position: absolute;
      top: 100%;
      left: 0;

      padding: 0 16px;
    }

    &__button-catalog,
    &__language {
      @include bigMobile {
        display: none;
      }
    }

    &__logo {
      margin-right: 4px;

      @include bigMobile {
        display: none;
      }
    }
}
</style>
    