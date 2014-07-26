'use strict';

var Mongo = require('mongodb');

var Apartment = function(name) {
  this.name = name;
  this.rooms = [];
  this.renters = [];
};


//getter
Object.defineProperty(Apartment, 'collection',{
  get: function(){
    return global.mongodb.collection('apartments');
  }
});

Apartment.prototype.save = function(cb) {
  Apartment.collection.save(this, cb);
};

Apartment.prototype.area = function() {
  var area = 0;
  for (var i=0; i<this.rooms.length; i++) {
    area += this.rooms[i].area();
  }
  return area;
};

Apartment.prototype.cost = function(){
  var cost = 0;
  for(var i=0; i<this.rooms.length; i++){
    cost += this.rooms[i].cost();
  }
  return cost;
};

Apartment.prototype.revenue = function(){
  if(!this.renters.length){return 0;}

  var rent = this.area() * 7;
  var rev = rent - this.cost();
  return rev;
};
module.exports = Apartment;
