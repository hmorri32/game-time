var chai = require('chai');
var assert = chai.assert;

var Ball = require("../lib/ball");

describe("Ball", function() {
  var ball = new Ball({});

  it("should be a function", function() {
    assert.isFunction(Ball);
  });

  it("drawBall should be a function", function() {
    assert.isFunction(ball.drawBall);
  });

  it("moveBall should be a function", function() {
    assert.isFunction(ball.moveBall);
  });

  it("ball should have an x start position", function() {
    assert.equal(ball.x, 100);
  });

  it("ball should have an y start position", function() {
    assert.equal(ball.y, 100);
  });

  it("should log the fill color of ball", function() {
    assert.equal(ball.color, "aqua");
  });

  // it("moveBall should move the x pos & y pos by 1", function() {
  //   ball.moveBall();
  //   assert.equal(ball.x, 103);
  //   assert.equal(ball.y, 97);
  // });
});
