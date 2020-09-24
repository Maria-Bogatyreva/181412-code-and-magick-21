'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'handing';
  ctx.fillStyle = '#000';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  renderText(ctx, 'Ура, вы победили!', 130, 40);
  renderText(ctx, 'Список результатов:', 130, 60);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var times = [2725, 4025, 1244, 1339];

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - 2 * GAP
    );

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(246, 40%, 21%)';
    }

    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - (2 * GAP) - TEXT_HEIGHT,
        BAR_WIDTH,
        (-BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
        times[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - (2 * GAP) - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)
    );
  }
};
