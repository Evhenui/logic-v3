<template>
  <nav class="card-navigation">
    <Availability 
      :status="status" 
      class="card-navigation__availability"
    />
    <NavigationButtons
      v-if="!stateScroll"
     />
  </nav>
</template>

<script setup>
import Availability from "./Availability.vue";
import NavigationButtons from "./NavigationButtons.vue";

defineProps({
  status: { type: String, required: false},
  stateScroll: { type: Boolean, required: false},
});

const emits = defineEmits(["getPin"]);

/* function getPin(status) {
  emits("getPin", status);
} */
</script>
 
<style lang="scss" scoped>
.card-navigation {
   @include flex-container(row, space-between, center);

   padding: 0 8px;
   margin-bottom: 8px;

   @include bigMobile { 
      justify-content: flex-end;
      margin: 0;

      .card-navigation__availability {
        display: none;
      }
   }
}
</style>
 