function Bricks(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
  this.padding = options.padding;
  this.brickRows = options.rows || 3;
  this.brickColumns = options.columns || 3;
  this.brickOffsetTop = options.brickOffsetTop;
  this.brickOffsetLeft = options.brickOffsetLeft;
  this.context = options.context;
  this.canvas = options.canvas;
  this.levels = options.levels;
  this.gameLevel = 1;
  this.bricksOnPage = options.bricksOnPage || 0;
  this.totalBricks = [];
  this.gamecomplete = options.gamecomplete;
  this.gamepage = options.gamepage;
  this.startLevelScreen = options.startLevelScreen;
  this.maintitle = options.maintitle;
}

Bricks.prototype.changeLevel = function() {
  if(this.gameLevel === 1) {
    this.createBricks(this.levels.level1);
  } if(this.gameLevel === 2) {
    this.createBricks(this.levels.level2);
  } if(this.gameLevel === 3){
    this.createBricks(this.levels.level3);
  } if(this.gameLevel === 4){
    this.createBricks(this.levels.level4);
  } if(this.gameLevel === 5){
    this.createBricks(this.levels.level5);
  } if(this.gameLevel === 6){
    this.createBricks(this.levels.youWin);
  } if(this.gameLevel === 7) {
    this.gamepage.style.display = "none";
    this.maintitle.style.display = "none";
    this.startLevelScreen.style.display = "none";
    this.gamecomplete.style.display = "block";
  }
};

Bricks.prototype.draw = function() {
  this.context.fillStyle = "#5e0";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Bricks.prototype.createBricks = function(bricksArray) {
  var levelArray = bricksArray;
  this.brickRows = levelArray.length;
  this.brickColumns = levelArray[0].length;
  for(var i = 0; i < this.brickRows; i++) {
    var row = levelArray[i];
    this.totalBricks.push([]);
    for(var j = 0; j < this.brickColumns; j++) {
      var brick = row[j];
      if(brick === 1) {
        this.bricksOnPage ++;
        this.totalBricks[i].push({x: 0, y: 0, status: 1});
      } else {
        this.totalBricks[i].push({x: 0, y: 0, status: 0});
      }
    }
  }
};

Bricks.prototype.drawBricks = function() {
  this.width = (this.canvas.width/this.brickColumns) - this.padding;
  this.height = 15;
  for(var i = 0; i < this.brickRows; i++) {
    for(var j = 0; j < this.brickColumns; j++) {
      if(this.totalBricks[i][j].status === 1) {
        var brickX = (j * (this.width + this.padding))+this.brickOffsetLeft;
        var brickY = (i * (this.height + this.padding)) + this.brickOffsetTop;
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
