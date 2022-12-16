<template>
  <div class="main-info">
    <div class="main-info__wrapper">
      <ButtonBurger  @click=""/>
      <ButtonCatalog class="main-info__button-catalog" />
      <Logo class="main-info__logo"/>
      <SearchProduct  />
      <ChangeLanguage class="main-info__language" />
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import ButtonBurger from "../UI/ButtonBurger.vue";
import ButtonCatalog from "../UI/ButtonCatalog.vue";
import Logo from "../UI/Logo.vue"
import SearchProduct from "../UI/SearchProduct.vue";
import ChangeLanguage from "../UI/ChangeLanguage.vue";
import NavigationMenu from "./NavigationMenu.vue";

</script>

<style lang="scss" scoped>
.main-info {
    background-color: #393D38;
    
    &__wrapper {
      @extend %width-main;

      @include flex-container(row, flex-start, center);

      padding: 4px 16px;
      margin: 0 auto;
      gap: 32px;

      @include bigMobile {
        @include flex-container(row, space-between, center);

        gap: 16px;
        padding: 8px 16px;
      }
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
    