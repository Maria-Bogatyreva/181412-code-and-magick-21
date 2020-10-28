'use strict';

  //  Импортируемые данные
  const inputName = window.constant.inputName;
  const userDialog = window.constant.userDialog;

  const setupOpen = document.querySelector('.setup-open');
  const setupClose = userDialog.querySelector('.setup-close');

  // Функция для ОТКРЫТИЯ окна
  const openPopup = function () {
    userDialog.classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');

    setupClose.addEventListener('click', onSetupCloseClick);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);

    document.addEventListener('keydown', onPopupEscPress);
    inputName.addEventListener('keydown', onInputNameEscPress);

  };
  // Функция для ЗАКРЫТИЯ окна
  const closePopup = function () {
    userDialog.classList.add('hidden');

    userDialog.style.top = '';
    userDialog.style.left = '';


    setupClose.removeEventListener('click', onSetupCloseClick);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);

    document.removeEventListener('keydown', onPopupEscPress);
    inputName.removeEventListener('keydown', onInputNameEscPress);
  };

  const onSetupOpenClick = function () {
    openPopup();
  };
  const onSetupOpenEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  };


  const onPopupEscPress = function (evt) { // Обработчик: Закрытие по Esc
    if (evt.key === "Escape") {
      evt.preventDefault();
      closePopup();
    }
  };
  const onSetupCloseEnterPress = function (evt) { // Обработчик: закрытие по Enter на Х
    if (evt.key === 'Enter') {
      closePopup();
    }
  };
  const onSetupCloseClick = function () { // Обработчик: закрытие по клику на Х
    closePopup();
  };

  const onInputNameEscPress = function (evt) {
    if (evt.key === "Escape") {
      evt.stopPropagation();
    }
  };

  //  Открытие по КЛИКУ на аватарке
  setupOpen.addEventListener('click', onSetupOpenClick);

  //  Открытие по Enter на аватарке
  setupOpen.addEventListener('keydown', onSetupOpenEnterPress);

