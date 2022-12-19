<template>
  <section class="score-services">
    <div class="score-services__wrapper">
      <DescriptionSection class="score-services__description">
        <p class="score-services__description-text">
          Видеонаблюдение для коммерческих целей помогает: снизить риск
          воровства, регулировать конфликтные ситуации, улучшить качество
          сервиса и повысить продажи.
        </p>
      </DescriptionSection>

      <Capabilities 
        class="score-services__capabilities"
        :title="'Система безопасности позволяет:'"
      >
        <template v-slot:card>

          <CardCapabilities 
            class="score-services__capabilities-card"
            v-for="(item, index) in capabilities" 
            :key="index"
            :column="true" 
            :img="item.img"
            :title="item.title"
          >
          </CardCapabilities>

        </template>
      </Capabilities>

      <InstallerBunner class="score-services__bunner" />

      <DescriptionSection class="score-services__description">
        <p class="score-services__description-text">
          Профессиональное оборудоване для систем видеонаблюдения;
          индивидуальная схема подключения оборудования для каждого объекта;
          техническая поддержка и 100% выполнение гарантийных обязательств.
        </p>
      </DescriptionSection>

      <BasicSet 
        class="score-services__set"
        :title="'Пример базового комплекта оборудования для системы видеонаблюдения в магазине'"
      >
        <template v-slot:cards>

          <CardBasicSet 
            class="score-services__set-card"
            v-for="(item,index) in basicSet"
            :key="index"
            :number="item.number"
            :img="item.img"
            :description="item.description"
          />

        </template>

        <template v-slot:description>
          <p class="score-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля в магазине. Наши специалисты 
            готовы предложить схему подключения системы видеонаблюдения исходя из особенностей Вашего объекта. 
            Соответственно, список необходимого Вам оборудования и его стоимость может измениться.
          </p>
        </template>
      </BasicSet>

      <Location 
        class="score-services__location"
        :row="false"
        :subtitle="location.subtitlte"
      >
        <template v-slot:cards>

          <CardLocation 
            class="score-services__location-card"
            v-for="(item, index) in location.values"
            :key="index"
            :img="item.img"
            :title="item.title"
          >
            <template v-slot:item>
              <CheckItem 
                class="score-services__price-item"
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
        class="score-services__service-price"
        :title="prices.title"
        :price="prices.price"
        :img="prices.img"
      >
        <template v-slot:item>
          <CheckItem 
            class="score-services__price-item"
            v-for="(item, index) in prices.description"
            :key="index"
          >
          {{ item }}
          </CheckItem>
        </template>
      </ServicePrice>

      <Offers class="score-services__offers">
        <template v-slot:title>Работы по установке:</template>
        <template v-slot:item>
          <div class="score-services__offer-section">
            <CheckItem class="score-services__offer-item"
              >Установка 16 камер на высоте не более 3 метров (с коробками)
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Прокладка кабеля открытым способом не более 20 метров до камеры
              (крепление стяжки; клипсы; под армрстронгом, без сверления
              отверстий для фиксации кабельной трассы) на высоте до 3 метров
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Сверление не более 8 отверстий до 20 сантиметров для прокладки в
              них кабеля по необходимости
            </CheckItem>
          </div>
          <div class="score-services__offer-section">
            <CheckItem class="score-services__offer-item">
              Подключение видеорегистратора и камер к сети (3 свободные розетки,
              или удлинитель заказчика)
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Подключение видеорегистратора и камер к сети (3 свободные розетки,
              или удлинитель заказчика)
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Подключение видеорегистратора к телевизору заказчика на расстоянии
              1.5 метра
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Подключение и установка Жесткого диска в видеорегистратор
            </CheckItem>
            <CheckItem class="score-services__offer-item">
              Настройка записи камер: постоянно; по движению; по времени
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Offers 
        class="score-services__offers"
        :title="offers.main.title"
      >
        <template v-slot:item>
          <div class="score-services__offer-section">
            <CheckItem 
              class="score-services__offer-item"
              v-for="(item, index) in offers.main.descritions.sectionLeft"
              :key="index"
            >
            {{ item }}
          </CheckItem>
          </div>
          <div class="score-services__offer-section">
            <CheckItem 
              class="score-services__offer-item"
              v-for="(item, index) in offers.main.descritions.sectionRight"
              :key="index"
            >
            {{ item }}
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Offers 
        class="score-services__offers"
        :title="offers.additionally.title"
      >
        <template v-slot:item>
          <div class="score-services__offer-section">
            <CheckItem 
              class="score-services__offer-item"
              v-for="(item, index) in offers.additionally.descritions.sectionLeft"
              :key="index"
            >
            {{ item }}
          </CheckItem>
          </div>
          <div class="score-services__offer-section">
            <CheckItem 
              class="score-services__offer-item"
              v-for="(item, index) in offers.additionally.descritions.sectionRight"
              :key="index"
            >
            {{ item }}
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Promt class="score-services__promt" />

      <SchemeLocation 
        class="score-services__scheme"
        :img="'score'"
      >
      </SchemeLocation>

      <ContactUs class="score-services__contacts" />
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
  {img: 'сash-register', title: 'Контроль кассовых зон'},
  {img: 'thief', title: 'Предотвращение злоупотреблений и краж'},
  {img: 'package', title: 'Учет поступления товаров'},
  {img: 'resolving-issues', title: 'Разрешение спорных ситуаций'},
]

