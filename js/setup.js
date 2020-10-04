'use strict';
var userDialog = document.querySelector('.setup'); //Окно настроек пользователя
//userDialog.classList.remove('hidden');

//Код "Похожие персонажи"

document.querySelector('.setup-similar').classList.remove('hidden'); //Блок "Похожие персонажи"

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const amountWizards = 4;

//Функция для получения случайного элемента
var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

//Генерируем массив объектов волшебников
var generateWizards = function (amount) {

  var wizardsList = [];

  for (var i = 0; i < amount; i++ ) {
    wizardsList[i] = {
      name: getRandomElement(names) + ' ' + getRandomElement(surnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
    }
  }
  return wizardsList;
};

var wizards = generateWizards(amountWizards);

//Клонирование волшебника
var getWizard = function(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

//Добавление карточки волшебника в список
var addWizards = function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
similarListElement.appendChild(fragment);
}

addWizards();

//ОБРАБОТКА СОБЫТИЙ
const setupOpen = document.querySelector('.setup-open');
const setupClose = userDialog.querySelector('.setup-close');
const inputName = userDialog.querySelector('.setup-user-name');

const onPopupEscPress = function (evt) {
  if (evt.key === "Escape") {
      evt.preventDefault();
      closePopup();
  }
};
const onSetupOpenEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
};

const openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupClose.addEventListener('keydown', onSetupOpenEnterPress);

};

const closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress)
  setupClose.removeEventListener('keydown', onSetupOpenEnterPress);
};


//Открытие по клику на аватарке
setupOpen.addEventListener('click', function () {
  openPopup();
});
//Открытие по Enter на аватарке
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

//Закрытие по клику крестике
setupClose.addEventListener('click', function () {
  closePopup();
});

inputName.addEventListener ('keydown', function (evt) {
  if (evt.key === "Escape") {
    evt.stopPropagation();
  }
});
//ВАЛИДАЦИЯ ФОРМЫ
inputName.addEventListener('invalid', function () {
  if (inputName.validity.tooShort) {
    inputName.setCustomValidity('Не менее 2х символов!');
  } else if (inputName.validity.tooLong) {
    inputName.setCustomValidity('Не более 25 символов!');
  } else if (inputName.validity.valueMissing) {
    inputName.setCustomValidity('Введи хоть что-нибудь!');
  } else {
    inputName.setCustomValidity('');
  }
});


const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

inputName.addEventListener('input', function (){
  let valueLength = inputName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    inputName.setCustomValidity('');
  }

  inputName.reportValidity();
});

//Изменение цвета элементов персонажа по нажатию
const primerWizard = document.querySelector('.setup-wizard');
const primerWizardEyes = primerWizard.querySelector('.wizard-eyes');
const primerWizardCoat = primerWizard.querySelector('.wizard-coat');
const primerWizardFireball = userDialog.querySelector('.setup-fireball-wrap');

const inputEyesColor = document.querySelector('input[name="eyes-color"]');
const inputCoatColor = document.querySelector('input[name="coat-color"]');
const inputFireballColor = document.querySelector('input[name="fireball-color"]');

primerWizardEyes.addEventListener('click', function () {
  let eyesColor = getRandomElement(eyesColors);
  primerWizardEyes.style.fill = eyesColor;
  inputEyesColor.value = eyesColor;
});

primerWizardCoat.addEventListener('click', function () {
  let coatColor = getRandomElement(coatColors);
  primerWizardCoat.style.fill = coatColor;
  inputCoatColor.value = coatColor;
});

primerWizardFireball.addEventListener('click', function () {
  let fireballColor = getRandomElement(fireballColors);
  primerWizardFireball.style.backgroundColor = fireballColor;
  inputFireballColor.value = fireballColor;
});
