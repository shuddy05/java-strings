// MATH OBJECT
// Math
// Constant PI

console.log(Math.PI);

// Methods

//pow, min, max,
console.log(Math.pow(3, 2)); // Exponential
console.log(Math.min(3, 2)); // minimum number of a set
console.log(Math.max(-23, -4, -2, -98)); // maximum number of a set

//  round, ceil, floor, trunc, random

console.log(Math.round(7.55)); // normal rounding of of numbers
console.log(Math.ceil(91.55)); // round up
console.log(Math.floor(91.999)); // round Down
console.log(Math.trunc(10.23)); // it removes decimal point

// random - it  generates psuedorandom nums between 0-1
console.log(Math.random());
// 0 - 1  
console.log(Math.trunc(Math.random() * 10));

// 1-20
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// 0-5
const customers = ["Ola", "Blessing", "Pius", "Moshood", "Season", "Samuel"];

// Pick a random luck winner
const randomLuckyNumber = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyNumber]);

// 5-10
//10-20
//20-50

const min = 5;
const max = 23;

const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rNum);
