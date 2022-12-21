<template>
  <header class="header">
    <div class="header__wrapper">
      <AdditionalInfo class="header__additional"/>
      <MainInfo 
        class="header__main-info" 
        :class="{active : activeScroll}"
        @getPosition="getPosition" 
      />
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

const headerPosition = ref(0);
const activeScroll = ref(false);

function getPosition(position) {
  headerPosition.value = Math.round(position);
}

onMounted(()=>{
  window.addEventListener('scroll', () => {
    if(window.scrollY >= headerPosition.value) {
      activeScroll.value = true;
    } else {
      activeScroll.value = false;
    }
  });
})

</script>
  
<style lang="scss" scoped>
.header {
  background-color: white;
  &__main-info {
    width: 100%;
    &.active {
      position: fixed;
      top: 0;

      z-index: 501;
    }
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