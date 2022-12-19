<template>
  <section class="promt">
    <div class="promt__wrapper">
      <div class="promt__image">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 20.416V37.916" stroke="#009B3E" stroke-width="4.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M35 49.6132L35.0292 49.5807" stroke="#009B3E" stroke-width="4.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M34.9997 64.1673C51.108 64.1673 64.1663 51.109 64.1663 35.0007C64.1663 18.8923 51.108 5.83398 34.9997 5.83398C18.8914 5.83398 5.83301 18.8923 5.83301 35.0007C5.83301 51.109 18.8914 64.1673 34.9997 64.1673Z" stroke="#009B3E" stroke-width="4.375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="promt__title">Дополнительные работы и оборудование оговариваются и оплачиваются отдельно!</span>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.promt {
  &__wrapper {
    @include flex-container(row, center, center);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 32px;
    gap: 68px;

    @include bigMobile {
      @include flex-container(column, center, center);

      padding: 32px 16px;
      gap: 32px;
    }
  }

  &__image {
    @include bigMobile {
      width: 64px;
      height: 64px;
    }
  }

  &__title {
    @include font(18, 25, 500);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }
}
</style>
      