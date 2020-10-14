'use strict';
(function () {
  //  Импортируемые данные
  const userDialog = window.constant.userDialog;
  const save = window.backend.save;

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
  // Отправляем данные формы на сервер
  const form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    save(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  })


  window.wizard = {
    add: addWizards
  };

})();
