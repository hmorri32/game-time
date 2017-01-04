function Draw(gameBall, context, canvas) {
  this.gameBall = gameBall;
  this.context = context;
  this.canvas = canvas;
}

Draw.prototype.runGame = function() {
  requestAnimationFrame(function gameLoop() {

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gameBall.drawBall();
    this.gameBall.moveBall();
    this.gameBall.wallCollisions();
    requestAnimationFrame(gameLoop.bind(this));
    // console.log(this);
  }.bind(this));
};

module.exports = Draw;
