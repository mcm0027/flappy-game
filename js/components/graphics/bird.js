var BirdGraphicsComponent = function(entity) {
  this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
  context.beginPath();
  context.arc(50, 50, 10, 0, 2 * Math.PI);
  context.fillStyle = "rgb(144, 195, 212)"
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;