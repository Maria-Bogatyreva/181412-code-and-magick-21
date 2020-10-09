'use strict';
(function () {
  //  Функция для получения случайного элемента
  const getRandomElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  window.util = {
    getRandomElement: getRandomElement  }


})();
