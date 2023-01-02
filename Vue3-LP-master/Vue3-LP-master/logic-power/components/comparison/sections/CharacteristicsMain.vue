<template>
  <section class="characteristic">
    <div class="characteristic__header">
      <h1 class="characteristic__header-title">Характеристики</h1>
    </div>
    <section class="characteristic__wrapper">
      <nav class="characteristic__category-items">
        <div
          ref="menuCategory"
          v-for="(item, index) in characteristics"
          :key="index"
          class="characteristic__category-item"
          :style="{ '--height': sectionHeight}"
        >
          <p class="characteristic__item-name">{{ item.title }}</p>
        </div>
      </nav>

      <section class="characteristic__slider" ref="sliderWindow">
        <div
          class="characteristic__slider-wrapepr"
          ref="sliderWidth"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
        >
          <template v-for="element in characteristics">
            <div class="characteristic__item-title">
              <p class="characteristic__title">{{ element.title }}</p>
            </div>
            <section
              class="characteristic__items"
              ref="sliderDescription"
              :style="[
                { '--left': -slider.positionLeft + 'px' },
                { '--height': sectionHeight }
              ]"
            >
              <div
                v-for="(option, i) in element.option"
                :key="i"
                class="characteristic__body-description"
              >
                <p class="characteristic__description">{{ option.name }}</p>
              </div>
            </section>
          </template>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
/* defineProps({
  mobileSize: { type: Number, required: false },
  sliderCounter: { type: Number, required: false },
  sliderTranslate: { type: Number, required: false }
});

const emits = defineEmits(["sliderPosition"]);

const menuCategory = ref(null);
const sliderDescription = ref(null);
const slideCategory = ref(null);
const sliderWindow = ref(null);
const sliderWidth = ref(null);

const characteristics = [
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.0075533" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
      ],
    },
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
      ],
    },
];

const slider = {
  distance: 0,
  positionLeft: 0,
  counter: 0,
};

const sliderMobile = {
  positionX: null,
  diff: 0
}

const sectionHeight = ref('auto');

function nextSlide() {
  const sliderWidth = sliderWidth.value.scrollWidth;
  const sliderWindow = sliderWindow.value.offsetWidth;
  const slidesLength = characteristics[0].option.length;
  const slideWidth = sliderWidth / characteristics[0].option.length;
  const maxStep = Math.round(slidesLength - sliderWindow / slideWidth);
  slider.distance = sliderWidth - sliderWindow - (slider.positionLeft + slideWidth);

  if (slider.distance >= 0 && slider.counter < maxStep - 1) {
    slider.counter++;
    slider.positionLeft = slideWidth * slider.counter;
  } else {
    slider.positionLeft = sliderWidth - sliderWindow;
    slider.counter = maxStep;
  }

  emits("sliderPosition", slider.positionLeft, slider.counter);
}

function prevSlide() {
    const sliderWidth = sliderWidth.value.scrollWidth;
    const sliderWindow = sliderWindow.value.offsetWidth;
    const slidesLength = characteristics[0].option.length;
    const slideWidth = sliderWidth / characteristics[0].option.length;
    const maxStep = Math.round(slidesLength - sliderWindow / slideWidth);
    const startingPosition = 0;

    slider.distance = sliderWidth - sliderWindow - (slider.positionLeft - slideWidth);

    if (slider.distance <= sliderWidth - sliderWindow) {
      slider.counter--;
      slider.positionLeft = slideWidth * slider.counter;
    } else {
      slider.positionLeft = startingPosition;
      slider.distance = sliderWidth - sliderWindow;
    }

    emits("sliderPosition", slider.positionLeft, slider.counter);
}

function handleTouchStart(event) {
  sliderMobile.positionX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const positionMove = event.touches[0].clientX;
  const diff = positionMove - sliderMobile.positionX;

  if(!sliderMobile.positionX) return false;

  sliderMobile.diff = diff;
  sliderMobile.diff > 0 ? prevSlide() : nextSlide();

  sliderMobile.positionX = null;
}

function resizeCharacteristics() {
  const slideCategory = sliderDescription.value;
  const menuCategory = menuCategory.value;

  if(window.innerWidth > mobileSize) {
    menuCategory.forEach((element, index) => {

      element.clientHeight > slideCategory[index].clientHeight?
      sectionHeight.value = `${element.clientHeight}px`:
      sectionHeight.value = `${slideCategory[index].clientHeight}px`;

    })
  } else sectionHeight.value = 'auto';
}

watch(sliderCounter, (current) => slider.counter = current);

watch(sliderTranslate, (current) => slider.positionLeft = current);

onMounted(() => {
  resizeCharacteristics();
  window.addEventListener("resize", resizeCharacteristics);
})

onUnmounted(() => {
  window.removeEventListener("resize", resizeCharacteristics);
})
 */
</script>
 
<style lang="scss" scoped>
.characteristic {
  &__header {
    background-color: #393d38;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__header-title {
    @include font(16, 22, 600);
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  &__wrapper {
    @include flex-container(row, left);
  }

  &__category-items {
    max-width: 274px;
    width: 100%;
    flex: 1 0 274px;

    border-right: 1px solid #d1d1d1;

    @include bigMobile {
      display: none;
    }
  }

  &__category-item,
  &__slide-category {
    background-color: white;

    padding: 8px 16px;
  }

  &__category-item {
    --height: auto;
    height: var(--height);

    @include flex-container(column, center);

    &:nth-child(2n) {
      background-color: #e9e9e9;
    }
  }

  &__item-name,
  &__category-title,
  &__description {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__slider {
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__slider-wrapepr {
    width: max-content;
  }

  &__item-title {
    display: none;
    @include bigMobile {
      min-height: 36px;

      @include flex-container(row, center, center);
      flex: 0 0 auto;

      text-align: center;

      background-color: #e9e9e9;

      padding: 8px;
    }
  }

  &__title {
    width: max-content;

    position: absolute;
    left: 50%;

    align-items: center;

    @include font(14, 20, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    transform: translateX(-50%);
  }

  &__items {
    --height: auto;
    height: var(--height);

    position: relative;
    --left: 0;
    left: var(--left);

    @include flex-container(row, left);

    background-color: white;

    transition: all 0.2s ease-in-out;

    &:nth-of-type(2n) {
      background-color: #e9e9e9;

      @include bigMobile {
        background-color: white;
      }
    }
  }

  &__body-description {
    max-width: 243px;
    width: 100%;

    @include flex-container(column, center);
    flex: 0 0 243px;

    border-right: 1px solid #d1d1d1;

    padding: 8px 16px;

    @include bigMobile {
      max-width: 152px;
      flex: 0 0 152px;

      border: none;
    }
  }

  &__description {
    white-space: initial;

    @include bigMobile {
      @include font(14, 20, 400);
      text-overflow: ellipsis;
      text-align: center;

      overflow: hidden;
    }
  }
}
</style>
 