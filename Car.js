/**
Right now the car will move if you click the mouse anywhere.
If you want to change anything feel free too, 
(but be sure to update the Github)
**/

background(41, 41, 41);


//varibles
var m = [23,160,296];

var q = 234;

//car thing
var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

var CAR = function(x ,y) {
    Car.call(this, x, y);
};

CAR.prototype = Object.create(Car.prototype);

Car.prototype.draw = function() {
    
    //var
    var Cbody = 80;
    
    //Body
    noStroke ();
    fill(255, 64, 64);
    rect(this.x, this.y, Cbody, Cbody + 56, 14);
    
    //lights
    fill(249, 255, 166);
    ellipse(this.x + 13, this.y + 5, Cbody - 70, Cbody - 70);
    ellipse(this.x + 66, this.y + 5, Cbody - 70, Cbody - 70);
    
    //Inside
    fill(252, 98, 98);
    rect(this.x + 8, this.y + 21, Cbody - 16, Cbody + 9, 14);
    
    //Windsheild
    noStroke ();
    fill(255, 178, 178);
    rect(this.x + 4, this.y + 16, Cbody - 8, Cbody - 55);
    fill(255, 209, 209);
    rect(this.x + 8, this.y + 21, Cbody - 16, Cbody - 50, 14);
    fill(252, 98, 98);
    rect(this.x + 8, this.y + 41, Cbody - 16, Cbody - 65);
    
    //Seat
    fill(51, 51, 51);
    rect(this.x + 13, this.y + 65, Cbody - 25, Cbody - 49, 14);
    fill(71, 71, 71);
    rect(this.x + 13, this.y + 84, Cbody - 25, Cbody - 64, 14);
    
};

var carthing;

var c1 = function () {
    carthing = 1;
    noStroke ();
    fill(41, 41, 41);
    rect(279, q, 100, 400);
    var car = new Car (m[0],q);
    car.draw ();
};

var c2 = function () {
    carthing = 2;
    noStroke ();
    fill(41, 41, 41);
    rect(12, q, 100, 400);
    var car = new Car (m[1],q);
    car.draw ();
};

var c3 = function () {
    carthing = 3;
    noStroke ();
    fill(41, 41, 41);
    rect(147, q, 100, 400);
    var car = new Car (m[2],q);
    car.draw ();
};


//the button

c1 ();

mouseClicked = function(){
  if(carthing === 1) {
      c2 ();
  }
  else if(carthing === 2) {
      c3 ();
  }
  else if(carthing === 3) {
      c1 ();
  }
};

//the lines
fill(250, 250, 70);
rect(130, 0, 10, 400);
rect(260, 0, 10, 400);

/** The middles
1st lane ==== 23
2nd lane ==== 160
2rd lane ==== 296
**/
