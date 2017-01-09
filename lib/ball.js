function Ball(options){
  this.paddle = options.gamePaddle;
  this.x = options.x || 100;
  this.y = options.y || 100;
  this.radius = options.radius || 10;
  this.color = options.color || "aqua";
  this.context = options.context;
  this.canvas = options.canvas;
  this.speedX = options.speedX || 5;
  this.speedY = options.speedY || -5;
  this.space = options.space || false;
}

Ball.prototype.drawBall = function() {
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  this.context.closePath();
  this.context.fillStyle = this.color;
  this.context.fill();
  return this;
};

Ball.prototype.resetBallAndPaddle = function (){
  this.speedX = 5;
  this.speedY = -5;
  this.x = this.canvas.width/2 ;
  this.y = this.canvas.height - 25;
  this.paddle.x = this.canvas.width/2 -50;
  this.space = false;
}

Ball.prototype.moveBall = function() {
  var ball = this;
  var paddle = this.paddle;

  if(ball.space === true){
    ball.x += ball.speedX;
    ball.y += ball.speedY;
  } else if(ball.space === false){
    ball.x = paddle.x + paddle.width/2;
  }

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 32) {
      ball.space = true;
    }
  });
};


module.exports = Ball;
