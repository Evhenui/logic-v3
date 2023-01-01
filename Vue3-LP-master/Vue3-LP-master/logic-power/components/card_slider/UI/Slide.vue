<template>
  <div 
    class="slide"
    :class="[
      {main: mainSlide},
      {preview: !mainSlide},
      {modal: modal}
    ]"
  >
    <div class="slide__image-wrapper">
      <img 
        class="slide__image" 
        :src="`/img/${img}.png`" 
        :alt="img"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String, required: false },
  mainSlide: { type: Boolean, required: false },
  modal:{ type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
.slide {
  width: 65px;
  height: 65px;

  border-radius: 8px;
  border: 1px solid #c4c4c4;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &.main {
    width: 491px;
    height: 491px;

    border: none;
    border-radius: 0;

    user-select: none;

    &.modal {
      width: 584px;
      height: 584px;

      @include bigMobile {
        width: 311px;
        height: 311px;
      }
    }

    @include mobile {
      width: 272px;
      height: 272px;
    }
  }

  &.preview {
    cursor: pointer;

    &.modal {
      padding: 2px;
    }
  }

  @include mobile {
    width: 41px;
    height: 41px;
  }

  &__image {
    margin: auto;
    
    pointer-events: none;
    user-select: none;
  }

  &.active {
    border-color: #f36c21;
  }
}
</style>