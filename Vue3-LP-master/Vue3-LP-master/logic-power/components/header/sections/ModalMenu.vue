<template>
  <section class="main-modal">
    <div class="main-modal__mask">
      <div class="main-modal__wrapper">
        <div class="main-modal__container">
          <header class="main-modal__header">
                Header
          </header>
          <main class="main-modal__main">
           Main
          </main>
          <footer class="main-modal__footer">
        Footer
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main-modal {
    transition: all .3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    &.active {
      visibility: visible;
      opacity: 1;
      z-index: 5;
    }
  
    &__mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
      display: table;
      transition: all 0.3s ease;
    }
  
    &__wrapper {
      display: table-cell;
      vertical-align: middle;
      transition: all 0.3s ease;
      padding-top: 96px;
    }

    &__wrapper.active &__container {
      position: relative;
      z-index: -1;
      filter: blur(10px);
    }
  
    &__container {
      box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
      max-width: 460px;
      width: 100%;
      background-color: #F5F5F5;
    }
  
    &__header-wrapper {
      padding: 0 4px 0 60px;

    }  
}
</style>
