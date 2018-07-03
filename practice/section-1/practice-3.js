'use strict';

function collectSameElements(collectionA, objectB) {
  //循环判断数组a里的元素在b里面有没有，有的话就放入新建立的数组中
            var result = new Array();
            var c=objectB.value;
            for(var i=0;i<collectionA.length;i++)
            {
              if(c.indexOf(collectionA[i].toString())>-1)
              {
              result.push(collectionA[i]);
              }
            }
            return result;

}
