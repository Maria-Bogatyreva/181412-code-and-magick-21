'use strict';
(function () {
  const URL_SAVE = 'https://21.javascript.pages.academy/code-and-magick';
  const URL_LOAD = 'https://21.javascript.pages.academy/code-and-magick/data';

  // Функция для ОТПРАВКИ данных на сервер
  const save = function (data, onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response); //В случае успешной загрузки отдать содержимое ответа
    });

    xhr.open('POST', URL_SAVE) // хотим ОТПРАВИТЬ данные на этот URL
    xhr.send(data); // Отправляем данные!

  };


  window.backend = {
    save: save,
    load: load
  }


})();
