var chai = require('chai');
var assert = chai.assert;

var Paddle = require("../lib/paddle");

describe("Paddle", function() {
  var paddle = new Paddle({});

  it("should be a function", function() {
    assert.isFunction(Paddle);
  });

  it("movePaddle should be a function", function() {
    assert.isFunction(paddle.movePaddle);
  });

  it("should have a default x start position", function() {
    assert.equal(paddle.x, 200);
  });

  it("should have a default y start position", function() {
    assert.equal(paddle.y, 300);
  });

  it("should have a default paddle width", function() {
    assert.equal(paddle.width, 100);
  });

  it("shoudl have a default paddle height", function() {
    assert.equal(paddle.height, 10);
  });

  it("moveRight should be false as default", function() {
    assert.equal(paddle.moveRight, false);
  });

  it("moveLeft should be false as default", function() {
    assert.equal(paddle.moveLeft, false);
  });

  it("should move the paddle right by 5", function() {
    var paddle = new Paddle({
                             moveRight: true,
                             canvas: {width: 400}
                            });
    assert.equal(paddle.x, 200);
    paddle.movePaddle();
    assert.equal(paddle.x, 205);
  });

  it("should move the paddle left by 5", function() {
    var paddle = new Paddle({
                             moveLeft: true,
                             canvas: {width: 400}
                            });
    assert.equal(paddle.x, 200);
    paddle.movePaddle();
    assert.equal(paddle.x, 195);
  });
});
