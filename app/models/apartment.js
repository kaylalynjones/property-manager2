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

module.exports = Apartment;
