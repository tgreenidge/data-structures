var BinarySearchTree = function(value){
  var bSTree = {};
  bSTree.value = value;
  bSTree.left = null;
  bSTree.right = null;
  bSTree.children = []; // can only be of size 0, 1, 2
  _.extend(bSTree, binarySearchTreeMethods);

  return bSTree;
};

var binarySearchTreeMethods ={};



binarySearchTreeMethods.insert = function(item){
  var node = BinarySearchTree(item);
  var current = this;

  while((item > current.value && current.right !== null) || (item < current.value  && current.left !== null)){
    if(item > current.value){
      current = current.right;
    }else{
      current = current.left;
    }
  };

  if(item > current.value){
    current.right = node;
  }else{
    current.left = node;
  }

};

binarySearchTreeMethods.contains = function(item){
  var current = this;
  while((item > current.value && current.right !== null) || (item < current.value  && current.left !== null)){
    if(item === current.value){
      return true;
    }else if(item > current.value){
      current = current.right; 
      if(item === current.value){
      return true;
      }
    }else{
    current = current.left;
      if(item === current.value){
      return true;
      }
    }
  };

  return false;

};

binarySearchTreeMethods.depthFirstLog = function(cb){
  var current = this;
  cb(current.value); // base for the recursion
  if(current.left){ //if current left !== null, tunneldown(apply recursion)
    current.left.depthFirstLog(cb);
  }else if (current.right){ 
    current.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


