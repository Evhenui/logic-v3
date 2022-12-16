<template>
  <div class="language">
    <div
      class="language__wrapper-uk"
      :class="{ active: state === true }"
      @click="state = true"
    >
      <a href="#" class="language__uk">Укр</a>
    </div>
    <div
      class="language__wrapper-ru"
      :class="{ active: state === false }"
      @click="state = false"
    >
      <a href="#" class="language__ru">Рус</a>
    </div>
  </div>
</template>

<script setup>
const state = ref(false);
</script>

<style lang="scss" scoped>
.language {
  @include flex-container(row, flex-start, center);

  &__wrapper-uk {
    border-right: 1px solid white;

    padding: 4px 8px 4px 0;

    &.active .language__uk {
      color: #f36c21;
    }
  }

  &__wrapper-ru {
    padding: 4px 0 4px 8px;

    &.active .language__ru {
      color: #f36c21;
    }
  }

  &__uk,
  &__ru {
    @include font(12, 14, 400);
    color: white;
  }
}
</style>
      