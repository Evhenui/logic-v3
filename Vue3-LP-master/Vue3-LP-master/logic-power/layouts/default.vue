<template>
  <div>
    <header>
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
<!--       <NuxtLink to="/FlatServices">FlatServices</NuxtLink>
      <NuxtLink to="/HomeServices">HomeServices</NuxtLink>
      <NuxtLink to="/OfficeServices">OfficeServices</NuxtLink> 
      <NuxtLink to="/ScoreServices">ScoreServices</NuxtLink> 
      <NuxtLink to="/ShopsServices">ShopsServices</NuxtLink> 
      <NuxtLink to="/StockServices">StockServices</NuxtLink> --> 
      <NuxtLink to="/Services">Services</NuxtLink>
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

<style scoped></style>
