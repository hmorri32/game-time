var chai = require('chai');
var assert = chai.assert;

var Collision = require("../lib/collision");

describe("Collision", function() {
  var collision = new Collision({
                                 gameBall : {x: 400, y: 390, radius: 10, speedX: 5, speedY: -5},
                                 gamePaddle : {height: 15},
                                 bricks : {bricksOnPage: 30},
                                 canvas : {width: 400, height: 400},
                                });

  it("Collision should be a function", function() {
    assert.isFunction(Collision);
  });

  it("wallCollisions should be a function", function() {
    assert.isFunction(collision.wallCollisions);
  });

  it("levelComplete should be a function", function() {
    assert.isFunction(collision.levelComplete);
  });

  it("brickHitDetection should be a function", function() {
    assert.isFunction(collision.brickHitDetection);
  });

  it("drawScore should be a function", function() {
    assert.isFunction(collision.drawScore);
  });

  it("drawLives should be a function", function() {
    assert.isFunction(collision.drawLives);
  });

  it("should have a default score of 0", function() {
    assert.equal(collision.score, 0);
  });

  it("should have a default lives of 3", function() {
    assert.equal(collision.lives, 3);
  });

  it("should decrease bricks on page by 1", function() {
    assert.equal(collision.bricks.bricksOnPage, 30);
    collision.decreaseBrickCount();
    assert.equal(collision.bricks.bricksOnPage, 29);
  });

  it("should increase the score by 1", function() {
    assert.equal(collision.score, 0);
    collision.increaseScore();
    assert.equal(collision.score, 1);
  });

  it("should reverse direction of ball on X axis", function() {
    assert.equal(collision.ball.speedX, 5);
    collision.changeBallDirectionX();
    assert.equal(collision.ball.speedX, -5);
  });

  it("should reverse direction of ball on Y axis", function() {
    assert.equal(collision.ball.speedY, -5);
    collision.changeBallDirectionY();
    assert.equal(collision.ball.speedY, 5);
  });

  it("should detect ball collision with right wall", function() {
    assert.equal(collision.ball.x, 400);
    assert.equal(collision.ballHitsLeftRightWalls(), true);
  });

  it("should detect ball collision with left wall", function() {
    var collision = new Collision({gameBall: {x: 0, radius: 10},
                                   canvas : {width: 400, height: 400}
                                 });
    assert.equal(collision.ball.x, 0);
    assert.equal(collision.ballHitsLeftRightWalls(), true);
  });

  it("should detect ball collision with bottom", function() {
    assert.equal(collision.ball.y, 390);
    assert.equal(collision.ballHitBottom(), true);
  });

  it("should detect ball collision with top", function() {
    var collision = new Collision({gameBall: {y: 0, radius: 10},
                                   gamePaddle: {height: 15},
                                   canvas : {width: 400, height: 400}
                                 });
    assert.equal(collision.ball.y, 0);
    assert.equal(collision.ballHitTop(), true);
  });

  it("ball should hit paddle", function() {
    var collision = new Collision({gameBall: {x: 201},
                                   gamePaddle: {x:200, width: 100}
                                 });
    assert.equal(collision.paddle.x, 200);
    assert.equal(collision.ball.x, 201);
    assert.equal(collision.ballHitPaddle(), true);
  });

  it("ball should detect hit with brick and alter status", function() {
    var collision = new Collision({
                                   bricks: {x: 300, y:300, width:100, height:15, status: 1, bricksOnPage: 30},
                                   gameBall: {x: 310, y:310, radius:10}
                                 });
    assert.equal(collision.bricks.status, 1);
    collision.testForBrickDetection(collision.bricks);
    assert.equal(collision.bricks.status, 0);
  });
});
