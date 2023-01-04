<template>
  <section
    ref="cardProduct"
    class="card-product"
    :class="[
      { active: scrollState },
      { 'active-mobile': scrollStateMobile },
      { 'active-pin': activePin },
    ]"
  >
    <div class="card-product__wrapper">
      <Navigation
        :state="state"
        :status="status"
        :stateScroll="scrollState"
        @getPin="getPin"
        class="card-product__navigation"
      />

      <section class="card-product__body">
        <div class="card-product__body-wrapper">
          <a href="#" class="card-product__image-wrapper">
            <img class="card-product__image" src="~~/public/img/comparison-card.png" alt="product name" />
          </a>
          <section class="card-product__description">
          <!--   <Rating class="card-product__rating" :state="state" /> -->

            <Availability
              class="card-product__availability"
              :status="status"
              :state="!state"
            ></Availability>
            <a href="#" class="card-product__subtitle">
              <slot name="nameProduct"></slot>
            </a>
          </section>
        </div>
        <section class="card-product__footer">
          <p class="card-product__code">
            Код:
            <slot name="code"></slot>
          </p>
          <div class="card-product__footer-navigation">
            <h1 class="card-product__price"><slot name="price"></slot> ₴</h1>
            <ButtonOrange :stateButton="state" :scrollState="scrollState"
              >Купить</ButtonOrange
            >
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script setup>
import Navigation from "./Navigation.vue";
import Rating from "./Rating.vue";
import ButtonOrange from "~~/components/comparison/UI/ButtonOrange.vue";
import Availability from "./Availability.vue";

const props = defineProps({
  scrollState: { type: Boolean, required: false, default: false },
  scrollStateMobile: { type: Boolean, required: false, default: false },
  mobileSize: { type: Number, required: false },
  status: { type: String, required: false },
  image: { type: String, required: true },
});

const emits = defineEmits(["getPin", "getCardHeight"]);

const cardProduct = ref(null);

const state = ref(false);
const activePin = ref(false);
const scrollDesktop = ref(false);
const scrollMobile = ref(false);

function changeSize(size) {
  state.value = window.innerWidth <= size ? true : false;
}

function getState() {
  if (state.value) {
    scrollMobile.value = true;
  } else {
    scrollDesktop.value = true;
  }
}

function getPin(status) {
  /* activePin.value = status;
  emits("getPin", cardProduct.value); */
}

function emitHeight() {
  emits("getCardHeight", cardProduct.value.offsetHeight);
}

onMounted(() => {
  getState();
  emitHeight();
  changeSize(props.mobileSize);

  window.addEventListener("resize", () => {
    changeSize(props.mobileSize);
    emitHeight();
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    changeSize(props.mobileSize);
  });
});
</script>
 
<style lang="scss" scoped>
.card-product {
  flex: 1 0 243px;

  background-color: white;

  transition: left 0.2s ease-in-out;

  @include bigMobile {
    flex: 0 0 152px;
  }

  &.active {
    .card-product__wrapper {
      padding: 8px 0 8px 0;
    }

    .card-product__image-wrapper {
      flex: 1 0 71px;

      margin: 0;
    }

    .card-product__rating {
      display: none;
    }

    .card-product__body-wrapper {
      @include flex-container(row, space-between, center);
      gap: 3px;
    }

    .card-product__body {
      padding: 0 8px;
    }

    .card-product__body-wrapper {
      margin-bottom: 16px;
    }

    .card-product__subtitle {
      @include font(12, 16, 400);

      padding: 0;
    }

    .card-product__footer {
      @include flex-container(row, space-between, center);

      padding: 0;

      @include bigMobile {
        display: block;
      }
    }

    .card-product__code {
      margin: 0;
    }

    .card-product__footer-navigation {
      @include flex-container(row, space-between, center);
    }

    .card-product__price {
      @include font(16, 22, 500);
    }
  }

  &.active-mobile {
    .card-product__navigation,
    .card-product__availability {
      display: none;
    }
    .card-product__wrapper {
      padding: 8px 0 8px 0;
    }

    .card-product__image-wrapper {
      flex: 1 0 59px;

      margin: 0;
    }

    .card-product__rating {
      display: none;
    }

    .card-product__body-wrapper {
      @include flex-container(row, space-between, center);
      gap: 3px;
    }

    .card-product__body {
      padding: 0 8px;
    }

    .card-product__body-wrapper {
      margin-bottom: 0;
    }

    .card-product__subtitle {
      @include font(12, 16, 400);

      padding: 0;

      text-overflow: ellipsis;
      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .card-product__footer {
      padding: 0;
    }

    .card-product__code {
      display: none;
    }

    .card-product__footer-navigation {
      @include flex-container(row, space-between, center);
    }

    .card-product__price {
      @include font(16, 22, 500);
    }
  }

  &.active-pin {
    position: sticky;
  }

  &__wrapper {
    padding: 8px 0 16px 0;

    transition: all 0.2s ease-in-out;

    @include bigMobile {
      padding: 8px 0;
    }
  }

  &__body {
    @include bigMobile {
      padding: 0 8px;
    }
  }

  &__body-wrapper {
    margin-bottom: 8px;

    @include bigMobile {
      transition: all 0.2s ease-in-out;
    }
  }

  &__image-wrapper {
    @include flex-container(row, center, center);

    margin-bottom: 8px;
  }

  &__image {
    width: 152px;

    @include bigMobile {
      width: 100px;
    }
  }

  &__description {
    @include bigMobile {
      @include flex-container(column, flex-start, left);

      gap: 8px;
    }
  }

  &__subtitle {
    display: block;

    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    word-break: break-all;
    color: #2b2b2b;

    padding: 0 16px;

    @include bigMobile {
      @include font(12, 16, 400);

      padding: 0;
    }
  }

  &__footer {
    padding: 0 16px;

    @include bigMobile {
      padding: 0;
    }
  }

  &__code {
    @include font(12, 16, 400);
    color: #8a8a8a;
    letter-spacing: 0.02em;

    margin-bottom: 16px;

    transition: all 0.2s ease-in-out;

    @include bigMobile {
      margin-bottom: 8px;
    }
  }

  &__footer-navigation {
    @include flex-container(column, center, flex-start);
    gap: 16px;

    transition: all 0.2s ease-in-out;

    @include bigMobile {
      @include flex-container(row, space-between, center);
    }
  }

  &__price {
    @include font(25, 35, 700);
    color: #F36C21;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @include bigMobile {
      @include font(16, 22, 400);
    }
  }
}
</style>
 