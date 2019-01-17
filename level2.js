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

var Speed = 2.0;

/**car**/

var car = function (x, y) {
    this.x = x;
    this.y = y;
};

car.prototype.move = function() {
    var Randoms = random(0, 500);
    var Barreir = [10, 290, 14, 330];
    var randomSpeed = random(0.5, 3.0);
    
    //Move
    if(Randoms < 250 && keyCode === UP) {
        this.y -= randomSpeed + 0.2;
    }
    if(Randoms > 250 && keyCode === UP) {
        this.y += randomSpeed;
    }
    //Barreir
    if(this.y < Barreir[0]) {
        this.y = Barreir[0];
    }
    if(this.y > Barreir[1]) {
        this.y = Barreir[1];
    }
    if(this.x < Barreir[2]) {
        this.x = Barreir[2];
    }
    if(this.x > Barreir[3]) {
        this.x = Barreir[3];
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

/**computer car**/

var comCar = function (x, y) { 
    this.x = x;
    this.y = y;
};

comCar.prototype.move = function() {
    var Randoms = random(0, 500);
    var Barreir = [10, 290, 14, 330];
    var randomSpeed = random(0.5, 3.0);
    
    //Move
    if(Randoms < 250) {
        this.y -= randomSpeed + 0.2;
    }
    if(Randoms > 250) {
        this.y += randomSpeed;
    }
    
    //Barreir
    if(this.y < Barreir[0]) {
        this.y = Barreir[0];
    }
    if(this.y > Barreir[1]) {
        this.y = Barreir[1];
    }
    if(this.x < Barreir[2]) {
        this.x = Barreir[2];
    }
    if(this.x > Barreir[3]) {
        this.x = Barreir[3];
    }
};

comCar.prototype.show = function() {
    
    //body
    noStroke();
    fill(235, 42, 42);
    rect(this.x, this.y, 57, 100, 10);
    
    fill(212, 34, 34);
    rect(this.x + 6, this.y + 31, 45, 62, 10);
    
    //lights
    noStroke();
    fill(255, 243, 107);
    ellipse(this.x + 12, this.y + 7, 10, 10);
    
    fill(255, 243, 107);
    ellipse(this.x + 45, this.y + 7, 10, 10);
};

var Computer = new comCar(227, 290);

/**computer car1**/

var comCar1 = function (x, y) { 
    this.x = x;
    this.y = y;
};

comCar1.prototype.move = function() {
    var Randoms = random(0, 500);
    var Barreir = [10, 290, 14, 330];
    var randomSpeed = random(0.5, 3.0);
    
    //Move
    if(Randoms < 250) {
        this.y -= randomSpeed + 0.2;
    }
    if(Randoms > 250) {
        this.y += randomSpeed;
    }
    
    //Barreir
    if(this.y < Barreir[0]) {
        this.y = Barreir[0];
    }
    if(this.y > Barreir[1]) {
        this.y = Barreir[1];
    }
    if(this.x < Barreir[2]) {
        this.x = Barreir[2];
    }
    if(this.x > Barreir[3]) {
        this.x = Barreir[3];
    }
};

comCar1.prototype.show = function() {
    
    //body
    noStroke();
    fill(187, 42, 235);
    rect(this.x, this.y, 57, 100, 10);
    
    fill(159, 36, 212);
    rect(this.x + 6, this.y + 31, 45, 62, 10);
    
    //lights
    noStroke();
    fill(255, 243, 107);
    ellipse(this.x + 12, this.y + 7, 10, 10);
    
    fill(255, 243, 107);
    ellipse(this.x + 45, this.y + 7, 10, 10);
};

var Computer1 = new comCar1(127, 290);

/**computer car2**/

var comCar2 = function (x, y) { 
    this.x = x;
    this.y = y;
};

comCar2.prototype.move = function() {
    var Randoms = random(0, 500);
    var Barreir = [10, 290, 14, 330];
    var randomSpeed = random(0.5, 3.0);
    
    //Move
    if(Randoms < 250) {
        this.y -= randomSpeed + 0.2;
    }
    if(Randoms > 250) {
        this.y += randomSpeed;
    }
    
    //Barreir
    if(this.y < Barreir[0]) {
        this.y = Barreir[0];
    }
    if(this.y > Barreir[1]) {
        this.y = Barreir[1];
    }
    if(this.x < Barreir[2]) {
        this.x = Barreir[2];
    }
    if(this.x > Barreir[3]) {
        this.x = Barreir[3];
    }
};

comCar2.prototype.show = function() {
    
    //body
    noStroke();
    fill(42, 235, 55);
    rect(this.x, this.y, 57, 100, 10);
    
    fill(36, 212, 62);
    rect(this.x + 6, this.y + 31, 45, 62, 10);
    
    //lights
    noStroke();
    fill(255, 243, 107);
    ellipse(this.x + 12, this.y + 7, 10, 10);
    
    fill(255, 243, 107);
    ellipse(this.x + 45, this.y + 7, 10, 10);
};

var Computer2 = new comCar2(326, 290);

/**draw**/

draw = function() {
    BackGround();
    CAR.move();
    CAR.show();
    Computer.show();
    Computer.move();
    Computer1.show();
    Computer1.move();
    Computer2.show();
    Computer2.move();
    
    w += Speed;
    idk += Speed;
};
                
