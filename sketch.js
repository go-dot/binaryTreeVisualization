function setup() {

  createCanvas(windowWidth, windowHeight);
  tree = new Tree();

}

function draw() {
  background(10);
  if(tree.root != null){
    tree.show(window.innerWidth / 2 ,40);
  }
}
