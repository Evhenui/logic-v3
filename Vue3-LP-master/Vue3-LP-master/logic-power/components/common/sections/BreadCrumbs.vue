<template>
  <section class="crumbs">
    <ul class="crumbs__list">
      <li class="crumbs__item" v-for="(item, index) in crumbsItem" :key="index">
        <div class="crumbs__arrow-left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#F36C21"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="crumbs__title">{{ item }}</span>
        <div class="crumbs__arrow-rigth">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#F36C21"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  crumbsItem: { type: Array, required: true },
});
</script>

<style lang="scss" scoped>
.crumbs {
  @extend %width-main;

  @extend %padding-wrp;
  margin: 0 auto;

  @include flex-container(row, flex-start);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &__list {
    @include flex-container(row, center);
  }

  &__item {
    @include flex-container(row, flex-start, center);

    cursor: pointer;

    @include bigMobile {
      display: none;

      &:last-child {
        display: flex;
      }
    }
  }

  &__arrow-left {
    display: none;

    transform: rotateZ(180deg);

    @include bigMobile {
      display: block;
    }
  }

  &__arrow-left,
  &__arrow-rigth {
    font-size: 0;
  }

  &__title {
    @include font(14, 16, 500);
    color: #2b2b2b;
  }

  &__arrow-rigth {
    @include bigMobile {
      display: none;
    }
  }
}
</style>
    