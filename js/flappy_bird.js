var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
//var pipeSystem = require('./systems/pipes');
var birdSystem = require('./systems/birds')
var bird = require('./entities/bird');
//var pipe = require('./entities/pipe');

var FlappyBird = function() {
  this.entities = [];
  this.birds = new birdSystem.BirdSystem(this.entities);
  this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
  this.physics = new physicsSystem.PhysicsSystem(this.entities);
  this.input = new inputSystem.InputSystem(this.entities);
//  this.pipes = new pipeSystem.PipeSystem(this.entities);

  
};

FlappyBird.prototype.run = function() {
  this.graphics.run();
  this.physics.run();
  this.input.run();
  this.birds.run();
//  this.pipes.run();
};


exports.FlappyBird = FlappyBird;