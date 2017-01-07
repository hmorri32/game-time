var chai = require('chai');
var assert = chai.assert;

var Ball = require("../lib/ball");

describe("Ball", function() {
  var ball = new Ball({x: 100, y: 100, color: "green"});

  it("should be a function", function() {
    assert.isFunction(Ball);
  });

  it("drawBall should be a function", function() {
    assert.isFunction(ball.drawBall);
  });

  it("moveBall should be a function", function() {
    assert.isFunction(ball.moveBall);
  });

  // it("moveBall should move the x pos & y pos by 1", function() {
  //   ball.moveBall();
  //   assert.equal(ball.x, 103);
  //   assert.equal(ball.y, 97);
  // });

  it("should log the fill color of ball", function() {
    assert.equal(ball.color, "green");
  });

});
