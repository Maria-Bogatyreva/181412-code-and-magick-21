'use strict';
(function () {
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

  window.wizard = {
    add: addWizards
  }

})();
