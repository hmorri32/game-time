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
  this.total = [];
}

Bricks.prototype.test = function() {
  console.log(this);
};


module.exports = Bricks;
