function Collisions(canvas, ball, paddle) {
  this.canvas = canvas;
  this.ball = ball;
  this.paddle = paddle;
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

Collisions.prototype.paddleHitDetection = function() {
  if(this.ballHitPaddle()) {
    this.changeBallDirectionY();
  } else if(this.ball.y > this.canvas.height) {
    document.location.reload();
  }
};


Collisions.prototype.wallCollisions = function(){
  this.ballTopBottomDetection();
  this.ballLeftRightDetection();
};



// Collisions.prototype.wallCollisions = function(){
//   if(this.hitSideWalls()){
//     this.ball.speedX = -this.ball.speedX;
//   }
//   if(this.hitTop()){
//     this.ball.speedY = -this.ball.speedY;
//   }
//   if(this.hitBottom()){
//     this.ball.speedY = -this.ball.speedY;
//   }
// };
//
// Collisions.prototype.hitSideWalls = function() {
//   return (this.ball.x + this.ball.speedX > this.canvas.width - this.ball.radius || this.ball.x + this.ball.speedX < this.ball.radius);
// };
//
// Collisions.prototype.hitTop = function(){
//   return this.ball.y + this.ball.speedY < this.ball.radius;
// };
//
// Collisions.prototype.hitBottom = function(){
//   return this.ball.y + this.ball.speedY > this.canvas.height - this.ball.radius;
// };




module.exports = Collisions;
