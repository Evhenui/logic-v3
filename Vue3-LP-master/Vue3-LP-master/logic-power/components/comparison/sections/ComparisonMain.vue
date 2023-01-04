<template>
  <section>
    <HeaderNavigation :navValues="navValues"/>
    <CharacteristicsHeader :mobileSize="mobileSize"/>
    <CharacteristicsMain :mobileSize="mobileSize"/>
  </section>
</template>
  
<script setup>
import HeaderNavigation from "~~/components/comparison/sections/HeaderNavigation.vue";
import CharacteristicsHeader from "~~/components/comparison/sections/CharacteristicsHeader.vue";
import CharacteristicsMain from "~~/components/comparison/sections/CharacteristicsMain.vue";

const mobileSize = ref(1024);

const navValues = {
  categoryItems: [
    { name: "Комплект резервного питания", amount: '12' },
    { name: "Комплект питания", amount: '2' },
    { name: "Комплект питания", amount: '2' },
    { name: "Комплект резервного питания", amount: '12' },
    { name: "Комплект резервного питания", amount: '12' },
    { name: "Комплект питания", amount: '2' },
  ], 
  comparisonLists: [
    "Комплект резервного питания", 
    "Комплект питания", 
    "Комплект резервного питания", 
    "Комплект питания"
  ]
}
</script>
  

  