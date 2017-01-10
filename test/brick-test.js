var chai = require('chai');
var assert = chai.assert;

var Brick = require("../lib/bricks");

describe("Brick", function() {
  var brick = new Brick({});

  it("should be a function", function() {
    assert.isFunction(Brick);
  });

  it("createBricks should be a funtion", function() {
    assert.isFunction(brick.createBricks);
  });

  it("totalBricks should be an array", function() {
    assert.deepEqual(brick.totalBricks, []);
  });

  it("default bricks on page should be 0", function() {
    assert.equal(brick.bricksOnPage, 0);
  });

  it("default game level on page should be 1", function() {
    assert.equal(brick.gameLevel, 1);
  });
  
});
