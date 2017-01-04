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


var rightKey = false;
var leftKey = false;

Paddle.prototype.drawPaddle = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.movePaddle = function() {
  var paddle = this;
  if(paddle.moveLeft) {
    paddle.x += 5;
  } else if(paddle.moveRight) {
    paddle.x -= 5;
  }
  document.addEventListener("keyup", function(e) {
    if(e.keyCode === 37) {
      paddle.moveRight = false;
    } else if(e.keyCode === 39) {
      paddle.moveLeft = false;
    }
  });
  document.addEventListener("keydown", function(e) {
    if(e.keyCode === 37) {
      paddle.moveRight = true;
    } else if(e.keyCode === 39) {
      paddle.moveLeft = true;
    }
  });
};


// document.addEventListener("keyup", function(e) {
//   if(e.keyCode === 37) {
//     rightKey = false;
//   } else if(e.keyCode === 39) {
//     leftKey = false;
//   }
// });
//
// document.addEventListener("keydown", function(e) {
//   if(e.keyCode === 37) {
//     rightKey = true;
//   } else if(e.keyCode === 39) {
//     leftKey = true;
//   }
// });








module.exports = Paddle;
