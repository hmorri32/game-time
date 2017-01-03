function Ball(x, y, radius, color){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// var ball = new Ball(canvas.width/2, canvas.height-30, 10, "black")




// var x = canvas.width/2;
// var y = canvas.height-30
// var radius = 10;

module.exports = Ball;
