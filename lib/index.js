var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');
var Paddle = require('./paddle');
var Collisions = require('./collision');
var Bricks = require('./bricks');



var gamePaddle = new Paddle({x: canvas.width/2 - 50, y: canvas.height-15, width: 100, height: 10, color: "turquoise" , context: context, canvas: canvas});
var gameBall = new Ball({y: canvas.height-25, radius: 10, color: "green", context: context, gamePaddle: gamePaddle});
var bricks = new Bricks({padding: 1, rows: 5, columns: 5, context: context, canvas: canvas});
var gameCollisions = new Collisions({canvas :canvas, gameBall: gameBall, gamePaddle: gamePaddle, bricks: bricks});

var draw = new Draw(gameBall, context, canvas, gamePaddle, gameCollisions, bricks);

bricks.createBricks();

draw.runGame();
