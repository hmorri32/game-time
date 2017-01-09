function Paddle(options) {
  this.x = options.x || 200;
  this.y = options.y || 300;
  this.width = options.width || 100;
  this.height = options.height || 10;
  this.color = options.color || "blue";
  this.context = options.context;
  this.canvas = options.canvas;
  this.moveRight = false;
  this.moveLeft = false;
}


Paddle.prototype.drawPaddle = function() {
  this.context.fillStyle = this.color;
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
