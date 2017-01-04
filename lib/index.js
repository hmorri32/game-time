var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');
var Paddle = require('./paddle');

var gamePaddle = new Paddle(canvas.width/2 - 50, canvas.height-15, 100, 10, "blue" , context, canvas);

var gameBall = new Ball(canvas.width/2, canvas.height-30, 10, "red", context, canvas);

var draw = new Draw(gameBall, context, canvas, gamePaddle);

draw.runGame();
