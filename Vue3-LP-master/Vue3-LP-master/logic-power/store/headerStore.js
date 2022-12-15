export const useHeaderlStore = defineStore({
    id: 'headerlStore',
    state: () => {
      return {
        menuItems: ['Блог', 'О нас', 'Сотрудничество', 'Контакты',],
        inputSerach: {
          value: '',
          focusState: false
        },
        result: {
          categoryMenu: ['Аккумуляторы', 'Стабилизаторы', 'Кабельная продукция', 'Электрооборудование'],
          resultItems: [
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
          ],
          popularItems: [
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
            {itemName: 'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)', code: 'Код: 1324', price: '20 954 ₴'},
          ]
        },
        language:{
          uk: false,
          ru: true
        }
      };
    },
    actions: {
    },
    getters: {
      getMenuItems: (state) => state.menuItems,
      getResult: (state) => state.result,
      getValueSearch: (state) => state.valueSearch,
      getLanguage: (state) => state.language,
    },
  });
  