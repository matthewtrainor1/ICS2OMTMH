/**New Car**/

var idk = -5100;
var w = 346;

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

var Speed = 2.0;

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

draw = function() {
    BackGround();
    CAR.move();
    CAR.show();
    
    idk += Speed;
    w += Speed;
};

