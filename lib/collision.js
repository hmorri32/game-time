function Collisions(options) {
  this.canvas = options.canvas;
  this.ball = options.gameBall;
  this.paddle = options.gamePaddle;
  this.bricks = options.bricks;
}

Collisions.prototype.ballLeftRightDetection = function() {
  if(this.ballHitsLeftRightWalls()) {
    this.changeBallDirectionX();
  }
};

Collisions.prototype.ballTopBottomDetection = function() {
  if (this.ballHitTop()) {
    this.changeBallDirectionY();
  } else if(this.ballHitBottom()) {
    this.paddleHitDetection();
  }
};

Collisions.prototype.paddleHitDetection = function() {
  if(this.ballHitPaddle()) {
    this.changeBallDirectionY();
    this.ball.speedX = (8 * ((this.ball.x-(this.paddle.x+this.paddle.width/2)))/this.paddle.width);
  } else if(this.ball.y > this.canvas.height) {
    document.location.reload();
  }
};

Collisions.prototype.changeBallDirectionY = function () {
  return this.ball.speedY =- this.ball.speedY;
}

Collisions.prototype.changeBallDirectionX = function () {
  return this.ball.speedX =- this.ball.speedX;
}

Collisions.prototype.ballHitsLeftRightWalls = function(){
  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius
}

Collisions.prototype.ballHitBottom = function() {
  return this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height);
}

Collisions.prototype.ballHitTop = function(){
  return this.ball.y < this.ball.radius
}

Collisions.prototype.ballHitPaddle = function() {
  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
}

Collisions.prototype.wallCollisions = function(){
  this.ballTopBottomDetection();
  this.ballLeftRightDetection();
};



module.exports = Collisions;
