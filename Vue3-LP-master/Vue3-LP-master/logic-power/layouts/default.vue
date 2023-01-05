<template>
  <div>
    <header class="header">
      <button
        v-for="(item, index) in languageList"
        :key="index"
        @click="() => toggleLanguage(item)"
      >
        {{ item }}
      </button>
      <NuxtLink to="/warranty">Гарантия</NuxtLink>
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/Header">Header</NuxtLink>
      <NuxtLink to="/CardProduct">CardProduct</NuxtLink>
      <NuxtLink to="/Comparison">Comparison</NuxtLink>
    </header>

    <div>
      <BreadCrumbs :crumbsItem="crambs" class="crumbs"/>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import BreadCrumbs from '~~/components/common/sections/BreadCrumbs.vue';
const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;
const crambs = ['Главная', 'Продукция', 'Акция'];
const toggleLanguage = (item) => {
  lang.setLanguage(item);
};
</script>

<style lang="scss" scoped>
.header {
  @include flex-container(row, flex-start, center);
  flex-wrap: wrap;

  gap: 16px;
}
</style>
