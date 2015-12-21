var graphicsComponent = require("../components/graphics/pipe.js");
var physicsComponent = require("../components/physics/physics");
//var collisionComponent = require("../components/collision/rect");

var Pipe = function() {
  var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.x = -.5;
  
  
  var graphics = new graphicsComponent.PipeGraphicsComponent(this);
//  var collision = new collisionComponent.RectCollisionComponent(this, 0.1, 0.5);


  this.components = {
    physics: physics,
    graphics: graphics,
//    collision: collision
    
  };
};

//console.log(collisionComponent.RectCollisionComponent.size);
//
//Pipe.prototype.onCollision = function(entity) {
//};

exports.Pipe = Pipe;