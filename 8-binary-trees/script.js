// Node class
function Node() {
  var id;
  var data;
  var leftChild;
  var rightChild;

  this.getData = function () {
    return data;
  };
  this.getId = function () {
    return id;
  };
  this.display = function() {
    console.log('==Node== id: ' + id + ' data: ' + data);
  };
}

// Binary tree
function Tree() {
  var root = null;

  this.find = function (id) {
    var current = root;

    while(current) {
      if(current.id === id) {
        return current;
      }
      if(id < current.id) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
    return null;
  };

  this.insert = function (id, data) {
    var newNode = new Node(id, data);

    if(!root) {
      root = newNode;
    } else {
      var current = root;

      while(current) {
        if(newNode.id < current.id) {
          if(!current.leftChild) {
            current.leftChild = newNode;
            return newNode;
          }
          current = current.leftChild;
        } else {
          if(!current.rightChild) {
            current.rightChild = newNode;
            return newNode;
          }
          current = current.rightChild;
        }
      }
    }

    return newNode;
  };

  this.delete = function (id) {

  };
  
  this.simmetricWalk = function (id) {
    
  }
}

var tree = new Tree();
tree.insert(1, 10);
tree.insert(2, 0);
tree.insert(800, 250);
tree.insert(11, 16);
tree.insert(202, 8);
tree.insert(5, 1);

console.log(tree.find(202));
