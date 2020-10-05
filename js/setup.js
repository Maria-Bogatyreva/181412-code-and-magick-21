'use strict';
const userDialog = document.querySelector('.setup'); //Окно настроек пользователя
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden'); //Блок "Похожие персонажи"

const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
const amountWizards = 4;

//Функция для получения случайного элемента
const getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

//Генерируем массив объектов волшебников
const generateWizards = function (amount) {

  const wizardsList = [];

  for (let i = 0; i < amount; i++ ) {
    wizardsList[i] = {
      name: getRandomElement(names) + ' ' + getRandomElement(surnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    }
  }
  return wizardsList;
};

const wizards = generateWizards(amountWizards);

//Клонирование волшебника
const getWizard = function(wizard) {
  const similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

//Добавление карточки волшебника в список
const addWizards = function () {
  const similarListElement = document.querySelector('.setup-similar-list');

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 4; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
similarListElement.appendChild(fragment);
}

addWizards();




