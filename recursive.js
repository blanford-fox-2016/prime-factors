"use strict";

// release 0
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
// release 1
// let simple_recursive = (number) => {
//   var hasil = [],i;
//   for (i = 2; i <= number; i++) {
//       while ((number % i) === 0) {
//           hasil.push(i);
//           number /= i;
//       }
//   }
//   if(hasil.length == 1)
//   return hasil.length
//   else
// }
//
// console.log(simple_recursive(39)); // 4
// console.log(simple_recursive(999)); // 2
// console.log(simple_recursive(3)); // 3
