var PipeGraphicsComponent = function(entity) {
  this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
  console.log("Draw a pipe.")
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;