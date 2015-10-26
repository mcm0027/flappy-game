var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  context.beginPath();
  context.arc(30, 100, 10, 0, 2 * Math.PI);
  context.fill();
  
  context.beginPath();
  context.arc(300, 150, 30, 0, 2 * Math.PI);
  context.fill();
  
  context.shadowColor = "black";
  context.shadowBlur = 10;

  context.fillStyle = "white";
  context.fillRect(10, 10, 100, 100);
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;