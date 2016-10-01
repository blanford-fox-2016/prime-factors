"use strict";

// release 0
let prime_factors = (number, hasil) => {
  // write your code here
  hasil = []
  var sisa = 0;
	var pembagi = 2;

	if(number < 1){
		console.log("Angka Inputan Minimal 2 !");
	}else if(cekBilanganPrima(number) || number == 1){
		hasil.push(number);
	}else{
		while(!cekBilanganPrima(number)){
			if(number % pembagi == 0){
				sisa = number / pembagi;
				number = sisa;

				hasil.push(pembagi);

				if(cekBilanganPrima(number)){
					hasil.push(number);
				}
			}else{
				pembagi++;
			}
		}
	}
  return hasil
}


// console.log(prime_factors(3)); // [3]
// console.log(prime_factors(6)); // [2,3]
// console.log(prime_factors(8)); // [2,2,2]
// console.log(prime_factors(25)); // [5,5]
// console.log(prime_factors(123123123)); // [3, 3, 41, 333667]//agak lama

function cekBilanganPrima(number){
	var primes = [];
	var flag = 0;

	if(number == 1){
		return false;
	}else if(number == 3 ||  number == 2){
		return true;
	}else{
		for(var i = 2 ; i < number ; i++){
			if(number % i == 0){
				flag++;
			}else{
				flag += 0;
			}
		}
		if(flag > 0){
			return false;
		}else{
			return true;
		}
	}
}

// release 1
let simple_recursive = (number) => {
  // write your code here
  var satuan = []
  var hasil = 1
  number = String(number)
  for(var i = 0 ; i < number.length ; i++){
    satuan.push(number[i])
  }
  //console.log(satuan.length)
  if(satuan.length > 1){
    for(var i = 0 ; i < satuan.length ; i++){
      hasil *= satuan[i]
    }
    return simple_recursive(hasil)
  }else{
    return number
  }
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
