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
      this.totalBricks[i].push(1);
    }
  }
};

Bricks.prototype.drawBricks = function() {
  this.width = (this.canvas.width/this.brickColumns) - this.padding; //400(canvasWidth) / 5(brickColum) -1 => 79px
  this.height = 15;
  this.x = this.width + this.padding;
  this.y = this.height + this.padding;
  for(var i = 0; i < this.brickRows; i++) {
    for(var j = 0; j < this.brickColumns; j++) {
      if(this.totalBricks[i][j] === 1) {
        var newBrick = new Bricks({x : (j * this.x) + this.padding,
                                   y : (i * this.y) + this.padding,
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
