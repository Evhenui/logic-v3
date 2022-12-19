<template>
  <div class="header">
    <div class="header__wrapper">
      <slot></slot>
    </div>
  </div>
</template>
  
<script setup>

</script>
    
<style lang="scss" scoped>
.header {
  margin-bottom: 64px;

  @include bigMobile {
    margin-bottom: 32px;
  }

  &__wrapper {
    border-radius: 16px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 32px;

    @include bigMobile {
      padding: 16px;
    }
  }
}
</style>
    