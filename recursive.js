"use strict";

// release 0
let prime_factors = (number) => {
  var output = [], divisor = 2
  if (number == 1){
    output.push(1)
  }
  if(number < 1){
    console.log("Number must be greater than 1");
  }
  else{
    while(number >1){ //3
      if (number % divisor == 0){
        number = number / divisor
        output.push(divisor)
      }
      else{
        divisor++
      }
    }
  }
  return output
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  var arr = number.toString().split('')
  if (arr.length > 1){
    var temp = 1
    for (var i = 0; i < arr.length; i++) {
      temp = temp * parseInt(arr[i])
    }
  }
  else{
    return number

  }
    return simple_recursive(temp)
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
