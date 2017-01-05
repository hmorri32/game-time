var chai = require('chai');
var assert = chai.assert;

var Paddle = require("../lib/paddle");

describe("Paddle", function() {

  it("should be a function", function() {
    assert.isFunction(Paddle);
  });
  it("movePaddle should be a function", function() {
    var paddle = new Paddle();
    assert.isFunction(paddle.movePaddle);
  });
  
});
