var chai = require('chai');
var assert = chai.assert;

var Level = require("../lib/levels");


describe("Levels", function() {
  var level = new Level({})

  it("Levels should be a function", function() {
    assert.isFunction(Level);
  });
  
});
