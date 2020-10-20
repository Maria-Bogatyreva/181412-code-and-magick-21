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

    similarListElement.innerHTML = '';

    const slicedWizards = wizards.slice(0, 4);

    slicedWizards.forEach(function (element) {
      fragment.appendChild(getWizard(element));
    });
    similarListElement.appendChild(fragment);

  };

  window.render = {
    add: addWizards
  };

})();
