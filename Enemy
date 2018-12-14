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
var roadKill = new enemy(10,10);
draw = function() {
    background(41, 41, 41);
    roadKill.move();
    roadKill.show();
};
