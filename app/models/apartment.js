'use strict';

var Apartment = function(name) {
  this.name = name;
  this.rooms = [];
  this.renters = [];
};

module.exports = Apartment;
