var chai = require('chai');
var assert = chai.assert;

var Ball = require("../lib/ball");

describe("Ball", function() {

  it("should be a function", function() {
    assert.isFunction(Ball);
  });

  it("drawBall should be a function", function() {
    var ball = new Ball();
    assert.isFunction(ball.drawBall);
  });

  it("moveBall should be a function", function() {
    var ball = new Ball();
    assert.isFunction(ball.moveBall);
  });

  it("should log the fill color of ball", function() {
    var ball = new Ball(100,100, 10, "green");
    assert.equal(ball.color, "green");
  });

});
