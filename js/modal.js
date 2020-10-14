'use strict';
(function () {
  //  Импортируемые данные
  const userDialog = window.constant.userDialog;
  const save = window.backend.save;
  const load = window.backend.load;
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

  //  Функция, если ЗАГРУЗКА данных прошла успешно (добавление списка волшебников)
  const loadHandler = function (wizards) {
    const similarListElement = document.querySelector('.setup-similar-list');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < AMOUNT_WIZARDS; i++) {
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Функция, если что-то пошло не так (выводится сообщение об ошибке)
  const errorHandler = function (errorMessage) {
    const node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Функция, если ОТПРАВКА данных прошла успешно
  const saveHandler = function () {
    userDialog.classList.add('hidden');
  };

  // Добавление списка похожих волшебников
  load(loadHandler, errorHandler);

  // Отправляем данные формы на сервер
  const form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(new FormData(form), saveHandler, errorHandler);
  });
})();
