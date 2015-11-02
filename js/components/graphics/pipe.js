var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};



PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
  
 
  context.save();
  context.translate(position.x, position.y);
  context.beginPath();
  context.rect(1.2,.2, .1, .5);
  context.fill();
  context.closePath();
  context.restore();
  
  context.save();
  context.translate(position.x, position.y);
  context.beginPath();
  context.rect(1.2, -.2, .1, -.5);
  context.fill();
  context.closePath();
  context.restore();

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;