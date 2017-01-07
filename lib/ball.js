function Ball(options){
  this.gamePaddle = options.gamePaddle;
  this.x = options.x || 100;
  this.y = options.y || 100;
  this.radius = options.radius || 10;
  this.color = options.color || "aqua";
  this.context = options.context;
  this.canvas = options.canvas;
  this.speedX = options.speedX || 3;
  this.speedY = options.speedY || -3;
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

Ball.prototype.moveBall = function() {
  var ball = this;
  var gamePaddle = this.gamePaddle;

  if(ball.space === true){
    ball.x += ball.speedX;
    ball.y += ball.speedY;
  } else if(ball.space === false){
    ball.x = gamePaddle.x + gamePaddle.width/2;
  }

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 32) {
      ball.space = true;
    }
  });
};


module.exports = Ball;
