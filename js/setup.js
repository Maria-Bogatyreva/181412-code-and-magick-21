'use strict';
const AMOUNT_WIZARDS = 4;
const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const userDialog = document.querySelector('.setup'); // Окно настроек пользователя
/*
//  Функция для показа окна
const showUserDialog = function () {
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden'); // Блок "Похожие персонажи"
};
*/

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
// showUserDialog(); // Показываем окно
addWizards(wizards); // Добавляем карточки волшебников


//  9. Учебный проект: одеть Надежду

const setupOpen = document.querySelector('.setup-open');
const setupClose = userDialog.querySelector('.setup-close');
const inputName = userDialog.querySelector('.setup-user-name');

// Функция для ОТКРЫТИЯ окна
const openPopup = function () {
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');

  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupCloseEnterPress);

  document.addEventListener('keydown', onPopupEscPress);
  inputName.addEventListener('keydown', onInputNameEscPress);

};
// Функция для ЗАКРЫТИЯ окна
const closePopup = function () {
  userDialog.classList.add('hidden');

  setupClose.removeEventListener('click', onSetupCloseClick);
  setupClose.removeEventListener('keydown', onSetupCloseEnterPress);

  document.removeEventListener('keydown', onPopupEscPress);
  inputName.removeEventListener('keydown', onInputNameEscPress);
};

const onSetupOpenClick = function () {
  openPopup();
};
const onSetupOpenEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
};


const onPopupEscPress = function (evt) { // Обработчик: Закрытие по Esc
  if (evt.key === "Escape") {
    evt.preventDefault();
    closePopup();
  }
};
const onSetupCloseEnterPress = function (evt) { // Обработчик: закрытие по Enter на Х
  if (evt.key === 'Enter') {
    closePopup();
  }
};
const onSetupCloseClick = function () { // Обработчик: закрытие по клику на Х
  closePopup();
};


const onInputNameEscPress = function (evt) {
  if (evt.key === "Escape") {
    evt.stopPropagation();
  }
};


//  Открытие по КЛИКУ на аватарке
setupOpen.addEventListener('click', onSetupOpenClick);

//  Открытие по Enter на аватарке
setupOpen.addEventListener('keydown', onSetupOpenEnterPress);


//  ВАЛИДАЦИЯ ФОРМЫ
const onInputNameInvalid = function () {
  if (inputName.validity.tooShort) {
    inputName.setCustomValidity('Не менее 2х символов!');
  } else if (inputName.validity.tooLong) {
    inputName.setCustomValidity('Не более 25 символов!');
  } else if (inputName.validity.valueMissing) {
    inputName.setCustomValidity('Введи хоть что-нибудь!');
  } else {
    inputName.setCustomValidity('');
  }
};

inputName.addEventListener('invalid', onInputNameInvalid);

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const onInputNameInput = function () {
  let valueLength = inputName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    inputName.setCustomValidity('');
  }
  inputName.reportValidity();
};

inputName.addEventListener('input', onInputNameInput);

//  Изменение цвета элементов персонажа по нажатию
const primerWizard = document.querySelector('.setup-wizard');
const WizardEyes = primerWizard.querySelector('.wizard-eyes');
const WizardCoat = primerWizard.querySelector('.wizard-coat');
const WizardFireball = userDialog.querySelector('.setup-fireball-wrap');

const inputEyesColor = document.querySelector('input[name="eyes-color"]');
const inputCoatColor = document.querySelector('input[name="coat-color"]');
const inputFireballColor = document.querySelector('input[name="fireball-color"]');

const onInputClick = function (element, inputItem, colors) {
  return function () {
    let color = getRandomElement(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    inputItem.value = color;
  };
};

WizardEyes.addEventListener('click', onInputClick(WizardEyes, inputEyesColor, eyesColors));
WizardCoat.addEventListener('click', onInputClick(WizardCoat, inputCoatColor, coatColors));
WizardFireball.addEventListener('click', onInputClick(WizardFireball, inputFireballColor, fireballColors));

