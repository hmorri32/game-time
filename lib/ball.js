function Ball(x, y, radius, color, context){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.context = context;
}

Ball.prototype.drawBall = function() {
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2); //x,y,radius/size,start pos,end pos
  this.context.closePath();
  this.context.fillStyle = this.color;
  this.context.fill();
  // return this;
};

module.exports = Ball;
