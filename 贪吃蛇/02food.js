(function(){
       var element = [];//存小方块
       function Food(x,y,width,height,color){
       	this.x = x;
       	this.y = y;
       	this.width = width || 20;
       	this.height = height || 20;
       	this.color = color || "green";
       };
       Food.prototype.init = function(map){
       	remove(map);
       	var div = document.createElement('div');
       	map.appendChild(div);
       	div.style.width = this.width + "px";
       	div.style.height = this.height + "px";
       	div.style.position = "absolute";
        this.x = parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
        this.y = parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
       	div.style.left = this.x + 'px';
       	div.style.top = this.y + "px";
       	div.style.backgroundColor = this.color;
       	element.push(div);
       }
       //每次只更新前先清除上一个
       function remove(map){
       	for(var i = 0;i<element.length;i++){
           var ele = element[i];
           map.removeChild(ele);
           element.splice(i,1);
       	}
       }
       window.Food = Food;
	})();