var bird = require('../entities/bird');

var BirdSystem = function(entities) {
  this.entities = entities;
};


BirdSystem.prototype.run = function() {
  // Run the update loop
  window.setInterval(this.tick.bind(this), 60000 /60);

};

BirdSystem.prototype.tick = function() {
  this.entities.push(new bird.Bird(.5, 0, 0));
//  this.entities.push(new bird.Bird(.5, .6, (Math.random()*-.5), -1.5));
  this.entities.push(new bird.Bird(.3, 0, .5, 1));
  this.entities.push(new bird.Bird(.3, 0, .1, -.2));
  this.entities.push(new bird.Bird(.3, 0, .7, -.7));
};

exports.BirdSystem = BirdSystem;