var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var ball = new Ball(canvas.width/2, canvas.height-30, 20, "blue", context)


function Ball(x, y, radius, color, context){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.context = context;
  this.dx = 3;
  this.dy = -3;
}

Ball.prototype.drawBall = function(){
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  this.context.fillStyle = this.color;
  this.context.fill();
  this.context.closePath();
  return this
}

Ball.prototype.moveBall = function(){
  this.x += this.dx;
  this.y += this.dy;
}

Ball.prototype.wallCollisions = function(){
  if(this.x + this.dx > canvas.width-this.radius || this.x + this.dx < this.radius){
    this.dx = -this.dx;
  }
}


function Draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall().moveBall();
  requestAnimationFrame(Draw);
  ball.wallCollisions();
}
Draw();


module.exports = Ball










//
