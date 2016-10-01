"use strict";

// release 0
let prime_factors = (angka) => {
  // write your code here
    var hasil = [];
    var index=0, pangkat = 0,i = 2;
    while(angka != 1) {
        if(angka % i == 0) {
            angka = angka / i;
            // pangkat++;
            // hasil[index] = i;
            hasil.push(i);
        }
        else if(angka % i != 0) {
            i++;
            // index++;
            // pangkat = 0;
            // hasil[index] = 0;
        }
        // else {
        //     i++;
        //     // index++;
        //     // pangkat = 0;
        // }
    }
    return hasil;
}

console.log(prime_factors(873)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here

    var angka = String(number).split("");
    if(angka.length > 1) {
        var hasil = 1;
        for(var i=0;i<angka.length;i++) {
            hasil = hasil * Number(angka[i]);
        }
        // console.log(hasil);

        return simple_recursive(hasil);
    }

    else {
        return number;
    }

}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
