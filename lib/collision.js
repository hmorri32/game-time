function Collisions(options) {
  this.canvas = options.canvas;
  this.context = options.context;
  this.ball = options.gameBall;
  this.paddle = options.gamePaddle;
  this.bricks = options.bricks;
  this.score = options.score || 0;
  this.lives = options.lives || 3;
  this.maintitle = options.maintitle;
  this.gamepage = options.gamepage;
  this.gameover = options.gameover;
  this.startLevelScreen = options.startLevelScreen;
}

Collisions.prototype.levelComplete = function() {
  this.gamepage.style.display = "none";
  this.startLevelScreen.style.display= "block";
  this.bricks.gameLevel++;
  this.startLevelScreen.querySelector("#game-level").textContent = this.bricks.gameLevel;
  this.lives = 3;
  this.bricks.totalBricks = [];
  this.bricks.changeLevel();
  this.ball.resetBallAndPaddle();
};

Collisions.prototype.drawScore = function(){
  this.context.font = "16px Arial";
  this.context.fillStyle = "#FFF";
  this.context.fillText("Score: " + this.score, 8, 20);
};

Collisions.prototype.drawLives = function() {
  this.context.font = "16px Arial";
  this.context.fillStyle = "#FFF";
  this.context.fillText("Lives: "+ this.lives, this.canvas.width-65, 20);
};

Collisions.prototype.brickHitDetection = function(){
  for(var i = 0; i < this.bricks.brickRows; i++) {
    for(var j = 0; j < this.bricks.brickColumns; j++) {
      var eachBrick = this.bricks.totalBricks[i][j];
      if(eachBrick.status === 1) {
        this.testForBrickDetection(eachBrick);
      }
    }
  }
};

Collisions.prototype.testForBrickDetection = function(eachBrick) {
  if(this.ball.x + this.ball.radius >= eachBrick.x && this.ball.x - this.ball.radius <= eachBrick.x + this.bricks.width) {
    if(this.ball.y >= eachBrick.y && this.ball.y - this.ball.radius <= eachBrick.y + this.bricks.height ||
       this.ball.y < eachBrick.y && this.ball.y + this.ball.radius === eachBrick.y) {
      eachBrick.status = 0;
      this.changeBallDirectionY();
      this.increaseScore();
      this.decreaseBrickCount();
      if(!this.bricks.bricksOnPage) {
        this.levelComplete();
      }
    }
  }
};

Collisions.prototype.decreaseBrickCount = function() {
  return this.bricks.bricksOnPage --;
};

Collisions.prototype.increaseScore = function() {
  return this.score++;
};

Collisions.prototype.ballLeftRightDetection = function() {
  if(this.ballHitsLeftRightWalls()) {
    this.changeBallDirectionX();
  }
};

Collisions.prototype.ballTopBottomDetection = function() {
  if (this.ballHitTop()) {
    this.changeBallDirectionY();
  }
  else if(this.ballHitBottom()) {
    if(this.ballHitPaddle()) {
      this.paddleHitDetection();
    } else {
      this.lives --;
      this.ball.resetBallAndPaddle();
      this.gameOver();
    }
  }
};

Collisions.prototype.gameOver = function() {
  if(!this.lives) {
    this.gamepage.style.display = "none";
    this.maintitle.style.display = "none";
    this.gameover.style.display = "block";
  }
};

Collisions.prototype.paddleHitDetection = function() {
  if(this.ballHitPaddle()) {
    this.changeBallDirectionY();
    this.ball.speedX = (8 * ((this.ball.x-(this.paddle.x+this.paddle.width/2)))/this.paddle.width);
  }
};

Collisions.prototype.changeBallDirectionY = function () {
  return this.ball.speedY =- this.ball.speedY;
};

Collisions.prototype.changeBallDirectionX = function () {
  return this.ball.speedX =- this.ball.speedX;
};

Collisions.prototype.ballHitsLeftRightWalls = function(){
  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius;
};

Collisions.prototype.ballHitBottom = function() {
  return this.ball.y + this.ball.speedY > this.canvas.height - (this.ball.radius + this.paddle.height + 5);
};

Collisions.prototype.ballHitTop = function(){
  return this.ball.y < this.ball.radius;
};

Collisions.prototype.ballHitPaddle = function() {
  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
};

Collisions.prototype.wallCollisions = function(){
  this.ballTopBottomDetection();
  this.ballLeftRightDetection();
};

module.exports = Collisions;
