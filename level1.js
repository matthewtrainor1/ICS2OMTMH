/**Background**/

var w = 346;

var idk = -5100;

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

enemy.prototype.checkForCarGrab = function (car) {
    if ((car.x + 100>= this.x && car.x <= (this.x)) &&
        (car.y + 30>= this.y && car.y <= (this.y))) { 
            //death screen
            fill(255, 0, 0);
            ellipse(200, 200, 700, 700);
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
    
    if(keyCode === RIGHT) {
        this.x += 2.2;
    }
    if(keyCode === LEFT) {
        this.x -= 2.2;
    }
    if(this.x < 10) {
        this.x = 10;
    }
    if(this.x > 330) {
        this.x = 330;
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
                
    
