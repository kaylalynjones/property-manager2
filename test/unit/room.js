/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room');

describe('Room', function(){
  describe('constructor', function() {
    it('should create a new Room object', function() {
      var name = 'closet';
      var length = 24;
      var width = 35;

      var room = new Room(name, length, width);

      expect(room).to.be.instanceof(Room);
      expect(room.name).to.equal(name);
      expect(room.length).to.equal(length);
      expect(room.width).to.equal(width);
    });
  });
});
