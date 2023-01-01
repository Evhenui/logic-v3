<template>
  <div class="card-product" ref="productWrapper">
    <div class="card-product__w">
      <div class="card-product__container">
        <div class="card-title">
          <h1 class="card-title__text">
            <span class="card-title__text-bold">{{ card.name.ru }}</span>
            <span class="card-title__text-normal"></span> 1.4кВт АКБ mGel 100 Ah
          </h1>
          <div class="card-title__code">
            <Rating 
              :reviews="'12'" 
              :points="'3'"
              class="card-product__rating mobile"
            />
            <div class="card-title__code-wrapper">
              <span class="card-title__code-text">Код:</span>
              <span class="card-title__code-number">{{ card.code }}</span>
            </div>
          </div>
        </div>
        <Rating 
          :reviews="'12'" 
          :points="'3'"
          class="card-product__rating"
        />
      </div>
    </div>

    <div class="card-product__navigation" ref="navigation">
      <CardProductNav
        @navChange="calcCurrNav"
        :CurrentNav="currentNav"
        ref="productNavList"
      />
    </div>

    <div class="card-product__w">
      <div class="card-product__container" ref="aboutSection">
        <CardAboutProduct
          :class="{ active: currentNav === ProductNav }"
          :items="sliderValues"
        />
      </div>
    </div>

    <div class="card-product__w">
      <div class="card-product__container">
        <div class="spec" ref="spec">
          <div class="spec__w">
            
            <ProductSlider 
              :title="'С этим товаром покупают'" 
              class="slider"
              :class="{ active: currentNav === ProductNav }"
              :cards="cardItems"
            />

            <CardProductDescription
            :class="[{active: currentNav === ProductNav}, {active: currentNav === 2}]"
            >
              <h3 class="spec__title">
                Описание
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductDescription>

            <CardProductCharacteristics
              class="characteristics"
              :class="[{active: currentNav === ProductNav}, {active: currentNav === 2}]"
              id="characteristics"
            >
              <h3 class="spec__title">
                Характеристики
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductCharacteristics>

            <CardProductInstruction
              :class="[{active: currentNav === ProductNav}, {active: currentNav === 5}]"
            >
              <h3 class="spec__title">
                Загрузки
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductInstruction>

            <CardProductVideo
              :class="[{active: currentNav === ProductNav}, {active: currentNav === 4}]"
            >
              <h3 class="spec__title">
                Видео
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductVideo>

            <ProductSlider 
              :title="'Просмотренные товары'" 
              :cards="cardItems"
              class="slider active"
            />
          </div>
          <div class="aside" :style="{ '--top-aside': navHeight + 'px' }" ref="aside">
            <CardProductAside :code="card.code" :navHeight="navHeight" />
          </div>
        
        </div>
        <div class="mobile-price" v-if="isMobile && isVisibility">
          <div class="mobile-price__money-sale">
            <p class="mobile-price__money-sale-old">3500 грн</p>
            <p class="mobile-price__money-sale-new">3113 грн</p>
          </div>
      <!--     <div class="mobile-price__money-regular">3113 грн</div> -->
          <ButtonBuy :cardMobile="true" />
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup>
import CardAboutProduct from '~~/components/about_product/CardAboutProduct.vue';
import CardProductAside from '~~/components/about_product/CardProductAside.vue';
import CardProductCharacteristics from '~~/components/about_product/CardProductCharacteristics.vue';
import CardProductDescription from '~~/components/about_product/CardProductDescription.vue';
import CardProductInstruction from '~~/components/about_product/CardProductInstruction.vue';
import CardProductNav from '~~/components/about_product/CardProductNav.vue';
import CardProductVideo from '~~/components/about_product/CardProductVideo.vue';
import Rating from '~~/components/common/sections/Rating.vue';
import ButtonBuy from '~~/components/common/buttons/ButtonBuy.vue';
import ProductSlider from '~~/components/card_slider/ProductSlider.vue';
import { useHeaderlStore } from "~~/store/headerStore";

const header = useHeaderlStore();
const headerSize = header.getHeight;

const productWrapper = ref(null);
const aboutSection = ref(null);
const productNavList = ref(null);
const navigation = ref(null);
const aside = ref(null);
const spec = ref(null);

const currentNav = ref(1);
const isSale = ref(true);
const isMobile = ref(false);
const isVisibility = ref(false);
const navHeight = ref(0);
const ProductNav = ref(1);
const heightHeader = ref(0);
const sliderSize = ref(0);
const asideWidth = ref(0);
const positionAside = ref(0);

const card = {
    code: "0000001",
    slug: {
      ru: "akkumulyator",
      uk: "akumulyator",
    },
    name: {
      ru: "Аккумулятор",
      uk: "Акумулятор",
    },
    description: {
      ru: "<p>Электрический аккумулятор</p>",
      uk: "<p>Електричний акумулятор</p>",
    },
    status: "inStock",
    labels: ["novelty"],
    prices: [
      {
        type: "current",
        money: {
          amount: 33.77,
          currency: "UAH",
        },
      },
    ],
    manufacturer: {
      slug: "logicpower",
      name: "LogicPower",
    },
    specifications: [
      {
        id: 1,
        name: {
          ru: "Тип корпуса",
          uk: "Тип корпусу",
        },
        option: {
          id: 2,
          value: {
            ru: "цилиндрический",
            uk: "циліндричний",
          },
        },
      },
    ],
    categories: [
      {
        name: {
          ru: "Сетевое оборудование",
          uk: "Мережеве обладнання",
        },
      },
    ],
    images: [
      {
        locales: ["ru"],
        url: "https://example.com/image.jpg",
        thumbnails: [
          {
            url: "https://example.com/image_tile.jpg",
            type: "tile",
          },
        ],
      },
    ],
    attachments: [
      {
        group: "Инструкция",
        files: [
          {
            locales: ["ru"],
            name: {
              ru: "Инструкция пользователя",
              uk: "Інструкція користувача",
            },
            url: "https://logicfox.info/manuals/LP/UPS/2415/2415_2416_4324_4325_(LP_650_850VA-PS-6PS)_manual_ua.pdf",
            meta: {
              type: "application/pdf",
              size: 1846538,
            },
          },
        ],
      },
    ],
};

