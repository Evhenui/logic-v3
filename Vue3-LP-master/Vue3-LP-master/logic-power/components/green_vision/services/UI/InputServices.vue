<template>
  <div
    class="input"
    :class="[{ phone: type === 'phone' }, [{ blur: activeFocus && inputValue }]]"
  >
    <input
      class="input__data"
      :type="type"
      required
      @blur="activeFocus = true"
      @focus="activeFocus = false"
      v-model="inputValue"
    />
    <div class="input__number-country">
      <div class="input__selected">
        <div class="input__flag">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="16" rx="2" fill="#F6A500"/>
            <path d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z" fill="#4490BB"/>
          </svg>
        </div>
        <span class="input__phone">+380</span>
        <div class="input__arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#0E0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="input__list"></div>
    </div>
    <label class="input__label">{{ placeholder }}</label>
  </div>
  
</template>

<script setup>
const activeFocus = ref(false);
const inputValue = ref('');

defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.input {
  position: relative;

  &.phone {

    .input__data {
      padding: 16px 16px 16px 117px;
    }

    .input__number-country {
      display: block;

      position: absolute;
      top: 19px;
      left: 16px;

      cursor: pointer;
    }

    .input__label {
      left: 117px;
    }
  }

  &__data {
    max-width: 363px;
    width: 100%;

    display: block;

    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.87);

    border: 1px solid #e3e5e6;
    border-radius: 8px;

    padding: 16px;

    &:hover {
      border-color: rgba(0, 0, 0, 0.87);
    }

    &:focus {
      border: 1px solid #4724fb;
      color: rgba(0, 0, 0, 0.87);
    }

    &:valid {
      border-color: #4724fb;
      color: rgba(0, 0, 0, 0.87);
    }
  }

  &__number-country {
    display: none;
  }

  &__selected {
    @include flex-container(row, flex-start, center);

    gap: 4px;
  }

  &__flag {
    font-size: 0;
  }

  &__phone {
    @include font(16, 16, 400);
    color: #0E0F0F;
  }

  &__arrow {
    font-size: 0;
  }

  &__data:focus {
    outline: none;
  }

  &__label {
    position: absolute;
    left: 16px;
    top: 16px;

    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.6);

    transition: 0.2s ease all;
    pointer-events: none;
  }

  &__data:focus ~ &__label,
  &__data:valid ~ &__label {
    left: 5px;
    top: -9px;

    @include font(12, 16, 400);
    color: #4724fb;

    background-color: white;

    padding: 0 4px;
  }

  &.blur {
    .input__data {
      border-color: rgba(0, 0, 0, 0.87);
    }

    .input__label {
      color: rgba(0, 0, 0, 0.87);
    }
  }

  &.error {

    .input__data {
      color: #fb2424;

      border-color: #fb2424;
    }

    .input__label {
      color: #fb2424;
    }
    
  }
}
</style>
  