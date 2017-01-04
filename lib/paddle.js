
function Paddle(x, y, width, height, color, context, canvas) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.context = context;
  this.canvas = canvas;
}


Paddle.prototype.drawPaddle = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
}


module.exports = Paddle;
