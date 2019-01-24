/**Background**/


var w = 346;

var idk = -5100;

var Death = function() {
    background(184, 11, 11);
    
    /**variables**/
    
    var t = random(0,5);
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
    else if (t < 5) {
        background(0, 0, 0);
    fill(0, 123, 255);
    rect(62,92,305,117);
    fill(245, 218, 44);
    textSize(63);
    text("#2",62, 177);
    textSize(50);
   fill(255, 255, 255);
    text("CHOKE", 121, 138);
    text("ROYALE!", 147, 183);
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
        image(getImage("avatars/mr-pants-with-hat"),x + 127, y + 85, k, k);
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
        background(0, 0, 0);
    fill(0, 123, 255);
    rect(62,92,305,117);
    fill(255, 221, 0);
    textSize(66);
    text("#1",63, 175);
    textSize(50);
   fill(255, 255, 255);
    text("VICTORY", 121, 138);
    text("ROYALE!", 147, 183);
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

enemy.prototype.checkForCarGrab = function (car) {
    if ((car.x + 90>= this.x && car.x <= (this.x)) &&
        (car.y + 30>= this.y && car.y <= (this.y))) {
            draw = function() {
                Death();
            };
        }
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

/**car**/

var car = function (x, y) {
    this.x = x;
    this.y = y;
};

car.prototype.move = function() {
    
    var carSpeed = 2.2;
    
    //side to side
    if(keyCode === RIGHT) {
        this.x += carSpeed;
    }
    if(keyCode === LEFT) {
        this.x -= carSpeed;
    }
    if(this.x < 10) {
        this.x = 10;
    }
    if(this.x > 330) {
        this.x = 330;
    }
    
    //up and down
    if(keyCode === UP) {
        this.y -= carSpeed;
    }
    if(keyCode === DOWN) {
        this.y += carSpeed + 0.6;
    }
    if(this.y < 10) {
        this.y = 10;
    }
    if(this.y > 290) {
        this.y = 290;
    }
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

var CAR = new car(10, 290);

/**draw**/

draw = function() {
    BackGround();
    roadKill.move();
    roadKill.show();
    roadKill.checkForCarGrab(CAR);
    roadDeath.move();
    roadDeath.show();
    roadDeath.checkForCarGrab(CAR);
    roadMurder.move();
    roadMurder.show();
    roadMurder.checkForCarGrab(CAR);
    roadIdk.move();
    roadIdk.show();
    roadIdk.checkForCarGrab(CAR);
    
    CAR.move();
    CAR.show();
    
    w += Speed;
    idk += Speed;
};
                
