<template>
  <section class="capabilities">
    <div class="capabilities__wrapper">
      <h1 class="capabilities__titlte">
        {{ title }}
      </h1>
      <div class="capabilities__cards">
        <slot name="card"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true},
});
</script>

<style lang="scss" scoped>
.capabilities {
  &__wrapper {
    @include flex-container(column, center, center);

    gap: 24px;
  }

  &__titlte {
    @include font(30, 39, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include font(18, 22, 600);
    }
  }

  &__cards {
    width: 100%;
    
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 16px;
  }
}
</style>
