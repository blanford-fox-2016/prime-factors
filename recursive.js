"use strict";

// release 0
let prime_factors = (angka) => {
  var hasil = [];
  // write your code here
  for (var i = 2; i <= angka; i++) {
    while (angka % i === 0) {
      angka = angka / i
      hasil.push(i);
    }
  }
  return hasil;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

console.log("=======================================================")

//release 1
let simple_recursive = (input) => {
  // write your code here
  let cek = String(input).split("")

  console.log("ini : " + cek);

  if (cek.length === 1) {
    return input;
  } else {
    console.log("lewat if " + typeof (input) + " " + input);
    var hasil = 1;
    var array = String(input).split("")
    for (var i = 0; i < array.length; i++) {
      hasil *= Number(array[i]);
    }
  }
  return simple_recursive(hasil);
}

console.log(simple_recursive(39));

//console.log(simple_recursive(39)); // 4
//console.log(simple_recursive(999)); // 2
//console.log(simple_recursive(3)); // 3

// var input = "127";
// var array = input.split("");
// array.map(Number);
// console.log(array);

// var input = 127;
// var string = input.toString();
// var split = string.split("");
// console.log(split)
