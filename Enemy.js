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
     fill(255, 0, 255);
    rect(this.x, this.y,10,10);
};
var roadKill = new enemy(65,0);
var roadKill2 = new enemy(195,-400);
var roadKill3 = new enemy(325,-700);
draw = function() {
    background(41, 41, 41);
    roadKill.move();
    roadKill.show();
    roadKill2.move();
    roadKill2.show();
    roadKill3.move();
    roadKill3.show();
};
