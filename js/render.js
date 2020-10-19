'use strict';
(function () {
  const AMOUNT_WIZARDS = 4;

  const wizardTemplate = document.querySelector('#similar-wizard-template');
  //  Клонирование карточки волшебника
  const getWizard = function (wizard) {
    const element = wizardTemplate.content.cloneNode(true);

    const wizardElement = element.querySelector('.wizard');

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  // Функция для добавления волшебников
  const addWizards = function (wizards) {
    const similarListElement = document.querySelector('.setup-similar-list');
    const fragment = document.createDocumentFragment();

    const takeNumber = wizards.length > AMOUNT_WIZARDS
      ? AMOUNT_WIZARDS
      : wizards.length;


    similarListElement.innerHTML = '';

    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.render = {
    add: addWizards
  };

})();
