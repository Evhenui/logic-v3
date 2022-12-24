export const useSliderCardStore = defineStore({
    id: 'sliderCardStore',
    state: () => {
      return {
        slider: {
          counter: 0,
          length:  0
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
      }
    },
    getters: {
      getCounter: (state) => state.slider,
      getLength: (state) => state.slider,
    },
  });
  