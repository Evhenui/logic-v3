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
  