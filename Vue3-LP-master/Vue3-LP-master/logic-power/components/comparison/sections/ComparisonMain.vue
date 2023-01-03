<template>
  <section>
    <HeaderNavigation 
      :navValues="navValues"
    />
    <CharacteristicsHeader
      @sliderPosition="sliderPosition"
      :mobileSize="mobileSize"
      :sliderCounter="slider.counter"
      :sliderTranslate="slider.translate"
    />
<!--     <CharacteristicsMain
      @sliderPosition="sliderPosition"
      :mobileSize="mobileSize"
      :sliderCounter="slider.counter"
      :sliderTranslate="slider.translate"
    /> -->
  </section>
</template>
  
<script setup>
import HeaderNavigation from "./HeaderNavigation.vue";
import CharacteristicsHeader from "./CharacteristicsHeader.vue";
import CharacteristicsMain from "./CharacteristicsMain.vue";

const mobileSize = ref(1024);

const slider = {
  translate: 0,
  counter: 0,
};
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

function sliderPosition(translate, counter) {
  slider.translate = translate;
  slider.counter = counter;
}

</script>
  

  