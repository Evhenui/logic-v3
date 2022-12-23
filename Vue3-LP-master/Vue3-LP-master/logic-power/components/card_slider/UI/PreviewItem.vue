<template>
  <div class="preview-slide">
    <div class="preview-slide__image-wrapper">
      <img :src="`/_nuxt/public/img/${img}.png`" :alt="img" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String, required: false },
});
</script>

<style lang="scss" scoped>
.preview-slide {
  width: 65px;
  height: 65px;

  border-radius: 8px;
  border: 1px solid #c4c4c4;

  cursor: pointer;

  &.active {
    border-color: #f36c21;
  }
}
</style>