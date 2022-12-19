<template>
  <section class="flat-services">
    <div class="flat-services__wrapper">
      <DescriptionSection class="flat-services__description">
        <p class="flat-services__description-text">
          Система видеонаблюдения, установленная в квартире, в первую очередь
          выполняет охранные функции: запись несанкционированного проникновения
          злоумышленников (хулиганские действия, взлом, ограбление и т.д.),
          отправка тревожных сигналов по датчику движения и прочее.
        </p>
      </DescriptionSection>

      <Capabilities 
        class="flat-services__capabilities"
        :title="'Система безопасности позволяет:'"
      >
        <template v-slot:card>

          <CardCapabilities 
            class="flat-services__capabilities-card"
            v-for="(item, index) in capabilities" 
            :key="index"
            :column="true" 
            :img="item.img"
            :title="item.title"
          >
          </CardCapabilities>

        </template>
      </Capabilities>

      <InstallerBunner class="flat-services__bunner" />

      <DescriptionSection class="flat-services__description">
        <p class="flat-services__description-text narrow-width">
          Оборудование для систем видеонаблюдения и систем контроля доступа для
          квартир; монтаж камер с учетом особенностей каждого объекта; гарантии
          и техническое обслуживание.
        </p>
      </DescriptionSection>

      <BasicSet 
        class="flat-services__set"
        :title="'Пример базового комплекта оборудования для системы видеонаблюдения в квартире'"
      >
        <template v-slot:cards>

          <CardBasicSet 
            class="flat-services__set-card"
            v-for="(item,index) in basicSet"
            :key="index"
            :number="item.number"
            :img="item.img"
            :description="item.description"
          />

        </template>

        <template v-slot:description>
          <p class="flat-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля
            в квартире. Наши специалисты готовы предложить схему подключения
            системы видеонаблюдения исходя из особенностей Вашего объекта.
            Соответственно, список необходимого Вам оборудования и его стоимость
            может измениться.
          </p>
        </template>
      </BasicSet>

      <Location 
        class="flat-services__location"
        :row="true"
        :subtitle="location.subtitlte"
      >
        <template v-slot:cards>

          <CardLocation 
            class="flat-services__location-card"
            v-for="(item, index) in location.values"
            :key="index"
            :row="true"
            :img="item.img"
          >
            <template v-slot:item>
              <CheckItem 
                class="flat-services__price-item"
                v-for="(checkItem, i) in item.description"
                :key="i"
              >
              {{ checkItem }}
              </CheckItem
              >
            </template>
          </CardLocation>

        </template>
        <template v-slot:subtitle>
   
        </template>
      </Location>

      <ServicePrice 
        class="flat-services__service-price"
        :title="prices.title"
        :price="prices.price"
        :img="prices.img"
      >
        <template v-slot:item>
          <CheckItem 
            class="flat-services__price-item"
            v-for="(item, index) in prices.description"
            :key="index"
          >
          {{ item }}
          </CheckItem>
        </template>
      </ServicePrice>

      <Offers 
        class="flat-services__offers"
        :title="offers.title"
      >
        <template v-slot:item>
          <div class="flat-services__offer-section">
            <CheckItem 
              class="flat-services__offer-item"
              v-for="(item, index) in offers.descritions.sectionLeft"
              :key="index"
            >
            {{ item }}
          </CheckItem>
          </div>
          <div class="flat-services__offer-section">
            <CheckItem 
              class="flat-services__offer-item"
              v-for="(item, index) in offers.descritions.sectionRight"
              :key="index"
            >
            {{ item }}
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Promt class="flat-services__promt" />

      <SchemeLocation 
        class="flat-services__scheme"
        :img="'flat'"
      >
      </SchemeLocation>

      <ContactUs class="flat-services__contacts" />
    </div>
  </section>
</template>

<script setup>
import DescriptionSection from "~~/components/green_vision/services/sections/DescriptionSection.vue";
import Capabilities from "~~/components/green_vision/services/sections/Capabilities.vue";
import CardCapabilities from "~~/components/green_vision/services/UI/CardCapabilities.vue";
import InstallerBunner from "~~/components/green_vision/services/sections/InstallerBunner.vue";
import BasicSet from "~~/components/green_vision/services/sections/BasicSet.vue";
import CardBasicSet from "~~/components/green_vision/services/UI/CardBasicSet.vue";
import Location from "~~/components/green_vision/services/sections/Location.vue";
import LocationRow from "~~/components/green_vision/services/sections/LocationRow.vue";
import ServicePrice from "~~/components/green_vision/services/sections/ServicePrice.vue";
import CheckItem from "~~/components/green_vision/services/UI/CheckItem.vue";
import Offers from "~~/components/green_vision/services/sections/Offers.vue";
import Promt from "~~/components/green_vision/services/sections/Promt.vue";
import SchemeLocation from "~~/components/green_vision/services/sections/SchemeLocation.vue";
import ContactUs from "~~/components/green_vision/services/sections/ContactUs.vue";
import CardLocation from "~~/components/green_vision/services/UI/CardLocation.vue";
import CardLocationRow from "~~/components/green_vision/services/UI/CardLocationRow.vue";

