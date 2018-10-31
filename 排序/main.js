(function(){
   function romance(obj){//综合
   	  this.contents = new sortArray(obj.datas,obj.unicodes);
      var letters = this.contents.deal().letter;
      this.nav = new letterScroll(obj.nav,obj.listBox,letters);
      this.BoxName = document.querySelector(obj.listBox);
      this.callback = obj.callback;
      this.init();
   }
   romance.prototype.init = function(){//创建内容
      var body = this.contents.deal().element;
      for(key in body){
          var alphabet = document.createElement("div");//创建盒子节点
          alphabet.classList.add("singleContent");//加类名
          this.BoxName.appendChild(alphabet);

          var alphabet1 = document.createElement("div");//创建子节点
          var node = document.createTextNode(key);//创建孙节点内容
          alphabet1.classList.add("singleLetter");//加类名
          alphabet1.appendChild(node);//把内容放入
          alphabet.appendChild(alphabet1);//把节点放入
         
          var alphabet2 = document.createElement("ul");//创建子节点
          alphabet2.classList.add("List");//加类名
          alphabet.appendChild(alphabet2);//把节点放入
          //console.log(key);
          var that = this;
          (function(key,that){//闭包传个key值
              for(var j=0;j<body[key].length;j++){
               var alphabet3 = document.createElement("li");//创建孙节点
               var node = document.createTextNode(body[key][j].className);//创建孙节点内容
               alphabet3.classList.add("name");//加类名
               alphabet3.appendChild(node);//把内容放入
               alphabet2.appendChild(alphabet3);//把节点放入
               alphabet2.children[j].index = j;
               alphabet2.children[j].onclick = function(){
                 var res = body[key][this.index];
                 that.callback(res);
               }
            }
          }(key,that));
      }
   } 
   window.romance = romance;
}());