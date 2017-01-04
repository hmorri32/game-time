function Collisions(canvas, ball, paddle) {
  this.canvas = canvas;
  this.ball = ball;
  this.paddle = paddle;
}

Collisions.prototype.testFunction = function() {
  console.log(this.ball, this.paddle);
};

Collisions.prototype.wallCollisions = function(){
  if(this.hitSideWalls()){
    this.ball.speedX = -this.ball.speedX;
  }
  if(this.hitTop()){
    this.ball.speedY = -this.ball.speedY;
  }
  if(this.hitBottom()){
    this.ball.speedY = -this.ball.speedY;
  }
};

Collisions.prototype.hitSideWalls = function() {
  return (this.ball.x + this.ball.speedX > this.canvas.width - this.ball.radius || this.ball.x + this.ball.speedX < this.ball.radius);
};

Collisions.prototype.hitTop = function(){
  return this.ball.y + this.ball.speedY < this.ball.radius;
};

Collisions.prototype.hitBottom = function(){
  return this.ball.y + this.ball.speedY > this.canvas.height - this.ball.radius;
};




module.exports = Collisions;
