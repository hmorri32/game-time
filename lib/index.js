var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Ball = require('./ball.js');

var ball = new Ball(canvas.width/2, canvas.height-30, 20, "black")

Ball.prototype.drawBall = function(){
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  context.fillStyle = this.color;
  context.fill();
  context.closePath();
}


requestAnimationFrame(function gameLoop() {

ball.drawBall();

});
