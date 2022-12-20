<template>
  <section class="location">
    <div class="location__wrapper">
      <h1 class="location__title">Ключевые зоны расположения камер:</h1>
      <div class="location__cards">
        <slot name="cards"></slot>
      </div>
      <p class="location__subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </section>
</template>
  
<script setup>

</script>
  
<style lang="scss" scoped>
.location {

  &.long {
    .location__cards {
      max-width: 100%;
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
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 45px;

    margin: 0 auto 32px auto;

    @include bigMobile {
      margin: 0 auto 24px auto;
      gap: 24px;
    }
  }

  &__name {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    color: black;
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
    