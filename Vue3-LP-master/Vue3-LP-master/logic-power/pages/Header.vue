<template>
  <header class="header">
    <div class="header__wrapper">
      <AdditionalInfo class="header__additional" />
      <MainInfo />
      <ModalMenu />
    </div>
  </header>
  <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
      <div>Lorem ipsum dolor,<br>
   sit amet consectetur adipisicing<br> 
   elit. Expedita<br>
    nihil numquam optio fugit repellat molestias<br>
     soluta quasi ipsa molestiae sapiente dignissimos<br>
      velit, laudantium, sit similique sequi maxime! Magnam, voluptatum a!
      </div>
</template>

<script setup>
import AdditionalInfo from "~~/components/header/sections/AdditionalInfo.vue";
import MainInfo from "~~/components/header/sections/MainInfo.vue";
import ModalMenu from "~~/components/header/sections/ModalMenu.vue";
import ModalCatalog from "~~/components/header/sections/ModalCatalog.vue";

</script>
  
<style lang="scss" scoped>
.header {
  width: 100%;

  position: fixed;
  top: 0;

  z-index: 501;

  background-color: white;

  &__wrapper {
  }

  &__additional {
    @include bigMobile {
      display: none;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>