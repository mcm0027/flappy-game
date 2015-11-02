var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
    this.entities = entities;
};


PipeSystem.prototype.run = function() {
    // Run the update loop
    window.setInterval(this.tick.bind(this), 300000 /60);
    console.log(this);
};

PipeSystem.prototype.tick = function() {
  this.entities.push(new pipe.Pipe());

};

exports.PipeSystem = PipeSystem;