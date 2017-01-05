function Bricks(options, context, canvas) {
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

// Bricks.prototype.test = function() {
//   console.log(this);
// };

// doesntwork. 

Bricks.prototype.draw = function() {
  for(c=0; c<this.brickColumns; c++) {
    for(r=0; r<this.brickRows; r++) {
      var brickX = (c*(this.bricks.width+this.bricks.padding));
      var brickY = (r*(this.bricks.height+this.bricks.padding));
      this.bricks[c][r].x = brickX;
      thios.bricks[c][r].y = brickY;
      this.context.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      console.log("ho")
    }
  }
}




module.exports = Bricks;
