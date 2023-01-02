<template>
  <section>
    <HeaderNavigation />
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

const mobileSize = 1024;

const slider = {
  translate: 0,
  counter: 0,
};

function sliderPosition(translate, counter) {
  slider.translate = translate;
  slider.counter = counter;
}

</script>
  

  