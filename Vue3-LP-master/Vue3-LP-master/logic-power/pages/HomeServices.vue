<template>
  <section class="home-services">
    <div class="home-services__wrapper">
      <DescriptionSection class="home-services__description">
        <p class="home-services__description-text">
          Системы видеонаблюдения решают множество задач, связанных с
          обеспечением безопасности в частном доме. Не важно, большой или
          маленький у Вас дом и участок земли, расположен он в городе или за
          городом, живете Вы там постоянно или бываете наездами, позаботьтесь о
          безопасности своего имущества.
        </p>
      </DescriptionSection>

      <Capabilities 
        class="home-services__capabilities"
        :title="'Система безопасности позволяет:'"
      >
        <template v-slot:card>

          <CardCapabilities 
            class="home-services__capabilities-card"
            v-for="(item, index) in capabilities" 
            :key="index"
            :column="false" 
            :img="item.img"
            :title="item.title"
          >
          </CardCapabilities>

        </template>
      </Capabilities>

      <InstallerBunner class="home-services__bunner" />

      <DescriptionSection class="home-services__description">
        <p class="home-services__description-text">
          По статистике, установка камер видеонаблюдения в частных домах снижает
          риск совершение краж на 70%, а в случае, если это произошло,
          возможность опознать и найти грабителей увеличивается на 60%.
        </p>
      </DescriptionSection>

      <BasicSet 
        class="home-services__set"
        :title="'Пример базового комплекта оборудования для системы видеонаблюдения в квартире'"
      >
        <template v-slot:cards>

          <CardBasicSet 
            class="home-services__set-card"
            v-for="(item,index) in basicSet"
            :key="index"
            :number="item.number"
            :img="item.img"
            :description="item.description"
          />

        </template>

        <template v-slot:description>
          <p class="home-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля
            в частном доме. Наши специалисты готовы предложить схему подключения
            системы видеонаблюдения исходя из особенностей Вашего объекта.
            Соответственно, список необходимого Вам оборудования и его стоимость
            может измениться.
          </p>
        </template>
      </BasicSet>

      <Location 
        class="home-services__location"
        :row="true"
        :subtitle="location.subtitlte"
      >
        <template v-slot:cards>

          <CardLocation 
            class="home-services__location-card"
            v-for="(item, index) in location.values"
            :key="index"
            :img="item.img"
            :title="item.title"
          >
            <template v-slot:item>
              <CheckItem 
                class="home-services__price-item"
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
          Технические специалисты и монтажники оборудования GreenVision составят
          схему расположения камер исходя из конкретных целей и задач, которые
          должно решить видеонаблюдение. Мы поставляем качественное оборудование
          различных ценовых категорий (эконом, стандарт, премиум).
        </template>
      </Location>

      <ServicePrice 
        class="home-services__service-price"
        :title="prices.title"
        :price="prices.price"
        :img="prices.img"
      >
        <template v-slot:item>
          <CheckItem 
            class="home-services__price-item"
            v-for="(item, index) in prices.description"
            :key="index"
          >
          {{ item }}
          </CheckItem>
        </template>
      </ServicePrice>

      <Offers 
        class="home-services__offers"
        :title="offers.main.title"
      >
        <template v-slot:item>
          <div class="home-services__offer-section">
            <CheckItem 
              class="home-services__offer-item"
              v-for="(item, index) in offers.main.descritions.sectionLeft"
              :key="index"
            >
            {{ item }}
          </CheckItem>
          </div>
          <div class="home-services__offer-section">
            <CheckItem 
              class="home-services__offer-item"
              v-for="(item, index) in offers.main.descritions.sectionRight"
              :key="index"
            >
            {{ item }}
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Offers 
        class="home-services__offers"
        :title="offers.additionally.title"
      >
        <template v-slot:item>
          <div class="home-services__offer-section">
            <CheckItem 
              class="home-services__offer-item"
              v-for="(item, index) in offers.additionally.descritions.sectionLeft"
              :key="index"
            >
            {{ item }}
          </CheckItem>
          </div>
          <div class="home-services__offer-section">
            <CheckItem 
              class="home-services__offer-item"
              v-for="(item, index) in offers.additionally.descritions.sectionRight"
              :key="index"
            >
            {{ item }}
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Promt class="home-services__promt" />

      <SchemeLocation 
        class="home-services__scheme"
        :img="'home'"
      >
      </SchemeLocation>

      <ContactUs class="home-services__contacts" />
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
  {img: 'home', title: 'Просматривать периметр придомовой территории'},
  {img: 'lock', title: 'Обезопасить от нежелательных гостей'},
]

