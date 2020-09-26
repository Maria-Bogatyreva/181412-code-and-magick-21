'use strict';
var userDialog = document.querySelector('.setup'); //Окно настроек пользователя
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden'); //Блок "Похожие персонажи"

var similarListElement = document.querySelector('.setup-similar-list') //Список, куда вставляем

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
const amountWizards = 4;

//Генерируем массив объектов волшебников
var generateWizards = function (amount) {

  var wizardsList = [];

  for (var i = 0; i < amount; i++ ) {
    wizardsList[i] = {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
    }
  }
  return wizardsList;
};

var wizards = generateWizards(amountWizards);

//Клонирование волшебника
var getWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

//Добавление карточки волшебника в список
var addWizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
similarListElement.appendChild(fragment);
}

addWizard();




