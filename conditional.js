//CONDITIONAL STATEMENT
console.log("conditional statement"); // attching performing an action to a condition

// if statement
// if(condition) {
//action
// lines of code
//}

if (1 < 2) {
  console.log("Ola");
}

let balance = 6000;
let amount = 8000;

if (balance >= amount) {
  balance -= amount;
  console.log("Transaction succesful, balance is " + balance);
}

// Determine if the passowrd is long enough (>= 10)
// improve your logic check if the password contains '#' - good password

const password = "#password1234";
if (password.length >= 10 && password.includes("#")) {
  console.log("Password is good enough");
}

// log to the console if a users age is eligible to vote (18)
const age = 12;
//const eligibleAge = 18;
if (age >= 18) {
  console.log("You are Eligible to Vote");
}
// If else statement
if (9 > 7) {
  console.log("YES");
} else {
  console.log("NO");
}

if (balance >= amount) {
  balance -= amount;
  console.log("Transaction succesful, balance is " + balance);
} else {
  console.log("Insufficient fund");
}

// Write an if else statement to check if a num is positive or negative

const num = 70;
if (num > 0) {
  console.log("POSITVE");
} else {
  console.log("NEGATIVE");
}

// write an if else statement to determine if a number is odd or even
const numb = 6;
if (numb % 2 == 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

// Multiple else if
// overpopulated >= 300, underpopulated <= 50, balanced populated > 50 < 300
const censusResult = 500;
if (censusResult >= 300) {
  console.log("OVER POPULATED");
} else if (censusResult <= 50) {
  console.log("UNDER POPULATED");
} else {
  console.log("BALANCED POPULATED");
}

// Lottery system for a company a b c (winner) d
const usersChoice = "a";

if (usersChoice == "c") {
  console.log("CONGRATULATIONS");
} else {
  console.log("Try Again");
}

// Lottery system for a company 4 choices a (trip to DUBAI) b(try again) c(car)  d (blender)
const usersChoiceB = "a";
if (usersChoiceB == "a") {
  console.log("Trip to Dubai");
} else if (usersChoiceB == "c") {
  console.log("CAR");
} else if (usersChoiceB == "d") {
  console.log("Blender");
} else "Try Again";

// we are sorting people using their age into groups
// aged 40 and above --> Elderly person
// 18 - 39 --> Young adult
// less then 18 -->

const ageGroup = 22;
if (ageGroup >= 40) {
  console.log("Elderly Person");
} else if (ageGroup >= 18 && ageGroup <= 39) {
  console.log("Young adult");
} else if (ageGroup < 18) {
  console.log("Teenager");
}

const movie = 5;
if (movie >= 8) {
  console.log("GREEN");
} else if (movie >= 5) {
  console.log("ORANGE");
} else {
  console.log("RED");
}

let burnley = 3;
let sunderland = 2;
if (burnley > sunderland) {
  console.log("WINNER IS BURNLEY");
} else if (sunderland > burnley) {
  console.log("WINNER IS SUNDERLAND");
} else {
  console.log("DRAW");
}

const totalGoal = burnley + sunderland;

if (burnley === sunderland && totalGoal > 4) {
  console.log("WIN");
} else {
  console.log("LOSE");
}

if (sunderland > burnley || sunderland > 2) {
  console.log("Ola Wins");
} else {
  console.log("Ola Lost");
}

const liverpool = 2;
const mancity = 5;
const liverpoolCorners = 4;
const mancityCorners = 5;
const totalCorners = liverpoolCorners + mancityCorners;

if (liverpool > mancity && liverpool < 4 && totalCorners === 9) {
  console.log("Emmanuel Wins");
} else {
  console.log("Emmanuel Lost");
}
