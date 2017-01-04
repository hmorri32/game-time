var chai = require('chai');
var assert = chai.assert;

var Ball = require("../lib/ball");

describe("Ball", function() {

  it("should be a function", function() {
    assert.isFunction(Ball.drawBall);
  });

  it("should log Hello", function() {
    var ball = new Ball();
    assert.equal(ball.hello, "Hello");
  });
});
