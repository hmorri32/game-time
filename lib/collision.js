function Collisions(canvas, ball, paddle) {
  this.canvas = canvas;
  this.ball = ball;
  this.paddle = paddle;
}

Collisions.prototype.ballLeftRigthDetection = function() {
  if(this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius) {//if x pos of ball is greater than canvas width - 10(radius) or less than 10(radius)
    this.ball.speedX =- this.ball.speedX;                                                   //bounce the ball
  }
};

Collisions.prototype.ballTopBottomDetection = function() {
  if (this.ball.y < this.ball.radius) {                                                   //if y pos of ball is less than 10(radius)top of canvas
    this.ball.speedY =- this.ball.speedY;                                                 //bounce the ball
  } else if(this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height)) { //if y pos of ball is greater than canvas height - 20 (radius) + (paddle height) => y:280px
    this.paddleHitDetection();
    // this.ball.speedY =- this.ball.speedY; //if we remove paddleHitDetection() add this for testing
  }
};

Collisions.prototype.paddleHitDetection = function() {
  if(this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {//if ball lands between start and finish of paddle
    this.ball.speedY =- this.ball.speedY;                                             //bounce the ball
  } else if(this.ball.y > this.canvas.height) {                                       //ball pos is more than canvas height => 300px                                      //if ball is goes above the canvas height
    alert("Game Over");                                                               //game over and reload the game
    document.location.reload();
  }
};

Collisions.prototype.wallCollisions = function(){
  this.ballTopBottomDetection();
  this.ballLeftRigthDetection();
};



// Collisions.prototype.wallCollisions = function(){
//   if(this.hitSideWalls()){
//     this.ball.speedX = -this.ball.speedX;
//   }
//   if(this.hitTop()){
//     this.ball.speedY = -this.ball.speedY;
//   }
//   if(this.hitBottom()){
//     this.ball.speedY = -this.ball.speedY;
//   }
// };
//
// Collisions.prototype.hitSideWalls = function() {
//   return (this.ball.x + this.ball.speedX > this.canvas.width - this.ball.radius || this.ball.x + this.ball.speedX < this.ball.radius);
// };
//
// Collisions.prototype.hitTop = function(){
//   return this.ball.y + this.ball.speedY < this.ball.radius;
// };
//
// Collisions.prototype.hitBottom = function(){
//   return this.ball.y + this.ball.speedY > this.canvas.height - this.ball.radius;
// };




module.exports = Collisions;
