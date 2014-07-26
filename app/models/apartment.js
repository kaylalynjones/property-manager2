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

Apartment.prototype.rent = function(){
  return this.area() * 7;
};

Apartment.prototype.revenue = function(){
  if(!this.renters.length){return 0;}

  var rev = this.rent() - this.cost();
  return rev;
};

Apartment.prototype.isAvailable = function() {
  var availableRooms = 0;
  for (var i=0; i<this.rooms.length; i++) {
    if (this.rooms[i].isBedroom()) {
      availableRooms++;
    }
  }
  if (availableRooms > this.renters.length) {
    return true;
  }

  return false;
};

Apartment.prototype.purge = function(){
  //var temp = [];
  //for(var i=0; i<this.renters.length; i++){
    //if(!this.renters[i]._isEvicted){
      //temp.push(this.renters[i]);
    //}
  //}
  //this.renters = temp;

  this.renters = this.renters.filter(function(renter) {
    return !renter._isEvicted;
  });
};

Apartment.prototype.collectRent = function(){
  var rent = this.rent()/this.renters.length;
  var amtCollected = 0;

  for(var i=0; i<this.renters.length; i++){
    amtCollected += this.renters[i].payRent(rent);
  }
  return amtCollected;
};

module.exports = Apartment;
