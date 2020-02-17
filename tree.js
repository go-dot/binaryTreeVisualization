let arr = [];
class Tree {

    constructor() {
        this.node = null;
        this.x = null;
        this.y = null;
    }

    addValue(value) {
        if(value){
            if (this.node == null) {
                this.node = new Node(value);
            } else {
                this.node.addValue(value);
            }
        } else {
            window.alert("Input is not a number");
        }
    }


    readRecursive(node) {
        let gata = false;
        if (gata == false){
        if (node.left != null) {
            this.readRecursive(node.left);
        }
        arr.push(node.value);   
        
        if (node.right != null) {
            this.
            readRecursive(node.right);
        }
        gata = true;
    }
    return true;
}

    display(){
        let gata = this.readRecursive(this.node);
        if (gata == true){
            window.alert(arr);
            arr = [];
        }
    }


    returnOrdered() {
        if (this.node) {
            this.readRecursive(this.node);
            
        }
    }

    exist(value){
            if(value){
            this.node.exist(value);
        }else window.alert('Input is not a number');
    }

    search(value) {
            this.node.search(value);
    }


    show(x, y) {
      this.node.show(x,y,1);
    }
}
