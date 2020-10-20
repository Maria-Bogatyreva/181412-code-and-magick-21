'use strict';
(function () {
  //  Функция для получения случайного элемента
  const getRandomElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  const createErrorMessage = function (message) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);

  };

  window.util = {
    getRandomElement: getRandomElement,
    createErrorMessage: createErrorMessage
  };


})();
