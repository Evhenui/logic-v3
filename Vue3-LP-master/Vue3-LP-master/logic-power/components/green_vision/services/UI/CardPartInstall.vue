<template>
  <div class="part-install">
    <div class="part-install__wrapper">
      <div class="part-install__number">
        <h1 class="part-install__number-title">{{ number }}</h1>
      </div>
      <h1 class="part-install__title">{{ title }}</h1>
      <p class="part-install__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
});
</script>

<style lang="scss" scoped>
.part-install {
  --gap: 24px;

  @include set-item-count-in-row(5);

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @include bigMobile {
    @include set-item-count-in-row(2);
  }

  &__wrapper {
    @include flex-container(column, center, center);

    padding: 16px 16px 24px 16px;
  }

  &__number {
    width: 64px;
    height: 64px;

    @include flex-container(column, center, center);

    background-color: #009b3e;

    border-radius: 50%;

    margin-bottom: 32px;

    @include bigMobile {
      width: 32px;
      height: 32px;
    }
  }

  &__number-title {
    @include font(32, 42, 600);
    color: white;

    @include bigMobile {
      @include font(25, 35, 700);
    }
  }

  &__title {
    @include font(20, 30, 600);
    text-align: center;
    color: #1f1f1f;
    text-transform: uppercase;

    margin-bottom: 16px;

    @include bigMobile {
      @include font(16, 19, 700);
    }
  }

  &__subtitle {
    @include font(16, 22, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }
}
</style>
  