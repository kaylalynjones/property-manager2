/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Apartment = require('../../app/models/apartment');

describe('Apartment', function() {
  describe('constructor', function() {
    it('should create a new Apartment object', function() {
      var apartment = new Apartment('B2');

      expect(apartment).to.be.instanceof(Apartment);
      expect(apartment.name).to.equal('B2');
      expect(apartment.rooms).to.have.length(0);
      expect(apartment.renters).to.have.length(0);
    });
  });
});
