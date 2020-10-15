'use strict';
(function () {
  // Импортируемые данные
  const userDialog = window.constant.userDialog;
  const getRandomElement = window.util.getRandomElement;

  const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


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
