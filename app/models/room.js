'use strict';

var Room = function(name, length, width){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
};

module.exports = Room;
