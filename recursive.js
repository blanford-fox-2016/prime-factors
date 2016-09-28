"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
  for(var i=1; i <= angka; i++){
    while (angka % i == 0 && i != 1){
      hasil.push(i)
      angka /= i
    }
  }
  return hasil
}

console.log("=== Prime Factor ===");
console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here
  var nstring = number.toString()
  var result = 1
  if(nstring.length != 1){
    for(var i=0; i<nstring.length; i++){
    result *= parseInt(nstring[i])
  }
    return simple_recursive(result)
  }
  return nstring
}
console.log("=== Simple Recursive ===");
console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
