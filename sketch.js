let tree;

function setup() {


  let numberOfNodes = prompt("How many nodes to generate ? ", " ")
  while(isNaN(numberOfNodes)){
    window.alert("Answer is not a number. Retry");
    numberOfNodes = prompt("How many nodes to generate ? ", " ")
  }

  if(numberOfNodes == 0){
    rootValue = prompt("Enter root: ", " ");
    createCanvas(window.innerWidth, window.innerHeight);
    tree = new Tree();
    tree.addValue(rootValue);
  } else {
    createCanvas(window.innerWidth, window.innerHeight);
    tree = new Tree();
    for (let i = 0; i < (numberOfNodes); i++) {
      tree.addValue(Math.round(Math.random() * 100));
    }

  }
}

function draw() {
  background(10);

  tree.show(width / 2 ,40);

}
