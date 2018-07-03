'use strict';

function countSameElements(collection) {
  var target =new Array();
  var map = {};
   //遍历集合，如果该元素不存在特殊字符，已经存在则+1，若第一次出现则初始化为1
   //如果存在，则取出字母和数字
  for(var i = 0;i<collection.length;i++){
    var key = collection[i];
          // 去掉特殊字符
             key = key.replace(/[\:\-\[ \] ]/, '');
      if(key.length>1){
        var realKey = key.split('')[0];
        var realValue = parseInt(key.replace(realKey,''));
        console.log(realKey);
        console.log(realValue);
          if(containKey(map,realKey)){
            map[realKey] =  map[realKey]+realValue;
          }else{
            map[realKey]=realValue;
          }
        }else{
        if(containKey(map,key)){
          map[key] =  map[key]+1;
        }else{
          map[key]=1;
        }
        }

  }

  for(var key in map) {
    var array = {name: key, summary: map[key]}
    target.push(array);
  }
  return target;
}
//判断map中是否已经还有该元素
function containKey(map,_key) {
  var flag = false;

    for(var key in map){
      if (key == _key){
        flag = true;
        break;
      }

  }
  return flag;
}

