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

Ball.prototype.hello = function() {
  console.log("Hello");
};

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

Ball.prototype.wallCollisions = function(){
  if(this.hitSideWalls()){
    this.speedX = -this.speedX;
  }
  if(this.hitTop()){
    this.speedY = -this.speedY
  }
  if(this.hitBottom()){
    this.speedY = -this.speedY
  }
};

Ball.prototype.hitSideWalls = function() {
  return (this.x + this.speedX > this.canvas.width-this.radius || this.x + this.speedX < this.radius)
}

Ball.prototype.hitTop = function(){
  return this.y + this.speedY < this.radius;
}

Ball.prototype.hitBottom = function(){
  return this.y + this.speedY > this.canvas.height-this.radius;
}









module.exports = Ball;
