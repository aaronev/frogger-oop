(function() {
  
  var allEnemies = [];
  
  var Enemy = function(row, speed) {
    this.x = -100;
    this.y = 60 + (row - 1) * 80;
    this.speed = speed;
    this.sprite = '/images/enemy-bug.png';
  }

  Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x > 500) this.x = -100;
  }

  Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  for (var i = 0; i < 7; i++) {
    var random_speed = getRandomNumber(10, 31) * 10;
    var random_row = getRandomNumber(1, 4);
    allEnemies[i] = new Enemy(random_row, random_speed);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  window.allEnemies = allEnemies

})()
