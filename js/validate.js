'use strict';
(function () {
  //  Импортируемые данные
  const inputName = window.constant.inputName;

  //  ВАЛИДАЦИЯ ФОРМЫ
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const onInputNameInput = function () {
    let valueLength = inputName.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      inputName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      inputName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      inputName.setCustomValidity('');
    }
    inputName.reportValidity();
  };

  inputName.addEventListener('input', onInputNameInput);


})();
