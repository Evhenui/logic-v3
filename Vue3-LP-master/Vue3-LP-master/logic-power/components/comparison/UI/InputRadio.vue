<template>
  <section class="selecet">
    <input
      class="selecet__input"
      type="radio"
      name="select-input"
      :id="nameInput"
      :value="valueInput"
    />
    <label class="selecet__label" :for="nameInput">
      <slot></slot>
    </label>
  </section>
</template>

<script setup>
defineProps({
  nameInput: { type: String, required: true },
  valueInput: { type: String, required: true },
});
</script>
 
<style lang="scss" scoped>
.selecet {
  &__input {
    position: absolute;
    z-index: -100;

    opacity: 0;
  }

  &__label {
    display: inline-flex;

    position: relative;

    @include flex-container(row, left, center);
    gap: 16px;

    @include font(16, 24, 400);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    user-select: none;

    &::before {
      content: "";

      display: inline-block;

      width: 24px;
      height: 24px;

      flex-shrink: 0;
      flex-grow: 0;

      border: 1px solid #cdcfd0;
      border-radius: 50%;

      transition: all 0.1s ease-in-out;
    }

    &::after {
      content: "";

      width: 8px;
      height: 0;

      position: absolute;
      @include setAbs(50%, 8px, auto, auto);

      border-radius: 50%;

      background-color: white;

      transition: all 0.1s ease-in-out;
      transform: translateY(-50%);
    }
  }

  &__input:not(:disabled):not(:checked) + &__label:hover::before {
    border-color: #e05507;
  }

  &__input:checked + &__label::before {
    border-color: #f36c21;
    background-color: #f36c21;
  }

  &__input:checked + &__label::after {
    height: 8px;
  }

  &__input:disabled + &__label::before {
    background-color: #e9ecef;
  }
}
</style>
 