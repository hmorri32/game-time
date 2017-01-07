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

  // it("paddle should move right and moveRight should be true", function() {
  //   paddle.movePaddle();
  //   assert.equal(paddle.moveRight, true);
  // });
  //
  // it("paddle should move left and moveLeft should be true", function() {
  //   paddle.movePaddle();
  //   assert.equal(paddle.moveLeft, true);
  // });
});
