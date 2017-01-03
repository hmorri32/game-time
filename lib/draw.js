requestAnimationFrame(function gameLoop() {
drawBall();

  requestAnimationFrame(gameLoop);
});

module.exports = gameLoop;
