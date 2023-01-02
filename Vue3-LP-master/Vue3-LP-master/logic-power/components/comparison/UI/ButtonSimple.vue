<template>
    <button class="button-orange">
       <span class="button-orange__title">
          <slot></slot>
       </span>
    </button>
 </template>

 <style lang="scss" scoped>
 .button-orange {
   @include flex-container(row, center, center);
   
    gap: 10px;
 
    border-radius: 6px;
    background-color: #F36C21;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 
    padding: 8px 32px;
 
    &:hover {
       background-color: #FF5B00;
    }
 
    &:active {
       background-color: #AC450B;
    }
 
    &:disabled {
       background-color: #8A8A8A;
    }
 
    &__title {
       @include font(18, 24, 400);
       color: white;
       letter-spacing: 0.02em;
    }
 }
 </style>
  