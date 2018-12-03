(function(){
   function letterScroll(nav,listBox,letters){
   	  this.Box = document.querySelector(nav);
      this.ListBox = document.querySelector(listBox);
   	  this.letters = letters;
      this.run = true;//点击事件执行一次
   	  this.init();
   }
   letterScroll.prototype.init = function(){//创建字母
   	   for(var i=0; i<this.letters.length;i++){
          var alphabet = document.createElement("li");//创建节点
          var node = document.createTextNode(this.letters[i]);
          alphabet.appendChild(node);
          this.Box.appendChild(alphabet);//加入父元素
          this.Box.children[i].index = i;
          var that = this;
          this.Box.children[i].onclick = function(){
          	that.scrollTo(this.index);
          }
   	   }
   }
   letterScroll.prototype.scrollTo = function(index){//滚动到这个位置
        if(this.run){
          this.run = false;
          var now = this.ListBox.children[index];
          //scrollTop一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。
          //offsetTop当前元素顶部距离最近父元素顶部的距离
          var num = now.offsetTop - this.ListBox.scrollTop;//移动距离
          var start = this.ListBox.scrollTop;//开始
          var end = now.offsetTop;//结束
          var r = 20;//每次移动距离
          var t = 0;//参量
          var timer = setInterval(function(){
            t++;
            console.log(1);
            this.ListBox.scrollTop = num/r*t+start;//(距离/每次移动距离*参量)+开始点
            if(num>0 && end - this.ListBox.scrollTop<=0){
                clearInterval(timer);
                this.run = true;
            }else if(num<=0 && end - this.ListBox.scrollTop>=0){
                clearInterval(timer);
                this.run = true;
            }
          }.bind(this),20);
        }else{
          return false;
        }
   }
   window.letterScroll = letterScroll;
}());