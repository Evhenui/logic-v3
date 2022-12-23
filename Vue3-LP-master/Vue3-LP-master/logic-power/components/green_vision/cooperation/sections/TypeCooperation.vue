<template>
  <section class="type-cooperation">
    <h1 class="type-cooperation__title">Типы сотрудничества:</h1>
    <div class="type-cooperation__cards">
      <CardTypeCooperation
        class="type-cooperation__card"
        v-for="(item, index) in cards"
        :key="index"
        :img="item.img"
        :title="item.title"
      />
    </div>
  </section>
</template>

<script setup>
import CardTypeCooperation from "./CardTypeCooperation.vue";

const cards = [
  { img: "beginners", title: "Начинающим монтажникам" },
  { img: "wholesale", title: "Начинающим монтажникам" },
  { img: "video-surveillance-installers", title: "Начинающим монтажникам" },
];
</script>

<style lang="scss" scoped>
.type-cooperation {
  &__title {
    @include font(30, 39, 600);
    letter-spacing: 0.02em;
    color: #1f1f1f;
    text-align: center;

    margin-bottom: 24px;

    @include bigMobile {
      @include font(18, 22, 600);
    }
  }

  &__cards {
    @include flex-container(row, space-between);
    flex-wrap: wrap;

    gap: 16px;
  }

  &__card {
  --gap: 16px;

  @include set-item-count-in-row(3);

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }
}
</style>