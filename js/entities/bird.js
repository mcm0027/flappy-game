var graphicsComponent = require("../components/graphics/bird.js");
var physicsComponent = require("../components/physics/physics");
//var collisionComponent = require("../components/collision/circle");

var Bird = function(accY, accX, posY, posX) {
  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.y = posY;
  physics.acceleration.y = accY;
  physics.acceleration.x = accX;
  physics.position.x = posX || (-1.2 * Math.random()) + (Math.random()*1.2);
  
  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
//  var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
  
  this.components = {
    physics: physics,
    graphics: graphics,
//    collision: collision
  };
};
//
//Bird.prototype.onCollision = function(entity) {
//    console.log("Bird collided with entity:" + entity);
//};

exports.Bird = Bird;