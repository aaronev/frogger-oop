(function() {
  
  var Player = function(start, img) {
    this.x = start;
    this.y = 380;
    this.score = 0;
    this.sprite = img;
  }

  Player.prototype.update = function() {
    this.x = 200;
    this.y = 380;
    this.score = this.score + 1;
  }

  Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  Player.prototype.move = function(key) { 

    if ( key === 'left' ) {
      if ( this.x > 0 ) {
          this.x = this.x - 100;
      }
    } else if ( key === 'right' ) {
      if ( this.x < 400 ) {
          this.x = this.x + 100;
      }
    } else if ( key === 'up' ) {
      if ( this.y > 0 ) {
          this.y = this.y - 80;
      }
    } else if ( key === 'down') {
      if ( this.y < 380 ) {
          this.y = this.y + 80;
      } 
    }
  }

  Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
    this.score = 0;    
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.move(allowedKeys[e.keyCode]);
  });

  var player = new Player(200, '/images/char-boy.png');
  var player2 = new Player(100, '/images/char-car-girl.png');
  var players = [player, player2]

  window.player = player

})()