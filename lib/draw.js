var score = 0;

function Draw(gameBall, context, canvas, gamePaddle, gameCollisions, bricks) {
  this.gameBall = gameBall;
  this.context = context;
  this.canvas = canvas;
  this.gamePaddle = gamePaddle;
  this.gameCollisions = gameCollisions;
  this.bricks = bricks;
}

Draw.prototype.runGame = function() {
  requestAnimationFrame(function gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gamePaddle.drawPaddle();
    this.gamePaddle.movePaddle();
    this.gameBall.drawBall();
    this.gameBall.moveBall();
    this.gameCollisions.wallCollisions();
    this.bricks.drawBricks();
    this.gameCollisions.brickHitDetection();
    this.gameCollisions.drawScore();
    this.gameCollisions.drawLives();
    requestAnimationFrame(gameLoop.bind(this));
  }.bind(this));
};



Bricks.prototype.changeLevel = function() {
  if(this.gameLevel === 1) {
    this.createBricks(this.levels.level1);
  } else if(this.gameLevel === 2) {
    this.createBricks(this.levels.level2);
  }
};



module.exports = Draw;
