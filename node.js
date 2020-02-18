class Node {
    
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.diameter = 32;
        this.lineLengthX = width / 5;
        this.lineLengthY = 40;
    }
    
    

  show(x, y, level) {

    stroke(255);
    strokeWeight(1);

    let lineLenghtXLevel = (this.lineLengthX / level);

    if (this.left != null) {
      line(x,y, x - (lineLenghtXLevel), y + this.lineLengthY);
    }

    if (this.right != null) {
      line(x,y, x + (lineLenghtXLevel), y + this.lineLengthY);
    }

    fill(255, 0, 0)
    circle(x, y, this.diameter);

    textSize(16);
    fill(255);
    textAlign(CENTER);
    text(this.value, x, y + (this.diameter * 0.12));


    if (this.left != null) {
      this.left.show(x - (lineLenghtXLevel), y + this.lineLengthY, level + 1);
    }


    if (this.right != null) {
      this.right.show(x + (lineLenghtXLevel), y + this.lineLengthY, level + 1);
    }

  }

}
