var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

  context.save();
//  context.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255)+ ', ' + Math.floor(Math.random() * 255)+ ')';
  context.fillStyle = '#ff00bf';
  context.translate(position.x, position.y);
  context.beginPath();
  context.arc(0, 0, .002, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
  context.restore();
  
  context.save();
  //  context.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255)+ ', ' + Math.floor(Math.random() * 255)+ ')';
  context.fillStyle = '#00ffff';
  context.translate(position.x -.2, position.y -1.5);
  context.beginPath();
  context.arc(0, 0, .004, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
  context.restore();
  

};

exports.BirdGraphicsComponent = BirdGraphicsComponent;