const cardItems = [
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: true
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
  {
  suggestions: ['novelty'],
  image: 'product-card',
  rating: {
    points: '4',
    reviews: '125'
  },
  statusValues: {
    buttonStatus: 'in-stock',
    delivery: true,
    credit: true,
  },
  nameProduct: 'Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)',
  code: '56983',
  prices: {
    button: 'buy',
    price: {
      discount: '',
      total: '500 ₴'
    }
  },
  inactive: false
  },
]

const sliderValues = {
  itemsImage: [
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  { image: "slide-item" },
  ],
  suggestions: ['top-sales'],
  price: {
    price: "2 625 ₴",
    discount: "3 500 ₴",
  }
}

function calcCurrNav(idx) {
  currentNav.value = idx;
}

function calcNavHeight() {
  navHeight.value = navigation.value.getBoundingClientRect().height;
}

function calcBlockPriceVisibility() {
  const blockPriceRect = aboutSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight

  if (blockPriceRect.bottom <= windowHeight &&
      blockPriceRect.top > 86
    ) {
      isVisibility.value = false;
    } else {
      isVisibility.value = true;
    } 
}

function calsIsMobile() {
  const mobWidth = getComputedStyle(productWrapper.value).getPropertyValue("--mobile-width");
  isMobile.value = window.innerWidth <= parseInt(mobWidth);
}

function onResize() {
  calsIsMobile();
  calcBlockPriceVisibility();
  calcNavHeight();
  getWidthSlider();
  getTopAside();
}

function getWidthSlider() {
  const gap = parseInt(getComputedStyle(spec.value, null).getPropertyValue("gap"));
  const mainPadding = parseInt(getComputedStyle(productWrapper.value, null).getPropertyValue("--local-pad")) * 2;
  const widthAside = aside.value.offsetWidth;
  const space = widthAside + mainPadding + gap;

  if(window.innerWidth < 1470 ) {
    sliderSize.value = window.innerWidth - space + 'px';
  } else {
    sliderSize.value = '1076px';
  }
}

function getTopAside() {
  positionAside.value = 
  navigation.value.getBoundingClientRect().top + navigation.value.getBoundingClientRect().height + 'px';
}

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", calcBlockPriceVisibility);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", calcBlockPriceVisibility);
});

</script>

<style lang="scss" scoped>
.card-product {
  --mobile-width: #{$mobile-big-width};
  --local-pad: 16px;

  position: relative;

  @include flex-container(column, flex-start);
  align-items: center;
  gap: 16px;

  padding-bottom: 80px;

  &__navigation {
    width: 100%;
    position: sticky;
    top: 136px;
    z-index: 100;
    background-color: #F7F9FA;

    @include mobile {
      top: 56px;
    }
  }

  &__rating {
    @include mobile {
      display: none;
    }

    &.mobile {
      display: none;

      @include mobile {
        display: flex;
      }
    }
  }

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    align-items: center;

    padding: 0 16px;
  }

  &__container {
    @extend %width-main;

    @include flex-container(column, flex-start);
    gap: 16px;
  }
}

.card-title {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  flex-wrap: wrap;
  gap: 16px;

  padding-top: 16px;

  &__text {
    @include font(36, 42);

    @include bigMobile {
      @include font(24, 28);
    }
  }

  &__text-bold {
    font-weight: 500;

    @include bigMobile {
      display: block;
    }
  }

  &__code {
    @include mobile {
      width: 100%;

      @include flex-container(row, space-between, center);
    }
  }

  &__code-wrapper {
    @include flex-container(row, center, center);
    gap: 8px;

    @include font(36, 47, 600);

    @include bigMobile {
      @include font(24, 28);

      gap: 4px;
    }
  }

  &__code-text {
    color: #2B2B2B;

    @include mobile {
      @include font(16, 19, 400);
      color: #8A8A8A;
    }
  }

  &__code-number {
    @include mobile {
      @include font(16, 19, 400);
    }
  }
}

.characteristics {
  scroll-margin-top: 200px;
}

.spec {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    gap: 16px;
  }

  &__title {
    @include font(18, 22, 700);

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__article {
    font-weight: 400;
  }
}

.mobile-price {
  width: 100%;

  @include flex-container(row, space-between, center);
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 16px 8px;

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include font;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include font(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include font(24, 28, 500);
  }
}

.slider {
  max-width: v-bind(sliderSize);

  display: none;

  &.active {
    display: block;
  }

  @include bigMobile {
    max-width: 100%;
  }
}

.aside {
  /* --top-aside: 0; */
  position: sticky;
 /*  top: calc(16px + var(--height-header) + var(--top-aside)); */
 top: v-bind(positionAside);

  @include bigMobile {
    display: none;
  }
}
</style>
