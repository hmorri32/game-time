var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var Ball = require('./ball');
var Draw = require('./draw');


var gameBall = new Ball(150, 150, 10, "blue", context);


var draw = new Draw(gameBall, context, canvas);

draw.runAnimationLoop();
