var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');
var Paddle = require('./paddle');
var Collisions = require('./collision');
var Bricks = require('./bricks');



var gamePaddle = new Paddle(canvas.width/2 - 50, canvas.height-15, 100, 10, "blue" , context, canvas);
var gameBall = new Ball({y: canvas.height-25, radius: 10, color: "green", context: context, canvas: canvas, gamePaddle: gamePaddle});
var gameCollisions = new Collisions(canvas, gameBall, gamePaddle);
var bricks = new Bricks({padding: 1, rows: 5, columns: 5, context: context, canvas: canvas});

var draw = new Draw(gameBall, context, canvas, gamePaddle, gameCollisions, bricks);

bricks.createBricks();

draw.runGame();
