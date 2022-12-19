<template>
  <section class="basic-set">
    <h1 class="basic-set__title">
      {{ title }}
    </h1>
    <div class="basic-set__cards">
      <slot name="cards"></slot>
    </div>
    <DescriptionSection class="basic-set__description">
      <slot name="description"></slot>
    </DescriptionSection>
  </section>
</template>

<script setup>
import DescriptionSection from "./DescriptionSection.vue";

defineProps({
  title: { type: String, required: true}
});

</script>

<style lang="scss" scoped>
.basic-set {
  @include flex-container(column, center, center);

  gap: 24px;

  &__title {
    max-width: 994px;
    width: 100%;

    @include font(25, 35, 700);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: center;
    color: #1f1f1f;

    @include bigMobile {
      @include font(18, 22, 600);
    }
  }

  &__cards {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 32px 16px;

    @include bigMobile {
      gap: 16px;
    }
  }

  &__description {
    width: 100%;

    margin: 0;
  }
}
</style>
  