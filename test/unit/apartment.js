/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';
var Mongo = require('mongodb');
var connection = require('../../app/lib/connect');
var expect = require('chai').expect;
var Apartment = require('../../app/models/apartment');
var Room = require('../../app/models/room');
var Renter = require('../../app/models/renter');

var a1, a2;

describe('Apartment', function() {
  before(function(done){
    connection('property-manager-test', function(){
      done();
    });
  });
  beforeEach(function(done){
    Apartment.collection.remove(function(){
      a1 = new Apartment('A1');
      var b1 = new Room('bedroom', 10, 20);
      var b2 = new Room('bedroom', 25, 25);
      var b3 = new Room('bedroom', 30, 15);
      var k1 = new Room('kitchen', 5, 10);
      var l1 = new Room('living', 45, 30);
      var bob = new Renter('Bob', 22, 'M', 'Coder');
      var amy = new Renter('Amy', 25, 'F', 'Flight Attendant');
      a1.rooms.push(b1, b2, b3, k1, l1);
      a1.renters.push(bob, amy);

      a2 = new Apartment('A2');
      var b4 = new Room('bedroom', 30, 25);
      var b5 = new Room('bedroom', 15, 45);
      var k2 = new Room('kitchen', 25, 15);
      var l2 = new Room('living', 25, 10);
      a2.rooms.push(b4, b5, k2, l2);

      a1.save(function(){
        a2.save(function(){
          done();
        });
      });
    });
  });
  describe('constructor', function() {
    it('should create a new Apartment object', function() {
      var apartment = new Apartment('e2');
      debugger;

      expect(apartment).to.be.instanceof(Apartment);
      expect(apartment.name).to.equal('e2');
      expect(apartment.rooms).to.have.length(0);
      expect(apartment.renters).to.have.length(0);
    });
  });
  describe('#save', function(){
    it('should add an apartment to the database', function(){
      expect(a1._id).to.be.instanceof(Mongo.ObjectID);
    });
  });
  describe('#area', function(){
    it('should calculate the area of an apartment', function(){
      expect(a1.area()).to.equal(2675);
    });
  });
  describe('#cost', function() {
    it('should calculate the cost of an apartment', function() {
      expect(a1.cost()).to.equal(13375);
    });
  });
});
