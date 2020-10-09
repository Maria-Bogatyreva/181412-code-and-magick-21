'use strict';
(function () {
  // Импортируемые данные
  const userDialog = window.constant.userDialog;
  const eyesColors = window.data.eyesColors;
  const coatColors = window.data.coatColors;
  const fireballColors = window.data.fireballColors;
  const getRandomElement = window.util.getRandomElement;

  //  Изменение цвета элементов персонажа по нажатию
  const primaryWizard = document.querySelector('.setup-wizard');
  const wizardEyes = primaryWizard.querySelector('.wizard-eyes');
  const wizardCoat = primaryWizard.querySelector('.wizard-coat');
  const wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

  const inputEyesColor = document.querySelector('input[name="eyes-color"]');
  const inputCoatColor = document.querySelector('input[name="coat-color"]');
  const inputFireballColor = document.querySelector('input[name="fireball-color"]');

  const onInputClick = function (element, inputItem, colors) {
    return function () {
      const color = getRandomElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputItem.value = color;
    };
  };

  wizardEyes.addEventListener('click', onInputClick(wizardEyes, inputEyesColor, eyesColors));
  wizardCoat.addEventListener('click', onInputClick(wizardCoat, inputCoatColor, coatColors));
  wizardFireball.addEventListener('click', onInputClick(wizardFireball, inputFireballColor, fireballColors));

})();