const capabilities = [
  {img: 'baby', title: 'Cмотреть за детьми в режиме реального времени'},
  {img: 'cat', title: 'Cледить за животными'},
  {img: 'woomen', title: 'Осуществлять контроль работы домашнего персонала'},
  {img: 'stairs', title: 'Bидеть, что происходит на лестничной площадке'},
]

const basicSet = [
  {number: '4' ,img: 'camera-big', description: 'Купольная IP камера'},
  {number: '1' ,img: 'dvr', description: 'Видеорегистратор'},
  {number: '1' ,img: 'hdmi', description: 'Кабель HDMI 1.5 м'},
  {number: '2' ,img: 'patch-cord', description: 'Патч-корд'},
  {number: '0' ,img: 'materials', description: 'Материалы для подключения'},
]

const location = {
  subtitlte: 'Специалисты-монтажники из команды GreenVision практикуют индивидуальный подход к каждому клиенту. Они обязательно подберут оптимальное решение для установки видеонаблюдения, исходя из целей, которые оно должно выполнять. Мы поставляем только проверенное (качественное) оборудование, рассчитанное на любой бюджет (от эконом до премиум класса).',
  values: [
    {img: 'door', description: ['Входная дверь', 'Обзор на лестницу']},
    {img: 'elevator', description: ['Зона лифта', 'Обзор парадной']},
  ]
}

const prices = {
  title: 'Что входит в услугу установки типового комплекта видеонаблюдения для квартиры?',
  price: '7 500грн',
  description: ['Комплект видеонаблюдения FullHD разрешения, камеры для наружной и внутренней установки с инфракрасной подсветкой до 20 метров', 'Видеорегистратор без накопителя'],
  img: 'flat'
}

const offers = {
  title: 'Видеорегистратор без накопителя',
  descritions: {
    sectionLeft: [
    'Установка 2 камер на высоте не более 3 метров (без коробок)',
    'Сверление не более 2 отверстий до 20 сантиметров для прокладки в них кабеля по необходимости',
    'Подключение видеорегистратора и камер к сети (2 свободные розетки, или удлинитель заказчика)',
    ],
    sectionRight: [
    'Подключение видеорегистратора к телевизору заказчика на расстоянии 1.5 метра',
    'Прокладка кабеля открытым способом не более 18 метров до камеры (крепление стяжки; клипсы; под армрстронгом, без сверления отверстий для фиксации кабельной трассы ) на высоте до 3 метров'
    ]
  }

}


</script>

<style lang="scss" scoped>
.flat-services {
  background-color: white;

  &__description,
  &__capabilities,
  &__set,
  &__location,
  &__service-price,
  &__promt,
  &__scheme,
  &__contacts {
    @extend %width-main;

    margin: 0 auto 64px auto;
    @extend %padding-wrp;
  }

  &__description {
    @include bigMobile {
      margin: 0 auto 32px auto;
    }
  }

  &__description-text {
    @include font(20, 24, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    &.slim {
      @include font(20, 24, 400);
      text-align: left;
    }

    &.narrow-width {
      max-width: 805px;
      width: 100%;

      margin: 0 auto;

      @include bigMobile {
        @include font(16, 22, 400);

        padding: 0 8px;
      }
    }

    @include bigMobile {
      text-align: left;
    }
  }

  &__capabilities {
    @include bigMobile {
      margin: 0 auto 56px auto;
    }
  }

  &__image-capabilities {
    width: 115px;
    height: 115px;
    color: #159822;

    @include bigMobile {
      width: 95px;
      height: 95px;
    }
  }

  &__capabilities-card {
    --gap: 16px;

    @include set-item-count-in-row(4);

    @include bigMobile {
      @include set-item-count-in-row(2);
    }
  }

  &__bunner {
    margin-bottom: 64px;

    @include bigMobile {
      margin-bottom: 192px;
    }
  }

  &__set {
    @include bigMobile {
      margin-bottom: 54px;
    }
  }

  &__location {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__image-location {
    width: 135px;
    height: 135px;

    color: #159822;

    @include bigMobile {
      width: 70px;
      height: 70px;
    }
  }

  &__location-card {
    --gap: 96px;

    @include set-item-count-in-row(2);

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__set-card {
    --gap: 16px;

    @include set-item-count-in-row(5);

    @include smallestScreen {
      @include set-item-count-in-row(3);
    }

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__service-price {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__promt {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__scheme {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__offer-item {
    max-width: 513px;
    width: 100%;
  }

  &__offer-section {
    @include flex-container(column, flex-start);

    gap: 24px;
  }

  &__offers {
    @extend %width-main;

    margin: 0 auto 16px auto;
    @extend %padding-wrp;
  }
}
</style>
  