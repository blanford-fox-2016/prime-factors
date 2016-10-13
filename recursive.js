"use strict";

// release 0
let prime_factors = ((num) => {
  let result = [];
  for (var i = 2; i <= num / i; i += 1) {
    while (num % i === 0) {
      num /= i;
      result.push(i);
    }
  }
  num > 1 ? result.push(num) :false;
  return result;
});


console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1

let simple_recursive = (number) => {
  let temp = String(number).split("").map(Number);
  if (temp.length === 1) {
    return temp[0];
  } else {
    number = String(temp.reduce((prev, cur) => {
      return prev * cur
    }));
    return simple_recursive(number);
  }

  // write your code here
}


console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
