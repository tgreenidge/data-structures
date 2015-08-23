

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = {connections : [] };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for(var k in this.storage){
    if(k === node){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for(var k in this.storage){
    if(k === node){
      delete this.storage[k];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var hasToNodes = false;
  for(var i = 0; i < this.storage[fromNode].connections.length; i++){
    if(this.storage[fromNode].connections[i] === toNode){
      hasToNodes = true;
    }
  }      
  return hasToNodes;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    this.storage[fromNode].connections.push(toNode);
    this.storage[toNode].connections.push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if((this.contains(fromNode) && this.contains(toNode))){
    for(var i = 0; i < this.storage[fromNode].connections.length; i++){
      if(this.storage[fromNode].connections[i] === toNode){
        delete this.storage[fromNode].connections[i]; 
        for(var j = 0; j < this.storage[toNode].connections.length; j++){
          if(this.storage[toNode].connections[j] === fromNode){
            delete this.storage[toNode].connections[j];
          }
        }
      } 
    } 
  }      
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var k in this.storage){
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



