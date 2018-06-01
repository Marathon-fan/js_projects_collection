
// problems

// 1 rigidity
// 2 fragility
// 3 immobility


// SRP --

function Circle(radius){
  this.radius = radius;
}

function Square(length){
  this.length = length;
}

function AreaCalculator(shapes){
  this.shapes = shapes;
}

AreaCalculator.prototype.sum  = function(){

};

AreaCalculator.prototype.output = function(){
  return 'The sum of all shapes is ' + this.sum() + '.';
};


// OCP ----------------------------------------
// be able to extend a class without modifying it

AreaCalculator.prototype.sum = function() {
  var areasArray = this.shapes.map(function(shape){
    if (shape instanceof Square){
      return Math.pow(shape.length, 2);
    } else if (shape instanceof Circle){
      return Math.PI * Math.pow(shape.radius, 2);
    }
  });

  return areasArray.reduce(function(acc, cur){
    return acc + cur;
  });
}

Square.prototype.area = function(){
  return Math.pow(this.length, 2);
};

Circle.prototype.area = function(){
  return Math.PI * Math.pow(this.radius, 2);
};

AreaCalculator.prototype.sum = function(){
  var areasArray = this.shapes.map(function(shape){
    return shape.area();
    });
  return areasArray.reduce(function(acc, cur){
        return acc + cur;
  });
};

//-- LSP



//-- ISP



//-- DIP

/*

var Picture = function(color, bg){
  this.shape = new Shape(); // very bad sign!!!
  this.shape.setColor(color);
  this.background = bg;
}

*/

 var Picture = function(shape, color, bg){
   this.shape = shape;
   shape.setColor(color);
   this.background = bg;
 }
 var triangle = new Triangle(5, 9);
 var picture = new Picture(triangle, 'blue', 'green');





