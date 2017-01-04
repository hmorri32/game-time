var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');

var gameBall = new Ball(300, 200, 10, "blue", context, canvas);


var draw = new Draw(gameBall, context, canvas);

draw.runGame();
