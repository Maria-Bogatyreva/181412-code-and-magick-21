'use strict';
var userDialog = document.querySelector('.setup'); //Окно настроек пользователя
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden'); //Блок "Похожие персонажи"

var similarListElement = document.querySelector('.setup-similar-list') //Список, куда вставляем

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//Генерируем массив объектов
var wizards = [];

var getWizards = function () {
  for (var i = 0; i < 4; i++ ) {
    wizards[i] = {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
    }
  }
  return wizards;
};

wizards = getWizards();
