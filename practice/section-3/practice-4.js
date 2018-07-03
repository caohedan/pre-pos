'use strict';

function createUpdatedCollection(collectionA, objectB) {
   collectionA = countSameElements(collectionA);
   collectionA = practice2createUpdatedCollection(collectionA, objectB);
   return  collectionA;
}
//计数
function countSameElements(collection) {
  var target =new Array();
  var map = {};
   //遍历集合，如果该元素不含-，已经存在则+1，若第一次出现则初始化为1
   //如果含-，则取出字母和数字
  for(var i = 0;i<collection.length;i++){
    var key = collection[i];
    if(key.indexOf('-')>=0){
    var realKey = key.split('-')[0];
    var realValue = parseInt(key.split('-')[1]);

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
    var array = {key: key, count: map[key]}
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
//满3减1
function practice2createUpdatedCollection(collectionA, objectB) {
              var b = objectB.value.toString();

              for(var i=0;i<collectionA.length;i++)
              {
                if(b.indexOf(collectionA[i].key)>-1)
                {
                    var sub =  parseInt(collectionA[i].count/3);
                    collectionA[i].count = collectionA[i].count-sub;
                }

              }
              return collectionA;
  }
