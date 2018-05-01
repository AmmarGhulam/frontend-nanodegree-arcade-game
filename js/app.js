var maxSpeed = 500;
var minSpeed = 200;
// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y = y;
     this.speed = Math.floor(Math.random() * maxSpeed + minSpeed);
     //random()* 100 +300 to make sure it is fast
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
 this.x += this.speed * dt;
  if(this.x > 550) {
    this.x = -100;
    this.speed = Math.floor(Math.random() * maxSpeed + minSpeed);
}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y= 380;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function (){

}
Player.prototype.render= function(){
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 if (player.y <50) {
        player.x = 200;
        player.y = 380; 
    }
}
    
Player.prototype.handleInput = function(keyCode) {
  if(keyCode === 'up' && this.y > 0) {
    this.y = this.y - 80;
  }
  if(keyCode === 'down' && this.y < 350) {
    this.y = this.y + 80;
  }
  if(keyCode === 'right' && this.x < 400) {
    this.x = this.x +101;
  }
  if(keyCode === 'left' && this.x > 0) {
    this.x = this.x -101;
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies=[new Enemy(60),new Enemy(140),new Enemy(220)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
