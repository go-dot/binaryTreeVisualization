var arr = [];
class Tree {

    constructor() {
        this.root = null;
        this.x = null;
        this.y = null;
    }


    insert(value) 
    {
        var newNode = new Node(value); 
                        
        if(this.root === null) { 
            this.root = newNode;
            redraw();
        } else
            this.insertNode(this.root, newNode); 
    } 

    insertNode(node, newNode) 
    { 
        if(newNode.value == node.value){
            window.alert("A node with value " + newNode.value +" already exists.")
            return false;
        }
        if(newNode.value < node.value) 
        { 
            if(node.left === null){
                node.left = newNode;
                redraw(); 
            } else
                this.insertNode(node.left, newNode); 
        } 

        if(newNode.value > node.value)
        { 
            if(node.right === null) { 
                node.right = newNode;
                redraw(); 
            } else
                this.insertNode(node.right,newNode); 
        } 
    } 


    remove(value) 
    { 
        this.root = this.removeNode(this.root, value); 
    } 


    removeNode(node, key) { 
        
        if(node === null){ 
            return null; 
        } else if(key < node.value){ 
            node.left = this.removeNode(node.left, key);
            redraw();
            return node; 
        } else if(key > node.value) { 
            node.right = this.removeNode(node.right, key);
            redraw(); 
            return node; 
        } else { 

            if(node.left === null && node.right === null) { 
                node = null;
                redraw(); 
                return node; 
            } 
            if(node.left === null) { 
                node = node.right;
                redraw(); 
                return node; 
            } else if(node.right === null) { 
                node = node.left;
                redraw();
                return node; 
            } 

            var aux = this.findMinNode(node.right); 
            node.value = aux.value; 

            node.right = this.removeNode(node.right, aux.value); 
            redraw();
            return node;
        } 

    } 


    inorder(node) 
    { 
        if(tree.root == null){
            window.alert("Tree is empty");
            return false;
        }
        if(node !== null) { 
            this.inorder(node.left); 
            arr.push(node.value); 
            this.inorder(node.right); 
        }
        return true;
    } 

    display(){
        let gata = this.inorder(this.root);
        if (gata == true){
            window.alert("Elements of this tree (inorder): " + arr);
            arr = [];
        }
    }


    findMinNode(node) 
    {  
        if(node.left === null) { 
            return node; 
        } else {
            return this.findMinNode(node.left);
        } 
    } 


    search(node, value)
    { 
        if(node === null) {
            window.alert("Number " + value + " was not found.");
            return null; 
        } else if(value < node.value) { 
            return this.search(node.left, value); 
        } else if(value > node.value) { 
            return this.search(node.right, value); 
        } else {
            window.alert("Number " + node.value + " was found.");
            return node;
        }
    } 

    generate(numberOfNodes){
        for (let i = 0; i < (numberOfNodes); i++) {
            tree.insert(Math.round(Math.random() * 100));
        }
    }

    show(x, y) {
      this.root.show(x,y,1);
    }
}
