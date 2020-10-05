'use strict';
const AMOUNT_WIZARDS = 4;
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//  Функция для показа окна
const showUserDialog = function () {
  const userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden'); // Блок "Похожие персонажи"
};

//  Функция для получения случайного элемента
const getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

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

//  Клонирование волшебника
const getWizard = function (wizard) {
  const similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

//  Добавление карточки волшебника в список
const addWizards = function (wizards) {
  const similarListElement = document.querySelector('.setup-similar-list');
  const fragment = document.createDocumentFragment();

  wizards.forEach(function (element) {
    fragment.appendChild(getWizard(element));
  });

  similarListElement.appendChild(fragment);
};

const wizards = generateWizards(AMOUNT_WIZARDS); // Создаем массив волшебников
showUserDialog(); // Показываем окно
addWizards(wizards); // Добавляем карточки волшебников
