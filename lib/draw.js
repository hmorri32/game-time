function Draw(gameBall) {
  this.gameBall = gameBall;
}

Draw.prototype.runAnimationLoop = function() {
  requestAnimationFrame(function gameLoop() {

    this.gameBall.drawBall();

    requestAnimationFrame(gameLoop.bind(this));
  }.bind(this));
};

module.exports = Draw;
