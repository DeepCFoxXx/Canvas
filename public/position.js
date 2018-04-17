var position = {
  x:300,
  y:100,
  moveAmount:10,
  setInBounds:function() {
    if(this.x<0) this.x = 0;
    if(this.y<0) this.y = 0;
  },
  moveUp:function() {
    this.y = this.y - this.moveAmount;
    this.setInBounds();
  },
  moveDown:function() {
    this.y = this.y + this.moveAmount;
    this.setInBounds();
  }
};
