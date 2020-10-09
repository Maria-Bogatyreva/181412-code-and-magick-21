'use strict';
(function () {
  //  Импортируемые данные
  const getRandomElement = window.util.getRandomElement;

  const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  //  Генерируем массив объектов волшебников
  const generateWizards = function (amount) {

    const wizardsList = [];

    for (let i = 0; i < amount; i++) {
      wizardsList[i] = {
        name: getRandomElement(names) + ' ' + getRandomElement(surnames),
        coatColor: getRandomElement(coatColors),
        eyesColor: getRandomElement(eyesColors)
      };
    }
    return wizardsList;
  };

  window.data = {
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballColors: fireballColors,
    generateWizards: generateWizards
  }
})();
