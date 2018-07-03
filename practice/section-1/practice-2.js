'use strict';

function collectSameElements(collectionA, collectionB) {

            var result = new Array();
            //将b集合的每个元素转为字符串
            for(var i=0;i<collectionB.length;i++){
                collectionB[i]=collectionB[i].toString();
            }
            //将a数组的每个元素与b数组的每个字符串比较
            for(var i=0;i<collectionA.length;i++)
            {
               for(var j=0;j<collectionB.length;j++){
                if(collectionB[j].indexOf(collectionA[i].toString())>-1)
                             {
                             result.push(collectionA[i]);
                             }
               }

            }
            return result;

}
