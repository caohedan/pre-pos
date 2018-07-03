'use strict';

function createUpdatedCollection(collectionA, objectB) {
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
