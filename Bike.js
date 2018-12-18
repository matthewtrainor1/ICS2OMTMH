background(41, 41, 41);

//Vairables

var m = [66,200,338];

var q = 335;

//Bike thing
var Bike = function (x, y) {
    this.x = x;
    this.y = y;
};

var BIKE = function(x ,y) {
    Bike.call(this, x, y);
};

BIKE.prototype = Object.create(Bike.prototype);

Bike.prototype.draw = function() {
    
    //lights
    fill(255, 238, 56);
    ellipse(this.x - 0, this.y - 66, 13, 13);
    
    //wheel
    fill(0, 0, 128);
    ellipse(this.x, this.y + 29, 20, 40);
    
    //body
    noStroke ();
    fill(255, 102, 0);
    ellipse(this.x, this.y + 18, 27, 44);
    
    //seat
    noStroke ();
    fill(69, 65, 120);
    ellipse(this.x, this.y - 16, 25, 48);
    
    //anther body
    noStroke ();
    fill(255, 102, 0);
    ellipse(this.x, this.y - 50, 20, 39);
    
    //handle bars
    noStroke ();
    fill(204, 204, 204);
    ellipse(this.x, this.y - 55, 67, 9);
    
    noStroke ();
    fill(77, 87, 125);
    ellipse(this.x - 26, this.y - 55, 26, 13);
    ellipse(this.x + 26, this.y - 55, 26, 13);
    
};

var bike = new Bike (m[1] ,q);
 
var bikething;
 
var b1 = function () {
    bikething = 1;
    noStroke ();
    fill(41, 41, 41);
    rect(279, q - 76, 100, 400);
    var bike = new Bike (m[0],q);
    bike.draw ();
};

var b2 = function () {
    bikething = 2;
    noStroke ();
    fill(41, 41, 41);
    rect(12, q- 76, 100, 400);
    var bike = new Bike (m[1],q);
    bike.draw ();
};

var b3 = function () {
    bikething = 3;
    noStroke ();
    fill(41, 41, 41);
    rect(147, q - 76, 100, 400);
    var bike = new Bike (m[2],q);
    bike.draw ();
};

b1();

mouseClicked = function(){
  if(bikething === 1) {
      b2 ();
  }
  else if(bikething === 2) {
      b3 ();
  }
  else if(bikething === 3) {
      b1 ();
  }
};
 
 //the lines
fill(250, 250, 70);
rect(130, 0, 10, 400);
rect(260, 0, 10, 400);