const basicSet = [
  {number: '8' ,img: 'camera', description: 'Наружная IP камера'},
  {number: '1' ,img: 'switch', description: 'Коммуникатор сетевой POE'},
  {number: '1' ,img: 'dvr', description: 'Видеорегистратор'},
  {number: '1' ,img: 'hdmi', description: 'Кабель HDMI 1.5 м'},
  {number: '2' ,img: 'patch-cord', description: 'Патч-корд'},
  {number: '0' ,img: 'materials', description: 'Материалы для подключения'},
]

const location = {
  subtitlte: 'Специалисты-монтажники из команды GreenVision практикуют индивидуальный подход к каждому клиенту. Они обязательно подберут оптимальное решение для установки видеонаблюдения, исходя из целей, которые оно должно выполнять. Мы поставляем только проверенное (качественное) оборудование, рассчитанное на любой бюджет (от эконом до премиум класса).',
  values: [
    {img: 'home-teritory', title: 'Придомовая территория'},
    {img: 'garage', title: 'Гараж'},
    {img: 'road', title: 'Обзор на улицу'},
  ]
}

const prices = {
  title: 'Что входит в услугу установки типового комплекта видеонаблюдения для дома?',
  price: '27 000 грн',
  description: [
    'Комплект видеонаблюдения FullHD разрешения, камеры для наружной и внутренней установки с инфракрасной подсветкой до 20 метров',
    'Видеорегистратор без накопителя',
    'Установка цветного видеодомофона и электромеханического замка'
  ],
  img: 'home'
}

const offers = {
  main: {
    title: 'Работы по установке:',
    descritions: {
      sectionLeft: [
      'Установка 8 камер на высоте не более 3 метров (с коробками) ',
      'Прокладка кабеля открытым способом не более 18 метров до камеры (крепление стяжки; клипсы;под армрстронгом, без сверления отверстий для фиксации кабельной трассы) на высоте до 3 метров ',
      'Сверление не более 4 отверстий до 20 сантиметров для прокладки в них кабеля по необходимости',
      ],
      sectionRight: [
      'Подключение видеорегистратора и камер к сети (3 свободные розетки, или удлинитель заказчика)',
      'Подключение видеорегистратора к телевизору заказчика на расстоянии 1.5 метра',
      'Установка СКУД'
      ]
    }

  },
  additionally: {
    title: 'Подключение и настройка удаленного доступа:',
    descritions: {
      sectionLeft: [
      'Настройка удаленного просмотра на 2 устройствах через протокол Р2Р все изменения и дополнительные работы и оборудование оговаривается и оплачивается отдельно!',
      ],
      sectionRight: [
      'Подключение видеорегистратора к роутеру заказчика в свободный порт, длинна кабеля не более 5 метров.',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-services {
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
    max-width: 1200px;
    width: 100%;

    @include font(20, 24, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin: 0 auto;

    &.slim {
      @include font(20, 24, 400);
      text-align: left;
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

    @include set-item-count-in-row(2);
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
    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__price-item {
    max-width: 434px;
    width: 100%;
  }

  &__set-card {
    --gap: 16px;

    @include set-item-count-in-row(3);

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
  