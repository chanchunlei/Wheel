 (function(){
       function Game(){
          this.food = new Food;
          this.snake = new Snake;
          that = this;
       }
       Game.prototype.init = function(map){
       	  this.food.init(map);
       	  this.snake.init(map);
       	  this.run(this.food,map);
       	  this.bindkey();
       }
       Game.prototype.run = function(food,map){
       	  var times = setInterval(function(){
              this.snake.move(food,map);
              this.snake.init(map);
              var headX = this.snake.body[0].x;
              var headY = this.snake.body[0].y;
              var maxX = map.offsetWidth/this.snake.width;
              var maxY = map.offsetHeight/this.snake.height; 
              if(headX<0||headX>=maxX){
              	clearInterval(times);
              	alert("游戏结束");
              }
              if(headY<0||headY>=maxY){
              	clearInterval(times);
              	alert("游戏结束");
              }
       	  }.bind(that),100)
       }
       Game.prototype.bindkey = function(){
       	  document.addEventListener("keydown",function(e){
             switch (e.keyCode) {
             	case 37: this.snake.direction = "left";break;
             	case 38: this.snake.direction = "top";break;
             	case 39: this.snake.direction = "right";break;
             	case 40: this.snake.direction = "bottom";break;
             }
       	  }.bind(that));
       }
       window.Game = Game;
    })();
