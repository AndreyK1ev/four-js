'use strict';

function countProps(obj) {
  const properties = Object.values(obj);
  return properties.length;
}

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
