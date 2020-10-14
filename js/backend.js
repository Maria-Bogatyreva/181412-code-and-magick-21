'use strict';
(function () {
  const URL_SAVE = 'https://21.javascript.pages.academy/code-and-magick';
  const URL_LOAD = 'https://21.javascript.pages.academy/code-and-magick/data';
  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 100000;

  // Функция для ОТПРАВКИ данных на сервер
  const save = function (data, onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', URL_SAVE); // хотим ОТПРАВИТЬ данные на этот URL
    xhr.send(data); // Отправляем данные!
  };

  // Функция для ЗАГРУЗКИ данных с сервера
  const load = function (onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL_LOAD);
    xhr.send(); // Получаем данные!
  };

  window.backend = {
    save: save,
    load: load
  };

})();
