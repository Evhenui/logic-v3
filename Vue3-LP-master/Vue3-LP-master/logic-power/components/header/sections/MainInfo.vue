<template>
  <div class="main-info">
    <div class="main-info__wrapper">
      <ButtonBurger />
      <ButtonCatalog />
      <Logo class="main-info__logo"/>
      <SearchProduct />
      <ChangeLanguage />
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
    }

    &__logo {
      margin-right: 4px;
    }
}
</style>
    