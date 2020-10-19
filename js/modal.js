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

  let coatColor = 'rgb(101, 137, 164)';
  let eyesColor ='black';
  let wizards = [];

  const updateWizards = function () {
    // Волшебники с тем же цветом мантии и глаз
    const sameCoatAndEyesWizards = wizards.filter(function(wizard) {
      return wizard.colorCoat === coatColor && wizard.colorEyes === eyesColor;
    });
    // Волшебники с тем же цветом мантии
    const sameCoatWizards = wizards.filter(function(wizard) {
      return wizard.colorCoat === coatColor;
    });
    // Волшебники с тем же цветом глаз
    const sameEyesWizards = wizards.filter(function(wizard) {
      return wizard.colorEyes === eyesColor;
    });

    // Отфильтрованные волшебники: сначала по цвету мантии и глаз, потом по цвету мантии, потом по цвету глаз, потом все остальные
    let filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    // Отфильтрованные волшебники, без повторений
    const uniqueWizards = filteredWizards.filter(function(wizard, index) {
      return filteredWizards.indexOf(wizard) === index;
    })
    addWizards(uniqueWizards);
  }

  const primaryWizard = document.querySelector('.setup-wizard');

  // Изменение цвета мантии по клику
  const wizardCoat = primaryWizard.querySelector('.wizard-coat');
  const inputCoatColor = document.querySelector('input[name="coat-color"]');
  wizardCoat.addEventListener('click', function () {
    const newColor = getRandomElement(coatColors);
    wizardCoat.style.fill = newColor;
    inputCoatColor.value = newColor;
    coatColor = newColor;
    updateWizards();
  });

  // Изменение цвета глаз по клику
  const wizardEyes = primaryWizard.querySelector('.wizard-eyes');
  const inputEyesColor = document.querySelector('input[name="eyes-color"]');
  wizardEyes.addEventListener('click', function () {
    const newColor = getRandomElement(eyesColors);
    wizardEyes.style.fill = newColor;
    inputEyesColor.value = newColor;
    eyesColor = newColor;
    updateWizards();
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
})();
