background(148, 255, 219);

/**Buttons**/

//left
fill(237, 237, 237);
stroke(112, 112, 112);
rect(219, 327, 40, 40, 10);

fill(112, 112, 112);
triangle(239, 359, 225, 346, 239, 336);
rect(232, 342, 20, 9, 10);

//down
fill(237, 237, 237);
stroke(112, 112, 112);
rect(263, 327, 40, 40, 10);

fill(112, 112, 112);
triangle(271, 350, 285, 363, 297, 350);
rect(279, 336, 9, 20, 10);

//right
fill(237, 237, 237);
stroke(112, 112, 112);
rect(307, 327, 40, 40, 10);

fill(112, 112, 112);
triangle(330, 359, 342, 346, 330, 336);
rect(314, 342, 20, 9, 10);

//up
fill(237, 237, 237);
stroke(112, 112, 112);
rect(263, 284, 40, 40, 10);

fill(112, 112, 112);
triangle(271, 301, 283, 289, 297, 302);
rect(279, 296, 9, 20, 10);

//space
fill(237, 237, 237);
stroke(112, 112, 112);
rect(63, 327, 141, 40, 10);

textSize(26);
fill(112, 112, 112);
text("Space", 99, 356);
fill(2, 82, 55);
text("the controls", 119, 246);
text("(stop)", 100, 319);

/**enemy**/

var ree = 71;

noStroke();
fill(224, 13, 224);
rect(ree, ree,40, 66, 10);
    
fill(255, 232, 79);
ellipse(ree + 9, ree + 56, 10, 10);
ellipse(ree + 30 ,ree + 56, 10, 10);
    
fill(199, 14, 199);
rect(ree + 2, ree + 2, 36, 43, 10);

fill(2, 82, 55);
text("The enemy", 22, 56);

/**Car**/

var car = function (x, y) {
    this.x = x;
    this.y = y;
};

car.prototype.show = function() {
    
    //body
    noStroke();
    fill(42, 209, 235);
    rect(this.x, this.y, 57, 100, 10);
    
    fill(34, 190, 214);
    rect(this.x + 6, this.y + 31, 45, 62, 10);
    
    //lights
    noStroke();
    fill(255, 243, 107);
    ellipse(this.x + 12, this.y + 7, 10, 10);
    
    fill(255, 243, 107);
    ellipse(this.x + 45, this.y + 7, 10, 10);
};

var CAR = new car(300, 72);

draw = function() {
    CAR.show();
};

text("you", 307, 55);

/**back**/

fill(196, 196, 196);
rect(96, 173, 183, 44, 20);

fill(20, 89, 6);
text("click to continue", 98, 203);


