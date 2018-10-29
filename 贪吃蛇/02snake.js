(function(){
       var element = [];
       function Snake(width,height,direction){
       	this.body = [
          {x:3,y:2,color:"red"},
          {x:2,y:2,color:"orange"},
          {x:1,y:2,color:"orange"}
       	];
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || "right";
       }
       Snake.prototype.init = function(map){
       	remove(map);
       	for(var i = 0;i<this.body.length;i++){
       		var div = document.createElement("div");
          //console.log(div)
       		map.appendChild(div);
       		var obj = this.body[i];
       		div.style.width = this.width + "px";
       		div.style.height = this.height + "px";
       		div.style.position = "absolute";
       		div.style.left = obj.x * this.width + "px";
       		div.style.top = obj.y * this.height + "px";
       		div.style.backgroundColor = obj.color;
       		element.push(div);
       	}
       };
       Snake.prototype.move = function(food,map){
            for(var i = this.body.length - 1; i>0 ;i--){
               this.body[i].x = this.body[i-1].x;
               this.body[i].y = this.body[i-1].y;
            }
            switch (this.direction){
            	case "right":
            	  this.body[0].x += 1;break;
            	case "left":
            	  this.body[0].x -= 1;break;
            	case "top":
            	  this.body[0].y -= 1;break;
            	case "bottom":
            	  this.body[0].y += 1; break;
            }
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            var foodX = food.x;
            var foodY = food.y;
            if(headX == foodX && headY == foodY){
            	console.log("吃到了！")
            	var last = this.body.length - 1;
                this.body.push({
                	x: this.body[last].x,
                	y: this.body[last].y,
                	color: this.body[last].color
                })
                food.init(map)
            }
       }
       function remove(map){
       	    for(var i=0;i<element.length;i++){
       	    	map.removeChild(element[i]);
       	    }
            element = [];
        }
       window.Snake = Snake;
    })();