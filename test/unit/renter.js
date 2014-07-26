/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Renter = require('../../app/models/renter');

describe('Renter', function(){
  describe('constructor', function(){
    it('should construct a renter object', function(){
      var mikey = new Renter('Mikey', '30', 'M', 'coder');

      expect(mikey).to.be.instanceof(Renter);
      expect(mikey.name).to.equal('Mikey');
      expect(mikey.age).to.equal(30);
      expect(mikey._isEvicted).to.be.false;
      expect(mikey.profession).to.equal('coder');
      expect(mikey.gender).to.equal('m');
      expect(mikey._cash).to.be.within(500, 1000);
    });
  });

  describe('#work', function() {
    it('should give the renter some cash', function() {
      var miguel = new Renter('Miguel', 26, 'M', 'Bartender');
      miguel._cash = 0.0; //broke
      miguel.work();
      expect(miguel._cash).to.be.within(2000, 4000);
    });
  });
});
