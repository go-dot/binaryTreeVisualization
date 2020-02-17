class Node {
    
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.diameter = 30;
        this.lineLengthX = width / 5;
        this.lineLengthY = 40;
    }
    
    addValue(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.addValue(value);
            } else {
                this.left = new Node(value);
            }
        } else if (value > this.value) {
            if (this.right) {
                this.right.addValue(value);
            } else {
                this.right = new Node(value);
            }
        }
    }

    exist(value){
        let found = this.search(value);
        if(found == true){
            window.alert('Found ' + value);
        } else {
            window.alert('Number ' + value + ' not found');
        }

    }

    search(value) {
        let found = false;
        if (found == false){
            if (this.value == value) {
                return true;
            } else if (value < this.value) {
                if (this.left != null) {
                    found = this.left.search(value);
                }
            } else if (value > this.value) {
                if (this.right != null) {
                    found = this.right.search(value);
                }
            }
        }
        return found;
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
