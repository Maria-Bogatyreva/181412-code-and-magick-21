'use strict';
(function () {
  const userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  const inputName = userDialog.querySelector('.setup-user-name');
  const dialogHandle = userDialog.querySelector('.upload');

  window.constant = {
    inputName: inputName,
    userDialog: userDialog,
    dialogHandle: dialogHandle
  };

})();
