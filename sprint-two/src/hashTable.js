var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var loc = this._storage.get(i);
  
  if(!loc){
    loc = [];
  };

  this._storage.set(i, loc);
  
  var wasFound = false;
  
  for(var x = 0; x < loc.length; x++){
    if(loc[x][0] === k){
    loc[x][1] = v;
    wasFound = true;
    }
  }
  
  if(!wasFound){
    loc.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var loc = this._storage.get(i);
    
  for(var x = 0; x < loc.length; x++){
    if(loc[x][0] === k){
     return loc[x][1];
    }
  };
  return false;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var loc = this._storage.get(i);
    
  for(var x = 0; x < loc.length; x++){
    if(loc[x][0] === k){
      loc[x][1] = null;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
