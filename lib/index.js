var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 10;
var height = 10;

requestAnimationFrame(function gameLoop() {
  context.fillRect(x++, y, width, height);
  requestAnimationFrame(gameLoop);
});
