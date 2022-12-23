<template>
  <section class="cooperation">
    <div class="cooperation__wrapper">
      <Suggestions
        class="cooperation__suggestions"
        :img="invitatCooperate.img"
        :title="invitatCooperate.title"
        :subtitle="invitatCooperate.subtitle"
        :directionLeft="false"
      />
      <TypeCooperation class="cooperation__type-cooperation" />
      <Suggestions
        class="cooperation__importer"
        :img="reliableImporter.img"
        :title="reliableImporter.title"
        :subtitle="reliableImporter.subtitle"
        :directionLeft="true"
      />
      <CallBackInfo :title="'ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ НАШИХ СПЕЦИАЛИСТОВ ПО ТЕЛЕФОНУ '" :phone="'0 800 211 935'" />
    </div>
  </section>
</template>

<script setup>
import Suggestions from "~~/components/green_vision/cooperation/sections/Suggestions.vue";
import TypeCooperation from "~~/components/green_vision/cooperation/sections/TypeCooperation.vue";
import CallBackInfo from "~~/components/green_vision/cooperation/sections/CallBackInfo.vue";

const invitatCooperate = {
  img: "handshake-square",
  title: "GreenVision приглашает к сотрудничеству",
  subtitle:
    "Торговые компании, предпринимателей, монтажников видеонаблюдения, электриков и всех желающих научится видеонаблюдению и монтажу.",
};

const reliableImporter = {
  img: "green-vision-office",
  title: "Greenvision - это надёжный импортёр",
  subtitle:
    "Который поддерживает своих партнеров на всех этапах сотрудничества. В нашей команде работают высококвалифицированные технические специалисты. Мы предоставляем вашим клиентам гарантийное и послегарантийное обслуживание нашего оборудования. Высокая маржинальность товаров и широкий ассортимент. Зарабатывайте до 50% от стоимости товара. ",
};
</script>

<style lang="scss" scoped>
.cooperation {
  @extend %width-main;

  margin: auto;

  &__wrapper {
    padding: 64px 16px 134px 16px;
  }

  &__suggestions,
  &__type-cooperation {
    margin-bottom: 64px;

    @include bigMobile {
        margin-bottom: 32px;
    }
  }

  &__importer {
    margin-bottom: 24px;
  }
}
</style>