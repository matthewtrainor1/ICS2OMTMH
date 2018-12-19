/**
If you click LEFT then you move left
if you click RIGHT then you move right
**/

background(41, 41, 41);

//varibles
var m = [23, 160, 296];

//      3rd   1st 2nd
var l = [279, 12, 147];

var q = 239;

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
    var car = new Car (m[0],q);
    car.draw ();
};
var c2 = function () {
    carthing = 2;
    var car = new Car (m[1],q);
    car.draw ();
};
var c3 = function () {
    carthing = 3;
    fill(41, 41, 41);
    rect(l[2], q, 100, 400);
    var car = new Car (m[2],q);
    car.draw ();
};

var w = function () {
    noStroke();
    fill(41, 41, 41);
    rect(l[2], q, 100, 400);
    rect(l[1], q, 100, 400);
    rect(l[0], q, 100, 400);
};

//the button

c1 ();

keyPressed = function () {
    //To go left
    
    if(carthing === 1 && keyCode === RIGHT) {
        w();
        c2();
    }
    else if(carthing === 2 && keyCode === RIGHT) {
        w();
        c3 ();
    }
    //To go right

    else if(carthing === 2 && keyCode === LEFT) {
        w();
        c1 ();
    }
    else if(carthing === 3 && keyCode === LEFT) {
        w();
        c2 ();
    }
};

//the lines
fill(250, 250, 70);
rect(130, 0, 10, 400);
rect(260, 0, 10, 400);
