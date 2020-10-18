'use strict';
(function () {
  const userDialog = window.constant.userDialog;
  const AMOUNT_WIZARDS = 4;

//  Клонирование карточки волшебника
  const getWizard = function (wizard) {
    const similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

    // Функция для добавления волшебников
  const addWizards = function (wizards) {
    const similarListElement = document.querySelector('.setup-similar-list');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < AMOUNT_WIZARDS; i++) {
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

window.render = {
  add: addWizards
}


})();
