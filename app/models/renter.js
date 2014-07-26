'use strict';

var Renter = function(name, age, gender, profession) {
  this.name = name;
  this.age = parseInt(age);
  this.gender = gender.toLowerCase();
  this.profession = profession;
  this._cash = Math.floor(Math.random() * 501) + 500;
  this._isEvicted = false;
};

Renter.prototype.work = function() {
  debugger;
  switch(this.profession){
    case 'Coder':
      this._cash += (Math.floor(Math.random() * 2001) + 5000).toFixed(2);
      break;
    case 'Bartender':
      this._cash += (Math.floor(Math.random() * 2001) + 2000).toFixed(2);
      break;
    case 'SEO Wizard':
      this._cash += (Math.floor(Math.random() * 2001) + 5000).toFixed(2);
      break;
    case 'Flight Attendant':
      this._cash += (Math.floor(Math.random() * 4001) + 1000).toFixed(2);
      break;
    default:
      console.log('does not have a job');
  }

};

module.exports = Renter;
