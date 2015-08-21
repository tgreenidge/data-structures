var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var currentCount = 0;
  var obj = {
    count : 0,
    storage: {}
    };
  _.extend(obj, stackMethods);
  return obj;
};


var stackMethods = { 
  push : function(value){
  this.storage[this.count] = value; 
  this.count++;      
}, 
pop : function(){
  if(this.count){
    this.count--;
  };
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
},
size : function(){
  return this.count;
}
};



