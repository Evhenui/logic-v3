<template>
  <div class="switch">
    <label class="switch__wrapper">
      <input
        :value="modelValue"
        @change="changeSwitch"
        class="switch__input"
        type="checkbox"
      />
      <span class="switch__slider"></span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, required: true },
});

const emits = defineEmits(["input", "update:modelValue"]);

function changeSwitch(event) {
  emits("update:modelValue", event.target.checked);
}
</script>
  
<style lang="scss" scoped>
.switch {
  font-size: 0;

  &__wrapper {
    width: 56px;
    height: 32px;

    position: relative;

    display: inline-block;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &__wrapper &__input {
    display: none;
  }

  &__slider {

    position: absolute;
    @include setAbs(0, 0, 0, 0);

    border-radius: 32px;

    background-color: #E3E5E6;

    transition: all 0.2s ease-in-out;

    cursor: pointer;

    &::before {
      content: "";

      width: 28px;
      height: 28px;

      position: absolute;
      @include setAbs(auto, 2px, auto, 2px);

      border-radius: 50%;

      background-color: white;

      transition: all 0.2s ease-in-out;
    }
  }

  &__input:checked + &__slider {
    background-color: #F36C21;
  }

  &__input:checked + &__slider:active {
    background-color: #E05507;
  }

  &__input + &__slider:active {
    background-color: #E05507;
  }

  &__input:checked + &__slider:before {
    transform: translateX(24px);
  }
}
</style>
  