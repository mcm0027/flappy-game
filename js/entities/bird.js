var graphicsComponent = require("../components/graphics/bird.js");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.8;
    physics.acceleration.y = -.8;
  
  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this);
  
  this.components = {
    physics: physics,
    graphics: graphics,
    collision: collision
  };
};

Bird.prototype.onCollision = function(entity) {
    console.log("Bird collided with entity:", entity);
};

exports.Bird = Bird;