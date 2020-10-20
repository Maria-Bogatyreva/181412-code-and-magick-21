'use strict';

(function () {
  // Импортируемые данные
  const getRandomElement = window.util.getRandomElement;
  const userDialog = window.constant.userDialog;

  const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  let wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  const primaryWizard = document.querySelector('.setup-wizard');

  // Изменение цвета мантии по клику
  const wizardCoat = primaryWizard.querySelector('.wizard-coat');
  const inputCoatColor = document.querySelector('input[name="coat-color"]');
  wizardCoat.addEventListener('click', function () {
    const newColor = getRandomElement(coatColors);
    wizardCoat.style.fill = newColor;
    inputCoatColor.value = newColor;
    wizard.onCoatChange(newColor);
  });

  // Изменение цвета глаз по клику
  const wizardEyes = primaryWizard.querySelector('.wizard-eyes');
  const inputEyesColor = document.querySelector('input[name="eyes-color"]');
  wizardEyes.addEventListener('click', function () {
    const newColor = getRandomElement(eyesColors);
    wizardEyes.style.fill = newColor;
    inputEyesColor.value = newColor;
    wizard.onEyesChange(newColor);
  });

  // Изменение цвета фаербола по клику
  const wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  const inputFireballColor = document.querySelector('input[name="fireball-color"]');
  wizardFireball.addEventListener('click', function () {
    const color = getRandomElement(fireballColors);
    wizardFireball.style.backgroundColor = color;
    inputFireballColor.value = color;
  });

  window.wizard = {
    setCoatChangeHandler: function (cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler: function (cb) {
      wizard.onEyesChange = cb;
    }
  };
})();
