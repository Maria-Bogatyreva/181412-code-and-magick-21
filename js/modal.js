'use strict';
(function () {
  //  Импортируемые данные
  const userDialog = window.constant.userDialog;
  const save = window.backend.save;
  const load = window.backend.load;
  const createErrorMessage = window.util.createErrorMessage;
  const addWizards = window.render.add;
  const getRandomElement = window.util.getRandomElement;

  const AMOUNT_WIZARDS = 4;
  const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  let wizards = [];

  const primaryWizard = document.querySelector('.setup-wizard');

  // Изменение цвета мантии по клику
  const wizardCoat = primaryWizard.querySelector('.wizard-coat');
  const inputCoatColor = document.querySelector('input[name="coat-color"]');
  wizardCoat.addEventListener('click', function () {
    const color = getRandomElement(coatColors);
    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
  });

  // Изменение цвета глаз по клику
  const wizardEyes = primaryWizard.querySelector('.wizard-eyes');
  const inputEyesColor = document.querySelector('input[name="eyes-color"]');
  wizardEyes.addEventListener('click', function () {
    const color = getRandomElement(eyesColors);
    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
  });

  // Изменение цвета фаербола по клику
  const wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  const inputFireballColor = document.querySelector('input[name="fireball-color"]');
  wizardFireball.addEventListener('click', function () {
    const color = getRandomElement(fireballColors);
    wizardFireball.style.backgroundColor = color;
    inputFireballColor.value = color;
  });


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
