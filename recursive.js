"use strict";

// // release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
    var hasil = []
    var akhir = []
    var pangkat = 1
    for (var i=2; i<= angka; i++){
      while (angka%i===0){
      angka = angka/i
      hasil.push(i)
      }
    }
  return hasil
  }


console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

//release 1
function simple_recursive(input){

var arrInput = String(input).split("");

if(arrInput.length>1){
  var hasil = 1;
  var array = String(input).split("");
  for (var i = 0; i < array.length; i++) {
    hasil *= Number(array[i])
  }
}
else{
  return input
}

return simple_recursive(hasil)

}


// simple_recursive(39)
console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