const basicSet = [
  {number: '4' ,img: 'camera-big', description: 'Купольная IP камера'},
  {number: '4' ,img: 'camera', description: 'Наружная IP камера'},
  {number: '1' ,img: 'dvr', description: 'Видеорегистратор NVR'},
  {number: '1' ,img: 'switch', description: 'Коммуникатор сетевой POE'},
  {number: '8' ,img: 'splitter-office', description: 'Сплиттер POE 48-12V'},
  {number: '1' ,img: 'hdd', description: 'Жесткий диск 2ТВ'},
  {number: '1' ,img: 'hdmi', description: 'Кабель HDMI 1.5 м'},
  {number: '1' ,img: 'patch-cord', description: 'Патч-корд'},
  {number: '0' ,img: 'materials', description: 'Материалы для подключения'},
]

const location = {
  subtitlte: 'Технические специалисты и монтажники оборудования GreenVision составят схему расположения камер исходя из конкретных целей и задач, которые должно решить видеонаблюдение в Вашей торговой точке. Мы поставляем качественное оборудование различных ценовых категорий (эконом, стандарт, премиум). ',
  values: [
    {img: 'parking', title: 'Парковка'},
    {img: 'cash-machine', title: 'Касса'},
    {img: 'unloading-goods', title: 'Зона выгрузки товаров'},
    {img: 'doors', title: 'Выход'},
    {img: 'shopping', title: 'Торговые ряды'},
  ]
}

const prices = {
  title: 'Что входит в услугу установки типового комплекта видеонаблюдения в магазине?',
  price: '35 000 ГРН',
  description: [
    'Комплект видеонаблюдения FullHD разрешения, камеры для наружной и внутренней установки с инфракрасной подсветкой до 20 метров',
    'Видеорегистратор с накопителем объемом 2ТВ'
  ],
  img: 'score'
}

const offers = {
  main: {
    title: 'Работы по установке:',
    descritions: {
      sectionLeft: [
      'Установка 16 камер на высоте не более 3 метров (с коробками)',
      'Прокладка кабеля открытым способом не более 20 метров до камеры (крепление стяжки; клипсы; под армрстронгом, без сверления отверстий для фиксации кабельной трассы) на высоте до 3 метров',
      'Сверление не более 8 отверстий до 20 сантиметров для прокладки в них кабеля по необходимости',
      ],
      sectionRight: [
      'Подключение видеорегистратора и камер к сети (3 свободные розетки, или удлинитель заказчика)',
      'Подключение видеорегистратора к телевизору заказчика на расстоянии 1.5 метра',
      'Подключение и установка Жесткого диска в видеорегистратор',
      'Настройка записи камер: постоянно; по движению; по времени'
      ]
    }
  },
  additionally: {
    title: 'Подключение и настройка удаленного доступа:',
    descritions: {
      sectionLeft: [
      'Подключение видеорегистратора к роутеру заказчика в свободный порт, длинна кабеля не более 5 метров.',
      'Настройка удаленного просмотра на 2 устройствах через протокол Р2Р (обучение пользователя, просмотр записей, сохранение записи на usb или память телефона)',
      ],
      sectionRight: [
      'Проброс портов на роутере заказчика, регистрация в платном облаке для резервирования записей',
      'Консультация заказчика по установке соответствующей скорости интернета и статического адреса у провайдера интернета.',
      ]
    }
  }
}
</script>
    
    <style lang="scss" scoped>
.score-services {
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
    --gap: 45px;

    @include set-item-count-in-row(5);

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
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
      