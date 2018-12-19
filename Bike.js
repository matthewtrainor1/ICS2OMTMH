background(41, 41, 41);

//Vairables

var m = [66,200,338];

//      3rd   1st 2nd
var l = [279, 12, 147];

var q = 340;
var k = 80;

var BC = color(20, 199, 25);
var SC = color(64, 28, 5);

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
    fill(BC);
    ellipse(this.x, this.y + 18, 27, 44);
    
    //seat
    noStroke ();
    fill(SC);
    ellipse(this.x, this.y - 16, 25, 48);
    
    //anther body
    noStroke ();
    fill(BC);
    ellipse(this.x, this.y - 50, 20, 39);
    
    //handle bars
    noStroke ();
    fill(204, 204, 204);
    ellipse(this.x, this.y - 55, 67, 9);
    
    noStroke ();
    fill(37, 56, 107);
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

var w = function () {
    noStroke();
    fill(41, 41, 41);
    rect(l[2], q - k, 100, 600);
    rect(l[1], q - k, 100, 600);
    rect(l[0], q - k, 100, 600);
};


b1();

keyPressed = function () {
    //To go left
    
    if(bikething === 1 && keyCode === RIGHT) {
        w();
        b2();
    }
    else if(bikething === 2 && keyCode === RIGHT) {
        w();
        b3 ();
    }
    //To go right
    else if(bikething === 2 && keyCode === LEFT) {
        w();
        b1 ();
    }
    else if(bikething === 3 && keyCode === LEFT) {
        w();
        b2 ();
    }
};
 
 //the lines
fill(250, 250, 70);
rect(130, 0, 10, 400);
rect(260, 0, 10, 400);
