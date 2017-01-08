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

Bricks.prototype.draw = function() {
  this.context.fillStyle = "aqua";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Bricks.prototype.createBricks = function() {
  for(var i = 0; i < this.brickRows; i++) {
    this.totalBricks.push([]);
    for(var j = 0; j < this.brickColumns; j++) {
      this.totalBricks[i].push({x: 0, y: 0, status: 1});
    }
  }
};

Bricks.prototype.drawBricks = function() {
  this.width = (this.canvas.width/this.brickColumns) - this.padding; 
  this.height = 15;
  for(var i = 0; i < this.brickRows; i++) {
    for(var j = 0; j < this.brickColumns; j++) {
      if(this.totalBricks[i][j].status === 1) {
        var brickX = (j * (this.width + this.padding)) + this.padding;
        var brickY = (i * (this.height + this.padding)) + this.padding;
        this.totalBricks[i][j].x = brickX;
        this.totalBricks[i][j].y = brickY;
        var newBrick = new Bricks({x : brickX,
                                   y : brickY,
                               width : this.width,
                              height : this.height,
                             context : this.context
                             });
        newBrick.draw();
      }
    }
  }
};

module.exports = Bricks;
