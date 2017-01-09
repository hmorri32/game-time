var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');
var Paddle = require('./paddle');
var Collisions = require('./collision');
var Bricks = require('./bricks');
var Levels = require('./levels');


var startBtn = document.querySelector(".start-btn");
var startPage = document.querySelector(".start-page-section");
var gamePage = document.querySelector(".game-page-section");
var gameOverPage = document.querySelector(".gameover-page-section");
var maintitle = document.querySelector(".main-title");
var restartBtn = document.querySelector(".back-to-start-btn");

startBtn.addEventListener("click", function() {
  gamePage.style.display = "block";
  startPage.style.display = "none";
});

restartBtn.addEventListener("click", function() {
  document.location.reload();
});


var level = new Levels({});
var gamePaddle = new Paddle({x: canvas.width/2 - 50, y: canvas.height-15, width: 100, height: 10, color: "turquoise" , context: context, canvas: canvas});
var gameBall = new Ball({y: canvas.height-25, radius: 10, color: "green", canvas: canvas, context: context, gamePaddle: gamePaddle});
var bricks = new Bricks({padding: 15, brickOffsetLeft: 10, brickOffsetTop: 70, context: context, canvas: canvas, levels: level});
var gameCollisions = new Collisions({canvas :canvas, context: context, gameBall: gameBall, gamePaddle: gamePaddle, bricks: bricks, maintitle: maintitle,gamepage: gamePage, gameover: gameOverPage});

var draw = new Draw(gameBall, context, canvas, gamePaddle, gameCollisions, bricks);


bricks.changeLevel();

draw.runGame();
