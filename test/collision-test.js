var chai = require('chai');
var assert = chai.assert;

var Collision = require("../lib/collision");

describe("Collision", function() {
  var collision = new Collision({});

  it("Collision should be a function", function() {
    assert.isFunction(Collision);
  });

  it("wallCollisions shoud be a function", function() {
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

  // it("testing collision detection of paddle", function() {
  //   var collision = new Collision();
  //   console.log(collision);
  //   collision.paddleHitDetection();
  //   assert.equal(paddleHitDetection, true);
  // });

});
