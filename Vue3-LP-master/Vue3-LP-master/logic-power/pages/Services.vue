<template>
  <section class="services">
    <div class="services__wrapper">
      <DescriptionSection class="services__description">
        <p class="services__subtitle">
          Современные системы видеонаблюдения повсеместно используются, не
          только в качестве элемента системы охраны жилых и производственных
          объектов, но и как эффективный инструмент контроля персонала и ведения
          бизнеса. GreenVision – это украинский бренд. За более 6-ти лет работы
          на рынке наша компания заслужила репутацию надежного поставщика
          оборудования и комплектующих для систем видеонаблюдения.
        </p>
      </DescriptionSection>

      <ServicesOffers 
        class="services__offers" 
        :values="services"
      />

      <PartProcess 
        class="services__process" 
        :values="partProcess"
      />

      <OurProject 
        class="services__our-project" 
        :values="ourProject"
      />

      <Pricess 
        class="services__pricess" 
        :values="priceServices" 
      />
    </div>
  </section>
</template>

<script setup>
import DescriptionSection from "~~/components/green_vision/services/sections/DescriptionSection.vue";
import ServicesOffers from "~~/components/green_vision/services/sections/ServicesOffers.vue";
import PartProcess from "~~/components/green_vision/services/sections/PartProcess.vue";
import OurProject from "~~/components/green_vision/services/sections/OurProject.vue";
import Pricess from "~~/components/green_vision/services/sections/Pricess.vue";

const services = [
  {img: 'flat', title: 'Квартира', subtitle: 'Установка видеонаблюдения в квартире, на лестничной площадке и во дворе многоэтажного дома'},
  {img: 'home', title: 'Дом', subtitle: 'Монтаж системы видеонаблюдения внутри жилых и хозяйственных помещений, организация системы охраны периметра'},
  {img: 'office', title: 'Офис', subtitle: 'Установка видеонаблюдения для обеспечения безопасности материальных ценностей и контроля работы персонала'},
  {img: 'score', title: 'Магазин', subtitle: 'Установка видеонаблюдения для усиления профилактики воровства среди персонала и посетителей торговых точек'},
  {img: 'stock', title: 'Cклад', subtitle: 'Монтаж системы видеонаблюдения для обеспечения эффективного контроля безопасности внутри и снаружи складских помещений'},
  {img: 'production', title: 'Производство', subtitle: 'Монтаж системы видеонаблюдения для качественного мониторинга производственных процессов'},
]

const partProcess = [
  {title: 'заявка', subtitle: 'подача заявки на установку видеонаблюдения'},
  {title: 'Замер', subtitle: 'выезд нашего специалиста на объект'},
  {title: 'Расчет стоимости', subtitle: 'составление проекта и сметы на установку видеонаблюдения'},
  {title: 'Установка', subtitle: 'доставка, монтаж и настройка оборудования'},
  {title: 'Прием работы', subtitle: 'сдача готового объекта заказчику '},
]

const ourProject = [
  {img: 'theatre', title: 'Одесский академический театр оперы и балета', subtitle: 'Один из самых знаменитых театров Европы находится под надежным контролем видеокамер ТМ GreenVision.'},
  {img: 'bakery', title: 'Волновахский хлебозавод', subtitle: 'Камеры видеонаблюдения GreenVision контролируют производственные мощности, которые ежедневно производят 14 тонн хлебобулочных изделий.'},
  {img: 'hotel', title: 'Гостиница «Grand Pettine»', subtitle: 'Камеры видеонаблюдения GreenVision контролируют производственные мощности, которые ежедневно производят 14 тонн хлебобулочных изделий.'},
  {img: 'caffe', title: 'Сеть кафе «Жарю Парю»', subtitle: 'Эта сеть кафе быстрого питания пользуется популярностью у одесситов и гостей города уже более 10 лет. Видеонаблюдение от ТМ GreenVision обеспечивает контроль персонала и безопасность посетителей кафе.'},
  {img: 'airport', title: 'Международный аэропорт города Кишинев', subtitle: 'Международная безопасность находится под пристальным вниманием видеокамер нашей торговой марки.'},
  {img: 'restaurant', title: 'Ресторан «Яхта»', subtitle: 'Модное место для развлечений с рестораном и пляжным клубом. Безопасность гостей обеспечивает высокое качество систем видеонаблюдения от GreenVision.'},
]

const priceServices = [
  {img: 'flat', title: 'Квартира', price: '6 900 грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 4 камер", "Подключение источников питания", "Видеорегистратор на 4 канала", "Прокладка коммуникаций для подключения оборудования"] },
  {img: 'home', title: 'дом', price: '23 000грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 8 камер", "Монтаж подключение СКУД", "Подключение источников питания", "Видеорегистратор на 8 каналов", "Прокладка коммуникаций для подключения оборудования", "Настройка удаленного наблюдения"] },
  {img: 'office', title: 'Офис', price: '29 500грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 8 камер", "Жесткий диск на 1 TB", "Подключение источников питания", "Видеорегистратор на 8 каналов", "Прокладка коммуникаций для подключения оборудования", "Настройка удаленного наблюдения", "Настройка записи видеонаблюдения"] },
  {img: 'score', title: 'Магазин', price: '53 200грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 16 камер", "Жесткий диск на 2 TB", "Подключение источников питания", "Видеорегистратор на 16 каналов", "Прокладка коммуникаций для подключения оборудования", "Настройка резервного копирования", "Настройка удаленного наблюдения"] },
  {img: 'production', title: 'Производство', price: '71 000грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 16 камер", "Жесткий диск на 8 TB", "Подключение источников питания", "Видеорегистратор на 16 каналов", "Прокладка коммуникаций для подключения оборудования", "Настройка записи видеонаблюдения", "Настройка удаленного наблюдения"] },
  {img: 'stock', title: 'Склад', price: '124 000грн', descriptions: ["Выезд специалиста для замеров", "Просчет проекта", "Установка 14 камер", "Установка 2 роботизированных камер", "Жесткий диск на 8 TB", "Подключение источников питания", "Видеорегистратор на 16 каналов", "Прокладка коммуникаций для подключения оборудования", "Настройка записи видеонаблюдения", "Настройка удаленного наблюдения"] }
]

</script>

<style lang="scss" scoped>
.services {
  background-color: white;

  &__wrapper {
    padding-bottom: 136px;
  }

  &__description,
  &__offers,
  &__our-project {
    @extend %width-main;

    margin: 0 auto 64px auto;
    @extend %padding-wrp;

    @include bigMobile {
      margin: 0 auto 32px auto;
    }
  }

  &__subtitle {
    max-width: 1200px;
    width: 100%;

    @include font(16, 22, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin: 0 auto;

    @include bigMobile {
      text-align: left;
    }
  }

  &__process {
    margin-bottom: 64px;

    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__pricess {
    @extend %width-main;

    margin: 0 auto;
    @extend %padding-wrp;
  }
}
</style>
  