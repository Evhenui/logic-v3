<template>
  <header ref="valera" class="header">
    <div class="header__wrapper">
      <AdditionalInfo />
      <MainInfo />
    </div>
  </header>
</template>

<script setup>
import AdditionalInfo from "~~/components/header/sections/AdditionalInfo.vue";
import MainInfo from "~~/components/header/sections/MainInfo.vue";

</script>
  
<style lang="scss" scoped>
.header {

  &__wrapper {
    
  }
}

</style>