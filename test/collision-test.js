var chai = require('chai');
var assert = chai.assert;

var Collision = require("../lib/collision");

describe("Collision", function() {

  it("should be a function", function() {
    assert.isFunction(Collision);
  });

  it("wallCollisions shoud be a function", function() {
    var collision = new Collision();
    assert.isFunction(collision.wallCollisions);
  });

  // it("testing collision detection of paddle", function() {
  //   var collision = new Collision();
  //   console.log(collision);
  //   collision.paddleHitDetection();
  //   assert.equal(paddleHitDetection, true);
  // });

});