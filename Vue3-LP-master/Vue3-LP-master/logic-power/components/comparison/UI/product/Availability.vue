<template>
  <section 
    class="availability"
    :class="[status, {active : state}]"
    >
    <span class="availability__name inStock">В наличии</span>
    <span class="availability__name preOrder">Предзаказ</span>
    <span class="availability__name notAvailable">Нет в наличии</span>
    <span class="availability__name ends">Заканчивается</span>
  </section>
</template>

<script setup>
defineProps({
  status: { type: String, required: true },
  state: { type: Boolean, required: false },
});
</script>
 
<style lang="scss" scoped>
.availability {
  &.active {
    display: none;
  }
  &.inStock &__name.inStock {
    display: block;

    color: #159822;
  }

  &.preOrder &__name.preOrder {
    display: block;

    color: #4490bb;
  }

  &.notAvailable &__name.notAvailable {
    display: block;

    color: #393d38;
  }

  &.ends &__name.ends {
    display: block;

    color: #e25750;
  }

  &__name {
    display: none;

    @include font(12, 16, 400);
    letter-spacing: 0.02em;
  }
}
</style>
 