var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');
var Paddle = require('./paddle');
var Collisions = require('./collision');
var Bricks = require('./bricks');


var gamePaddle = new Paddle(canvas.width/2 - 50, canvas.height-15, 100, 10, "blue" , context, canvas);
var gameBall = new Ball(canvas.width/2, canvas.height-30, 10, "green", context, canvas);
var gameCollisions = new Collisions(canvas, gameBall, gamePaddle);
var bricks = new Bricks({rows: 5, columns: 5, context: context, canvas: canvas});


var draw = new Draw(gameBall, context, canvas, gamePaddle, gameCollisions, bricks);
draw.runGame();
