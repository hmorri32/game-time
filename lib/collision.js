function Collisions(canvas, ball, paddle) {
  this.canvas = canvas;
  this.ball = ball;
  this.paddle = paddle;
}

Collisions.prototype.testFunction = function() {
  console.log(this.ball, this.paddle);
};

module.exports = Collisions;
