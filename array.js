// ARRAYS - elements
// represented using [el1, el2, el3]

const students = ["pious", "daniel", "ola", "season", "shuddy"];
// array properties
// length

console.log(students);
console.log(students.length);

// get element basedon position
console.log(students[3]);

console.log(students[students.length - 1]); // last element in array

// change element in an array by using the position
// student[0] = "Zach";
// student[3] = "emmanuel";
// console.log(student);

// Array Methods
// Add or Remove element to/from an array
// To add element [Push(add to the back)] [unshift(add to the back)]

console.log(students.push("ola"));
students.push("blessing");
students.unshift("adee");
students.pop(); // Remove the End
students.shift(); // Remove from the front
console.log(students);

// at , indexOf, lastindexOf
const nums = ["a", "c", "a", "d", "f", "a", "c"];
console.log(nums.at(2));
console.log(nums.indexOf("d"));
console.log(nums.lastIndexOf("c"));

// Includes
console.log(nums.includes("a"));

// Extracting portons from an array
// Slice (start, end(non-inclusive))
console.log(nums.slice(0, 3));

// Concat
console.log(students.concat("Jane", "Peter"));
// Convert Array to String- toString, join(seperator)
console.log(students.toString());
console.log(nums.join("-"));
console.log(nums.toString());

// [] empty array
console.log(Array.isArray(nums));
console.log(Array.from("abc"));

// Reverse Array
const grades = [1, 2, 3];
console.log(grades);
console.log(grades.reverse());

// Complex Array Methods
// Higher Array Methods - because they take another function (call back) to tell them what to do
// forEach, map, find, sort, filter, every, some, reduce

const transactions = [1000, -200, 3000, -2699, 1000];
const users = ["ade", "john", "peter", "ayo", "abraham"];

// forEach - allows us to loop through this array - and perfom an action on each of the array
transactions.forEach((transaction) => {
  console.log(transaction * 2);
});

users.forEach((user) => {
  console.log(user.toUpperCase());
});

// map - allows us to loop through this array - and perfom an action on each of the array - and return the new array
const letterFromUsers = users.map((user) => user.charAt(0));
console.log(letterFromUsers);

const newTransactions = transactions.map((transaction) => transaction / 10);
console.log(newTransactions);

// find and filter
// Find- returns the first element that passes a search conditions
const bestUser = users.find((user) => user.startsWith("a"));
console.log(bestUser);
const greaterThan500 = transactions.find((transaction) => transaction > 500);
console.log(greaterThan500);

// Filter - returns every elements that passes search condition
const aUser = users.filter((user) => user.startsWith("a"));
console.log(aUser);

const debitTransaction = transactions.filter((transaction) => transaction < 0);
console.log(debitTransaction);

// Sort - arranges element in an array
console.log(users.sort());
// When using sort with number, we ned to write a compare function
const specialNumbers = [11, 2, 3, 4, 17, 22, 3];
const lowToHigh = specialNumbers.sort((a, b) => a - b);
console.log(lowToHigh);
const highToLow = specialNumbers.sort((a, b) => b - a);
console.log(highToLow);

// every- return a true or false statement.
const allGreaterThan10 = specialNumbers.every((num) => num > 10);
console.log(allGreaterThan10);

//some -  return a true or false statement.
const someGreaterThan10 = specialNumbers.some((num) => num > 10);
console.log(someGreaterThan10);

//  reduce -  accumulate values in an array into one (array of number)
const cartPrices = [10, 70, 20, 30];
// a(acc)- accumulator, b(curr)- Current value
const totalPrice = cartPrices.reduce((acc, curr) => {
  return acc + curr;
}, 10);
console.log(totalPrice);

// Split -
let myName = "Banana is healthy";
console.log(myName.split(" "));
