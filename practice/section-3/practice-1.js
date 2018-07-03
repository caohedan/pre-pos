'use strict';

function createUpdatedCollection(collectionA, objectB) {
            var b = objectB.value.toString();

            for(var i=0;i<collectionA.length;i++)
            {
              if(b.indexOf(collectionA[i].key)>-1)
              collectionA[i].count = collectionA[i].count-1;
            }
            return collectionA;
}
