var rock = getImage("cute/Rock");
var tree = getImage ("cute/TreeTall");
var animal = getImage("avatars/duskpin-sapling");

var enemy = function(x,y) {
    this.x = x;
    this.y = y;
};
 enemy.prototype.move = function(){
    this.y++;
    if (this.y>400){
        this.y = -10;
    }
};
 enemy.prototype.show = function(){
    image(rock, this.x, this.y,75,75);
 };
    var enemy2 = function(x,y) {
    this.x = x;
    this.y = y;
};
 enemy2.prototype.move = function(){
    this.y++;
    if (this.y>400){
        this.y = -10;
    }
};
 enemy2.prototype.show = function(){
    image(tree, this.x, this.y,75,100);
    
};

var enemy3 = function(x,y) {
    this.x = x;
    this.y = y;
};
 enemy3.prototype.move = function(){
    this.y++;
    if (this.y>400){
        this.y = -10;
    }
};
 enemy3.prototype.show = function(){
    image(animal, this.x, this.y,75,75);
 };
var roadKill = new enemy(65,0);
var roadKill2 = new enemy(175,-415);
var roadKill3 = new enemy(300,-1000);
var roadKill4 = new enemy2(55,-550);
var roadKill5 = new enemy2(175,-850);
var roadKill6 = new enemy2(300,-300);
var roadKill7 = new enemy3(55,-150);
var roadKill8 = new enemy3(175,-250);
var roadKill9 = new enemy3(300,-900);
draw = function() {
    background(0, 0, 0);
    roadKill.move();
    roadKill.show();
    roadKill2.move();
    roadKill2.show();
    roadKill3.move();
    roadKill3.show();
    roadKill4.move();
    roadKill4.show();
    roadKill5.move();
    roadKill5.show();
    roadKill6.move();
    roadKill6.show();
    roadKill7.move();
    roadKill7.show();
    roadKill8.move();
    roadKill8.show();
    roadKill9.move();
    roadKill9.show();
};
