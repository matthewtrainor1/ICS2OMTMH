background(184, 11, 11);

/**variables**/

var t = random(0,4);
var p = random(0,4);

var textS = 25;
var k = 150;

var y = 0;
var x = 0;

var Yspace = 311;

/**the mesage**/

if (t < 0) {
    fill(0, 0, 0);
    textSize(textS);
    text("You got this", x + 149, y + Yspace);
}
else if (t < 1) {
    fill(0, 0, 0);
    textSize(textS);
    text("Stay determind", x + 120, y + Yspace);
}
else if (t < 2) {
    fill(0, 0, 0);
    textSize(textS);
    text("Opps! Try again", x + 116, y + Yspace);
}
else if (t < 3) {
    fill(0, 0, 0);
    textSize(textS);
    text("Game Over", x + 140, y + Yspace);
}
else if (t < 4) {
    fill(0, 0, 0);
    textSize(textS);
    text("Try again, good luck!", x + 87, y + Yspace);
}

/**The try again**/

//The rectangle
noStroke ();
fill(150, 150, 150);
rect(x + 125, y + 338, 155, 40);

draw = function() {
    //The Real button
    
    if (mouseIsPressed && mouseY < 375 && mouseY > 340 && mouseX < 270 && mouseX > 129) {
        noStroke ();
        fill(150, 150, 150);
        rect(x + 125, y + 338, 155, 40);
    }
    
    //The text

    fill(0, 0, 0);
    textSize(42);
    text("Restart", x + 134, y + 372);

};

/**Picture**/

if(p < 0) {
    image(getImage("creatures/OhNoes"),x + 124, y + 85, k, k);
}
else if (p < 1) {
    image(getImage("avatars/marcimus-orange"),x + 124, y + 85, k, k);
}
else if (p < 2) {
    image(getImage("avatars/avatar-team"),x + 103, y + 85, k + 48, k);
}
else if (p < 3) {
    image(getImage("avatars/mr-pants-purple"),x + 127, y + 85, k, k);
}
else if (p < 4) {
    image(getImage("avatars/mr-pink-green"),x + 127, y + 85, k, k);
}
