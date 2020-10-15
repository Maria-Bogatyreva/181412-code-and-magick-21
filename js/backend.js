'use strict';
(function () {
  const URL_SAVE = 'https://21.javascript.pages.academy/code-and-magick';
  const URL_LOAD = 'https://21.javascript.pages.academy/code-and-magick/data';
  const TIMEOUT_IN_MS = 100000;
  const StatusCode = {
    OK: 200
  };

  const makeRequest = function (onLoad, onError, data) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT_IN_MS;

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

    if (data) {
      xhr.open('POST', URL_SAVE);
      xhr.send(data);
    } else {
      xhr.open('GET', URL_LOAD);
      xhr.send();
    }
  };

  // Функция для ОТПРАВКИ данных на сервер
  const save = function (onLoad, onError, data) {
    makeRequest(onLoad, onError, data);
  };

  // Функция для ЗАГРУЗКИ данных с сервера
  const load = function (onLoad, onError) {
    makeRequest(onLoad, onError);
  };

  window.backend = {
    save: save,
    load: load
  };

})();
