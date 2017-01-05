function Draw(gameBall, context, canvas, gamePaddle, gameCollisions) {
  this.gameBall = gameBall;
  this.context = context;
  this.canvas = canvas;
  this.gamePaddle = gamePaddle;
  this.gameCollisions = gameCollisions;
}

Draw.prototype.runGame = function() {
  requestAnimationFrame(function gameLoop() {
    
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gamePaddle.drawPaddle();
    this.gamePaddle.movePaddle();
    this.gameBall.drawBall();
    this.gameBall.moveBall();
    this.gameCollisions.wallCollisions();

    requestAnimationFrame(gameLoop.bind(this));
  }.bind(this));
};




module.exports = Draw;
