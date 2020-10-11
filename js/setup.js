'use strict';
(function () {
  // Импортируемые данные
  const generateWizards = window.data.generateWizards;
  const addWizards = window.wizard.add;

  const AMOUNT_WIZARDS = 4;

  const wizards = generateWizards(AMOUNT_WIZARDS); // Создаем массив волшебников
  addWizards(wizards); // Добавляем карточки волшебников

})();
