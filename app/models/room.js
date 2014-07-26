'use strict';

var Room = function(name, length, width){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
};

Room.prototype.area = function() {
  return this.length * this.width;
};

module.exports = Room;
