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
      var jobs = [
        { title: 'Coder', minPay: 5000, maxPay: 7000 },
        { title: 'Bartender', minPay: 2000, maxPay: 4000 },
        { title: 'SEO Wizard', minPay: 5000, maxPay: 7000 },
        { title: 'Flight Attendant', minPay: 1000, maxPay: 5000 }
      ];

      for (var i=0; i<jobs.length; i++) {
        var miguel = new Renter('Miguel', 26, 'M', jobs[i].title);
        miguel._cash = 0.0; //broke
        miguel.work();
        expect(miguel._cash).to.be.within(jobs[i].minPay, jobs[i].maxPay);
      }
    });
  });

  describe('#payRent', function() {
    it('should pay the rent if renter has enough cash', function(){
      var miguel = new Renter('Miguel', 26, 'M', 'Bartender');
      miguel._cash = 2000;
      miguel.payRent(1500);

      expect(miguel._isEvicted).to.be.false;
      expect(miguel._cash).to.be.below(2000);
    });
    it('should evict the renter if renter is broke', function() {
      var miguel = new Renter('Miguel', 26, 'M', 'Bartender');
      miguel._cash = 200;
      miguel.payRent(1500);

      expect(miguel._isEvicted).to.be.true;
      expect(miguel._cash).to.equal(200);
    });
  });

  describe('#party', function(){
    it('should allow the renter to party and not get evicted', function(){
      var miguel;
      while(true){
        miguel = new Renter('Miguel', 26, 'M', 'Bartender');
        miguel._isEvicted = false;
        miguel.party();
        if(!miguel._isEvicted){break;}
      }

      expect(miguel._isEvicted).to.be.false;
    });
    it('should allow the renter to party but unfortunately get evicted', function(){
      var miguel;
      while(true){
        miguel = new Renter('Miguel', 26, 'M', 'Bartender');
        miguel._isEvicted = false;
        miguel.party();
        if(miguel._isEvicted){break;}
      }

      expect(miguel._isEvicted).to.be.true;
    });
  });
});
