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
      <NuxtLink to="/CardSlider">CardSlider</NuxtLink>
      <NuxtLink to="/NewProductSlider">NewProductSlider</NuxtLink>
      <NuxtLink to="/CardProduct">CardProduct</NuxtLink>
      <NuxtLink to="/AboutProduct">AboutProduct</NuxtLink>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;

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
