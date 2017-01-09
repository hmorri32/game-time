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
}

Collisions.prototype.levelComplete = function() {
  console.log(this.bricks.bricksOnPage);
  this.bricks.totalBricks.splice(this.bricks.totalBricks);
  console.log("won");
  this.bricks.gameLevel++;
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
        if(this.ball.x >= eachBrick.x && this.ball.x - this.ball.radius <= eachBrick.x + this.bricks.width) {
          if(this.ball.y >= eachBrick.y && this.ball.y - this.ball.radius <= eachBrick.y + this.bricks.height) {
            eachBrick.status = 0;
            this.ball.speedY =- this.ball.speedY;
            this.score++;
            this.bricks.bricksOnPage --;
            console.log(this.bricks.bricksOnPage);

            if(!this.bricks.bricksOnPage) {
              this.levelComplete();
            }
          }
        }
      }
    }
  }
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
  return this.ball.y + this.ball.speedY > this.canvas.height - (this.ball.radius + this.paddle.height);
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
