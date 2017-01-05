function Bricks(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
  this.padding = options.padding;
  this.brickRows = options.rows;
  this.brickColumns = options.columns;
  this.context = options.context;
  this.canvas = options.canvas;
  this.totalBricks = [];
}

Bricks.prototype.test = function() {
  console.log(this);
};

Bricks.prototype.createBricks = function() {
  for(var i = 0; i < this.brickRows; i++) {
    this.totalBricks.push([]);
    for(var j = 0; j < this.brickColumns; j++) {
      this.totalBricks.push(1);
    }
  }
  console.log(this.totalBricks);
};

module.exports = Bricks;
