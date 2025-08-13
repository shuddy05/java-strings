// TYPE CONVERSION - Converting a Data type to another Data type

// const First = prompt("Enter First Number");
// const Second = prompt("Enter Second Number");
// const total = First + Second; 10 10 === 1010
// console.log(First, Second);
// console.log(total);

// convert from string to number '45.90' --> 45.90
// parseInt, Number

const mystr = "92";
console.log(typeof mystr);

// const converted = parseInt(mystr);
const converted = Number(mystr);
console.log(typeof converted);

// Convert number to string
const myNum = 76;
console.log(typeof myNum);
// to string
const converted2 = String(myNum);
console.log(typeof converted2);

const first = "10";
const second = "10";
const total = parseInt(first) + Number(second);
console.log(total);

// TYPE COERCION (force)
const a = "5";
const b = 3;

console.log(a + b); // concatination 53
console.log(a - b); //5
console.log(a / b); //2
console.log(a * b); //50
console.log(a - b - b + b * 2); //5

// NaN - Not a Number
