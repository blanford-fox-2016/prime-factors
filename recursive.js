"use strict";

// release 0
console.log("Release 0");
let prime_factors = (angka) => {
  var hasil = [],i;
  for (i = 2; i <= angka; i++) {
      while ((angka % i) === 0) {
          hasil.push(i);
          angka /= i;
      }
  }
  return hasil
}

console.log(prime_factors(39)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]
console.log();
console.log("Release 1");
let simple_recursive = (number) => {
  var numString = String(number).split("")
if(numString.length === 1){
  return number
}else{
  var result = 1
  var array = String(number).split("")
  for(var i=0;i<array.length;i++){
    result *= Number(array[i])
  }
}
return simple_recursive(result)
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
