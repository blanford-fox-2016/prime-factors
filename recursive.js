"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
  var hasil = [];
  for (var i = 2; i < angka; i++) {
    while (angka % i === 0) {
      angka = angka/i;
      hasil.push(i);
    }
  }

  if(angka > 1) {
    hasil.push(i);
  }

  return(hasil);
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here
  var countNum = number.toString().split("");
  if (countNum.length === 1) {
    return countNum.join("");
  }
  else if (countNum.length > 1) {
    var sum = 1;
    for (var i = 0; i < countNum.length; i++) {
      sum *= countNum[i];
    }
    return simple_recursive(sum)
  }

}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
