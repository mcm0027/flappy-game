var graphicsComponent = require("../components/graphics/bird.js");
var physicsComponent = require("../components/physics/physics");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.8;
    physics.acceleration.y = -.8;
  
  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  this.components = {
    physics: physics,
    graphics: graphics,
    
  };
};

exports.Bird = Bird;