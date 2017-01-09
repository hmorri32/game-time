function Levels(options) {
  this.level1 = options.level1 || level1;
  this.level2 = options.level2 || level2;
  this.level3 = options.level3 || level3;
}

var level1 = [
             [0, 1, 0, 1, 0],
             [1, 1, 0, 1, 1],
             [0, 1, 1, 1, 0]
           ];
var level2 = [
             [0, 1, 0, 1, 0],
             [1, 1, 0, 1, 1],
             [0, 1, 1, 1, 0],
             [1, 1, 1, 1, 1]
           ];
var level3 = [
             [1, 1, 0, 1, 1],
             [1, 1, 0, 1, 1],
             [0, 1, 0, 1, 0],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1]
           ];

module.exports = Levels;
