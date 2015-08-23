var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
//check to see if item is in storage
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      return true; 
    }  
  }
 return false;
};

setPrototype.remove = function(item){
//loop through storage 
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      delete this._storage[i]; 
    }  
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
