'use strict';
(function () {
  const userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  const inputName = userDialog.querySelector('.setup-user-name');

  window.constant = {
    inputName: inputName,
    userDialog: userDialog
  }

})();
