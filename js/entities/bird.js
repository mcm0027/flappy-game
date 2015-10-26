var graphicsComponent = require("../components/graphics/bird.js");

var Bird = function() {
  console.log("Creating Bird entity");
  
  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  this.compnents = {
    graphics: graphics;
    
  };
};

exports.Bird = Bird;