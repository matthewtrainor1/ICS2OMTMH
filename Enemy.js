/**Var**/

var w = 346;
var idk = -5100;

var Death = function() {
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
    

};

var BackGround = function () {
    
    background(41, 41, 41);
    
    for (var c = 0; c < 3; c++) {
        for (var r = 0; r < 50; r++) {
            fill(255, 255, 0);
            rect(100 * c + 100, -107 * r + w, 10, 45);
        }
    }
    
    noStroke();
    fill(238, 255, 0);
    rect(0,idk + 78, 400, 63);
    
    for(var b = 0; b < 3; b++) {
        for(var m = 0; m < 16; m++) {
            for(var a = 0; a < 2; a++) {
    
            var w = 13;
            
            fill(255, 0, 0);
            rect(26 * m, 25 * b + 78 + idk, w, w);
            
            fill(0, 255, 30);
            rect(39 * m + 13, 25 * a + 91 + idk, w, w);
            
            fill(0, 225, 255);
            rect(39 * m, 24 * a + 91 + idk, w, w);
            
            fill(255, 162, 0);
            rect(78 * m + 65, 78 + idk, w, w + 50);
            
            }
        }
    }
    
    if(idk > 330) {
        //win screen
        background(255, 209, 209);
    }
};

var a = [30, 135, 235, 340];

var Speed = 2.0;

/**enemy**/

var enemy = function(x,y) {
    this.x = x;
    this.y = y;
};

enemy.prototype.move = function(){
    this.y += Speed + 0.5;
    if (this.y > 550){
        this.y = random(-60,-500);
    }
    if(idk > -130) {
        this.y = -200;
    }
};

enemy.prototype.show = function(){
    
    noStroke();
    fill(224, 13, 224);
    rect(this.x, this.y,40, 66, 10);
    
    fill(255, 232, 79);
    ellipse(this.x + 9, this.y + 56, 10, 10);
    ellipse(this.x + 30, this.y + 56, 10, 10);
    
    fill(199, 14, 199);
    rect(this.x + 2, this.y + 2, 36, 43, 10);
};

/**enemy 2**/
var q = 0;
var z = -400;
var c = -600;
var k = -800;

var roadKill = new enemy(a[2], q);
var roadDeath = new enemy(a[0], z);
var roadMurder = new enemy(a[3], c);
var roadIdk = new enemy(a[1], k);

/**draw**/

draw = function() {
    BackGround();
    roadKill.move();
    roadKill.show();
    roadDeath.move();
    roadDeath.show();
    roadMurder.move();
    roadMurder.show();
    roadIdk.move();
    roadIdk.show();
    w += Speed;
    idk += Speed;
};
