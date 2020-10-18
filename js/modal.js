'use strict';
(function () {
  //  Импортируемые данные
  const userDialog = window.constant.userDialog;
  const save = window.backend.save;
  const load = window.backend.load;
  const createErrorMessage = window.util.createErrorMessage;
  const addWizards = window.render.add;

  const AMOUNT_WIZARDS = 4;

  let wizards = [];

  const loadHandler = function (data) {
    wizards = data;
    addWizards(wizards);
  };

  // Функция, если что-то пошло не так (выводится сообщение об ошибке)
  const errorHandler = function (errorMessage) {
    createErrorMessage(errorMessage);
  };

  // Функция, если ОТПРАВКА данных формы прошла успешно
  const saveHandler = function () {
    userDialog.classList.add('hidden');
  };

  // Добавление списка похожих волшебников с сервера
  load(loadHandler, errorHandler);

  // Отправление данных формы на сервер
  const form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(saveHandler, errorHandler, new FormData(form));
  });
})();
