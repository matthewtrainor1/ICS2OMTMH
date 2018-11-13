/** the sky **/
background(181, 246, 255);

var x = 203;
var y = 200;

/** sun **/
var sun = 272;
var xx = -3;

noStroke ();
fill(253, 255, 122);
ellipse(x + xx, y + 20, sun, sun);
fill(252, 255, 150);
ellipse(x + xx, y + 20, sun - 20, sun - 20);
fill(254, 255, 178);
ellipse(x + xx, y + 20, sun - 40, sun - 40);
fill(252, 252, 192);
ellipse(x + xx, y + 20, sun - 60, sun - 60);

/** the ground **/
var grass = 300;

noStroke ();
fill(136, 255, 112);
ellipse(x, y + 217, grass + 324, grass);

/** Title **/
var Title = "Race Royal";
var se = 20;

fill(255, 154, 66);
textSize(36);
text(Title, x - 101, y - 149);

//line
rect(x - 107, y - 141, 198, 4, 20);
rect(x - 107, y - 184, 198, 4, 20);

//cool object thing
rect(x - 157, y - 170, se, se, -30);
rect(x + 120, y - 170, se, se, -30);

/**options **/
var op = ["Start","Options","Close"];

for (var i = 0; i < 3; i++) {
    fill(112, 112, 112);
    text(op[i],x + -55, y + i*39 + 107);
}


