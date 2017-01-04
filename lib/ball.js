function Ball(x, y, radius, color, context, canvas){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.context = context;
  this.canvas = canvas;
  this.speedX = 3;
  this.speedY = -3;
}

Ball.prototype.drawBall = function() {
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  this.context.closePath();
  this.context.fillStyle = this.color;
  this.context.fill();
  // return this;
};

Ball.prototype.moveBall = function() {
  this.x += this.speedX;
  this.y += this.speedY;
};


module.exports = Ball;
