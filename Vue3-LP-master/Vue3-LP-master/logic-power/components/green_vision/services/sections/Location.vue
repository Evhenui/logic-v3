<template>
  <section class="location" :class="{ 'row': row, 'long': !row }">
    <div class="location__wrapper">
      <h1 class="location__title">Ключевые зоны расположения камер:</h1>
      <div class="location__cards">
        <slot name="cards"></slot>
      </div>
      <p class="location__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  row: { type: Boolean, required: false },
  subtitle: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.location {
  &.long {
    .location__cards {
      gap: 45px;
    }
  }

  &.row {
    .location__wrapper {
      @include flex-container(column, center, center);

      @include bigMobile {
        display: block;
      }
    }

    .location__cards {
      @include flex-container(row, space-between);

      white-space: nowrap;

      @include bigMobile {
        gap: 24px;
        margin: 0 auto 32px auto;
      }
    }
  }

  &__title {
    @include font(25, 35, 700);
    color: #1f1f1f;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.02em;

    margin-bottom: 24px;

    @include bigMobile {
      @include font(18, 22, 600);
    }
  }

  &__cards {
    max-width: 954px;
    width: 100%;

    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 96px;

    margin: 0 auto 32px auto;

    @include bigMobile {
      margin: 0 auto 24px auto;
      gap: 24px;
    }
  }

  &__subtitle {
    max-width: 1197px;
    width: 100%;

    @include font(20, 28, 400);
    color: black;
    letter-spacing: 0.02em;

    margin: 0 auto;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }
}
</style>
  