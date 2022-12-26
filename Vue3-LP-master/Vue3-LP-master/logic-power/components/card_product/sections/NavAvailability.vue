<template>
  <nav class="availability">
    <ButtonStatus
      :status="status.buttonStatus.inStock"
      :changeView="changeView"
      :inactive="inactive"
    />
    <div class="availability__suggestions">
      <Delivery :inactive="inactive" />
      <Credit :inactive="inactive" />
    </div>
  </nav>
</template>

<script setup>
import Credit from "../UI/Credit.vue";
import Delivery from "../UI/Delivery.vue";
import ButtonStatus from "../UI/ButtonStatus.vue";

defineProps({
  status: { type: Boolean, status: true },
  changeView: { type: Boolean, status: false },
  inactive: { type: Boolean, status: true },
});
</script>

<style lang="scss" scoped>
.availability {
  @include flex-container(row, space-between, center);

  gap: 28px;

  @include bigMobile {
    gap: 0;
  }

  &__suggestions {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      gap: 8px;
    }
  }
}
</style>
    