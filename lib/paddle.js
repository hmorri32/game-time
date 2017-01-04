function Paddle(x, y, width, height, color, context, canvas) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.context = context;
  this.canvas = canvas;
  this.moveRight = false;
  this.moveLeft = false;
}


Paddle.prototype.drawPaddle = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.movePaddle = function() {
  var paddle = this;

  if(paddle.moveRight && paddle.x < paddle.canvas.width - paddle.width){
    paddle.x += 5;
  } else if(paddle.moveLeft && paddle.x > 0){
    paddle.x -= 5;
  }
  
  document.addEventListener("keydown", function(e) {
    if(e.keyCode === 39) {
      paddle.moveRight = true;
    } else if(e.keyCode === 37) {
      paddle.moveLeft = true;
    }
  });
  document.addEventListener("keyup", function(e) {
    if(e.keyCode === 39) {
      paddle.moveRight = false;
    } else if(e.keyCode === 37) {
      paddle.moveLeft = false;
    }
  });
};



module.exports = Paddle;
