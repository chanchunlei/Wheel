//处理数据
(function(){
   function sortArray(datas,unicodes){
   	this.datas = datas;
   	this.unicodes = unicodes;
   	//console.log(this.letters);
   	this.deal();
   }
   sortArray.prototype.init = function(){//初始化
     this.sorts();
   }
   sortArray.prototype.init = function(){//获取到className
   	var goods = this.datas.goods;
   	for(var i=0;i<goods.length;i++){
   	 	goods[i].chinese = this.pySegSort(goods[i].className);
   	 }
   	 return goods;
   }
   sortArray.prototype.pySegSort = function(className){
   	 var len = className.length;
   	 var reg = new RegExp('[^0-9a-zA-Z]');
   	 var done = "";
   	 for(var i=0;i<len;i++){
   	 	var val = className.substr(i,1);//分割每个字
   	 	var Names = this.change(val,this.unicodes);//传入查找有无汉字
   	 	if(reg.test(val)){//除数字字母外的字符换成'-'
   	 		val = '-';
   	 	}
   	 	if(Names!==false){
   	 		done += Names;
   	 	}else{
   	 		done += val;
   	 	}
   	 }
   	 done = done.replace(/[0-9]/g,'#');//数字换成#
   	 while(done.indexOf("##")>=0){
   	 	done = done.replace("##",'#');
   	 }
   	 while(done.indexOf("--")>=0){
   	 	done = done.replace("--",'-');
   	 }
   	 return done;
   }
   sortArray.prototype.change = function(val,unicodes){//判断有无这个字
     for(var cell in unicodes){
     	if(unicodes[cell].indexOf(val)!=-1){
     		return cell;
     	}
     }
     return false;
   }
   sortArray.prototype.deal = function(){//字段处理
      var goods = this.init();
      var arr = [];
      var letter = [];
      var element = {};
      //console.log(goods);
      for(var i=0;i<goods.length;i++){//拿出首字母
         arr.push(goods[i].chinese[0].toUpperCase());
      }
      for(var i=0;i<arr.length;i++){//数组去重
      	if(letter.indexOf(arr[i])==-1){
      		letter.push(arr[i]);
      	}
      }
      letter.sort(function(a,b){//排序
      	return a.localeCompare(b);
      })
      for(var j=0;j<letter.length;j++){//将原始数据分类存入
      	  element[letter[j]]= [];
          for(var i=0;i<arr.length;i++){
      		if(letter[j].indexOf(arr[i])>=0){
      		 element[letter[j]].push(goods[i]);
      	   }
      	}
      }
      return {element,letter};
   }
   window.sortArray = sortArray;
}());