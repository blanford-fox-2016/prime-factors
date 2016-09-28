"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
 for (var i = 2; i <= angka; i++) {
   if (angka%i == 0) {
     angka = (angka/i);//--updatevalue
     hasil.push(i)
     i-=1
   }
 }
return hasil;
// write your code here
}
console.log("------prime factor -----");
console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]
console.log("-----------------------");
// release 1
let simple_recursive = (number) => {
  var newNumber = 1 ;
  var condition = number.toString().split("")
  if (condition.length === 1) {
    return condition.toString()
  }else {
    for (var i = 0; i < condition.length; i++) {
      newNumber *= condition[i];
    }
    return simple_recursive(newNumber)
  }
  // write your code here
}
console.log("-------simple recursive-----");
console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(32)); // 3
console.log("--------------------------");
