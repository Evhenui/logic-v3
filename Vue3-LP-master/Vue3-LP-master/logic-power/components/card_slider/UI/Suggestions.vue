<template>
    <section class="suggestions" :class="status">
      <span class="suggestions__name novelty">Новинка</span>
      <span class="suggestions__name stock">Акция</span>
      <span class="suggestions__name top-sales">Топ продаж</span>
    </section>
  </template>
  
  <script setup>
  const { status } = defineProps(['status']);
  </script>
  
  <style lang="scss" scoped>
  .suggestions {
    border-radius: 8px;
  
    padding: 4px 8px;
    &.novelty {
      background-color: #E29450;
      .suggestions__name.novelty {
        display: block;
      }
    }
  
    &.stock {
      background-color: #E25750;
      .suggestions__name.stock {
        display: block;
      }
    }
  
    &.top-sales {
      background-color: #44B1BB;
      .suggestions__name.top-sales {
        display: block;
      }
    }
  
    &__name {
      display: none;
      
      @include font(12, 16, 300);
      text-transform: uppercase;
      letter-spacing: 0.02em;
      color: white;
    }
  }
  </style>