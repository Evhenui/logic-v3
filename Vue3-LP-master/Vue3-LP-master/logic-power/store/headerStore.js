export const useHeaderlStore = defineStore({
    id: 'headerlStore',
    state: () => {
      return {
        language: {
          active: false
        },
        menuItems: ['Блог', 'О нас', 'Сотрудничество', 'Контакты',],
        inputSerach: {
          value: ''
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
        modalMenu: {
          active: false,
          aboutCompany: ['Оплата и Доставка', 'История компании', 'Сотрудничесвто'],
          services: ['Инструкции', 'Видео-материалы']
        },
        modalCatalog: {
          active: false,
          menu: [
            { image: 'percent-catalog.svg', title: 'Акции' },
            { image: 'ups-catalog.svg', title: 'Комплекты для резервного питания' },
            { image: 'ups-one-catalog.svg', title: 'Источники бесперебойного питания' },
            { image: 'accumulators-agm-catalog.svg', title: 'Аккумуляторы AGM' },
            { image: 'li-ion-catalog.svg', title: 'Литивые аккумуляторы' },
            { image: 'stabilizer-catalog.svg', title: 'Стабилизаторы напряжения' },
            { image: 'accumulators-silver-catalog.svg', title: 'Аккумуляторы SILVER' },
            { image: 'accumulators-catalog.svg', title: 'Аккумуляторы' },
            { image: 'electric-transport-catalog.svg', title: 'Электротранспорт' },
            { image: 'accumulators-car-catalog.svg', title: 'Автомобильные аккумуляторы' },
            { image: 'peripherals-catalog.svg', title: 'Компьютерная переферия' },
            { image: 'pc-accessories-catalog.svg', title: 'Комплектующие для ПК' },
            { image: 'network-filters-catalog.svg', title: 'Сетевые фильтры и удлинители' },
            { image: 'chargers-catalog.svg', title: 'Зарядные устройства, кабельки и адаптеры питания' },
            { image: 'cable-production-catalog.svg', title: 'Кабельная продукция' },
            { image: 'appliances-catalog.svg', title: 'Бытовая техника' },
            { image: 'network-hardware-catalog.svg', title: 'Сетевое оборудование' },
            { image: 'fire-extinguishers-catalog.svg', title: 'Огнетушители' },
            { image: 'discounted-catalog.svg', title: 'Уцененный товар' },
            { image: 'product-discontinued-catalog.svg', title: 'Товары снятые с производства' },
          ],
          submenu: [
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Корпуса', 'Блоки питания ATX', 'Вентиляторы', 'Кабели питания'], submenu: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
          ],
          submenuDeep: [
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
            { catogory: ['Серия “Вторая”', 'Серия “Шестая”', 'Серия “Slim”', 'Серия “Perfect”', 'Серия “Elite”'] },
          ]
        }
      };
    },
    actions: {
      changeLang(element) {
        this.language.active = element.classList.contains('ua') ? true: false;
      },
    },
    getters: {
      getLanguage: (state) => state.language,
      getMenuItems: (state) => state.menuItems,
      getResult: (state) => state.result,
      getInputSerach: (state) => state.inputSerach,
      getModalMenu: (state) => state.modalMenu,
      getModalCatalog: (state) => state.modalCatalog,
    },
  });
  