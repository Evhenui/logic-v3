<template>
  <div>
    <CardProductVue :values="slideValue"/>
  </div>
</template>

<script setup>
import CardProductVue from './CardProduct.vue';

const slideValue = {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
}

</script>