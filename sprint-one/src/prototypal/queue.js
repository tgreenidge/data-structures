var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
},

queueMethods.dequeue = function(){
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

queueMethods.size = function(){
  return this.count;
}
