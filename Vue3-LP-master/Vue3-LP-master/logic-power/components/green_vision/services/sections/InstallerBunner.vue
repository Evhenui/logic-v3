<template>
  <section class="banner-install">
    <div class="banner-install__wrapper">
      <div class="banner-install__image-wrapper">
        <img
          class="banner-install__image"
          src="@/public/img/services-bunner.jpg"
          alt="background"
        />
      </div>
   
      <div class="banner-install__wrapper-content">
        <h1 class="banner-install__title">Профессиональный монтаж</h1>
        <p class="banner-install__subtitle">
          Система видеонаблюдения, установленная в квартире, в первую очередь
          выполняет охранные функции: запись несанкционированного проникновения
          злоумышленников (хулиганские действия, взлом, ограбление и т.д.),
          отправка тревожных сигналов по датчику движения и прочее.
        </p>
        <div class="banner-install__buttons">
          <ButtonGreen />
          <ButtonTransparent />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonGreen from "../UI/ButtonGreen.vue";
import ButtonTransparent from "../UI/ButtonTransparent.vue";
</script>

<style lang="scss" scoped>
.banner-install {
  &__wrapper {
    position: relative;

    padding: 72px 16px 82px 16px;

    @include bigMobile {
      min-height: 503px;

      padding: 0;
    }
  }

  &__image-wrapper {
    max-width: 1920px;
    width: 100%;

    position: absolute;
    @include setAbs(0,0,0,0);

    margin: auto;

    @include bigMobile {
      &::after {
      content: '';
      display: block;

      position: absolute;
      @include setAbs(0,0,0,0);
      z-index: 101;

      background: linear-gradient(
        180deg,
        rgba(138, 138, 138, 0) 0%,
        rgba(65, 65, 65, 0.323285) 0.01%,
        rgba(54, 54, 54, 0) 0.02%,
        rgba(54, 54, 54, 0.65) 34.9%
      );
    }
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    position: relative;
    z-index: 100;

    object-fit: cover;
  }

  &__wrapper-content {
    @extend %width-main;

    position: relative;
    z-index: 101;

    margin: 0 auto;

    @include bigMobile {
      position: absolute;

      padding: 268px 16px 0 16px;
    }
  }

  &__title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: #1f1f1f;

    margin-bottom: 16px;

    @include bigMobile {
      @include font(16, 19, 700);
      color: white;
    }
  }

  &__subtitle {
    max-width: 618px;
    width: 100%;

    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin-bottom: 48px;

    @include bigMobile {
      max-width: 345px;

      color: white;
    }
  }

  &__buttons {
    @include flex-container(column, flex-start);

    gap: 16px;

    @include bigMobile {
      gap: 32px;
    }
  }
}
</style>
  