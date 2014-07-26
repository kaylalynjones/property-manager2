'use strict';

var Room = function(name, length, width){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.bedroom = null;
};

Room.prototype.area = function() {
  return this.length * this.width;
};

Room.prototype.cost = function(){
  return this.area() * 5;
};

Room.prototype.isBedroom = function() {
  if (this.bedroom === null) {
    this.bedroom = this.name.indexOf('bed') > -1;
  }

  return this.bedroom;
};

module.exports = Room;
