export const useSliderCardStore = defineStore({
    id: 'sliderCardStore',
    state: () => {
      return {
        slider: {
          counter: 0,
          length: 0
        },
        sliderNewProduct: {
          counter: 0,
          length: 0,
          amountItems: 4,
          amountItemsMobile: 2,
        },
        sliderModal: {
          activeModal: false
        }
      };
    },
    actions: {
      changeCounter(operand) {
        if(operand === 'remove') {
          this.slider.counter--;
        } else if (operand === 'add') {
          this.slider.counter++;
        } else if(operand === 'null') {
          this.slider.counter = 0;
        }
      },
      activeCounter(index) {
        this.slider.counter = index;
      },
      calcSliderLength(items) {
        this.slider.length =  items.length - 1;
      },
      changeCounterNewProduct(operand) {
        if(operand === 'remove') {
          this.sliderNewProduct.counter--;
        } else if (operand === 'add') {
          this.sliderNewProduct.counter++;
        } else if(operand === 'null') {
          this.sliderNewProduct.counter = 0;
        }
      },
      activeCounterNewProduct(index) {
        this.sliderNewProduct.counter = index;
      },
      calcSliderLengthNewProduct(items) {
        this.sliderNewProduct.length =  items.length;
      },
      activeSliderModal() {
        this.sliderModal.activeModal = !this.sliderModal.activeModal;
        console.log(this.sliderModal.activeModal)
      }
    },
    getters: {
      getCounter: (state) => state.slider,
      getLength: (state) => state.slider,
      getSliderNewProduct: (state) => state.sliderNewProduct,
      getSliderModal: (state) => state.sliderModal,
    },
  });
  