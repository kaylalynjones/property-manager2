/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room');

describe('Room', function(){
  describe('constructor', function() {
    it('should create a new Room object', function() {
      var room = new Room('closet', 24, '35');

      expect(room).to.be.instanceof(Room);
      expect(room.name).to.equal('closet');
      expect(room.length).to.equal(24);
      expect(room.width).to.equal(35);
      expect(room.bedroom).to.be.null;
    });
  });

  describe('#area', function() {
    it('should calculate the area of a room', function() {
      var r1 = new Room('living', 12, 12);

      expect(r1.area()).to.equal(144);
    });
  });

  describe('#cost', function() {
    it('should calculate the cost of a room', function() {
      var r2 = new Room('bedroom', 8, 10);

      expect(r2.cost()).to.equal(8 * 10 * 5);
    });
  });

  describe('#isBedroom', function(){
    it('should determine if room is a bedroom', function(){
      var r1 = new Room('living', 12, 12);
      var r2 = new Room('bedroom', 8, 10);

      expect(r1.isBedroom()).to.be.false;
      expect(r2.isBedroom()).to.be.true;
    });
  });
});
