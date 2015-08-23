var Queue = function(){
  var obj = {
    count : 0,
    storage : {}
  };
  _.extend(obj, queueMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue : function(){
    if(this.count){
      this.count--;
    }
    var result = this.storage[0];
    var placeHolder;
    for(var i = 0; i < this.count; i++){
      placeHolder = this.storage[i+1];
      this.storage[i] = placeHolder;
    }
    return result;
  },

  size : function(){
    return this.count;
  }
};


