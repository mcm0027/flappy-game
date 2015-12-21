var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
  
  this.dimension = {
    width:0.1,
    height: 0.5
  }
};



PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
  
 
//  context.save();
//  context.translate(position.x, position.y);
//  context.beginPath();
//  context.fillRect(1.2,.2, 0.1, 0.5);
//  context.fill();
//  context.closePath();
//  context.restore();
  
  context.save();
  context.translate(position.x, position.y);
  context.beginPath();
  context.fillRect(1.2, -.2, 0.1, 0.5);
  context.fill();
  context.closePath();
  context.restore();

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;