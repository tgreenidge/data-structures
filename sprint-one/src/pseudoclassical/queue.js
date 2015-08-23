var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
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
};

Queue.prototype.size = function(){
  return this.count;
}
