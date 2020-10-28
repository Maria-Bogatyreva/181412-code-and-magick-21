'use strict';

  //  Импортируемые данные
  const userDialog = window.constant.userDialog;
  const save = window.backend.save;
  const load = window.backend.load;
  const createErrorMessage = window.util.createErrorMessage;
  const addWizards = window.render.add;
  const debounce = window.debounce.debounce;

  let coatColor = 'rgb(101, 137, 164)';
  let eyesColor = 'black';
  let wizards = [];

  // Функция для расчета степени похожести волшебника
  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    addWizards(wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right, name);
      }
      return rankDiff;
    }));
  };

  window.wizard.setEyesChangeHandler(function (color) {
    eyesColor = color;
    debounce(updateWizards);
  });

  window.wizard.setCoatChangeHandler(function (color) {
    coatColor = color;
    debounce(updateWizards);
  });


  const loadHandler = function (data) {
    wizards = data;
    updateWizards();
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

