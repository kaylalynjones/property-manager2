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
    });
  });
  describe('#area', function(){
    it('should calculate the area of a room', function(){
      var r1 = new Room('living', 12, 12);
      expect(r1.area()).to.equal(144);
    });
  });
});
