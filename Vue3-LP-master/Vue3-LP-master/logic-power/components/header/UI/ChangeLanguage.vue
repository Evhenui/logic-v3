<template>
  <div class="language">
    <div 
        class="language__wrapper-uk"
        :class="{active: language.uk}"
        @click="language.uk = !language.uk"
    >
      <a href="#" class="language__uk">Укр</a>
    </div>
    <div class="language__wrapper-ru">
      <a href="#" class="language__ru">Рус</a>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHeaderlStore } from "~~/store/headerStore";

const header = useHeaderlStore();
const language = header.getLanguage;

</script>

<style lang="scss" scoped>
.language {
    @include flex-container(row, flex-start, center);

    &__wrapper-uk {
        border-right: 1px solid white;

        padding: 4px 8px 4px 0;

        &.active .language__uk {
            color: #F36C21;
        }
    }

    &__wrapper-ru {
        padding: 4px 0 4px 8px;

        &.active .language__ru {
            color: #F36C21;
        }
    }

    &__uk,
    &__ru {
        @include font(12, 14, 400);
        color: white;
    }
}

</style>
      