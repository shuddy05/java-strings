//JAVA SCRIPT FUNCTION -
// reusable blocks of code that perfoms a specific task or return a value
// call or invoke the function

// a function that welcomes our user when they log in

function welcomeUser() {
  console.log("WELCOME USER");
}
// calling a function
welcomeUser();
welcomeUser();
// function with parameters - values that are passed to functions
function welcomeUser2(user) {
  console.log(`Welcome ${user}`);
}

welcomeUser2("Season");
welcomeUser2("Daniel");
welcomeUser2("Ola");
// deafult parameters
function welcomeUser3(user = "anonymous") {
  console.log(`Welcome ${user}`);
}
welcomeUser3();

// functions returning a value -  giving back a result
// return keyword

// function that return the additiions of two numbers
function add(a, b) {
  return a + b;
}
let sum = add(12, 10);
console.log(sum);
// function that return the product of two numbers
function product(numb1, numb2) {
  return numb1 * numb2;
}
console.log(product(65, 3));

// function that returns the naira equivalent of a dollar amount passed into it
// 10 dollars will give you (10 * 1600) naira
// 1$ = 1600

function convertToNaira(dollaramount) {
  return `${dollaramount} dollars will give you ${dollaramount * 1600} Naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(40));

// write a function the returns the average of three numbers

function calAVG(n1, n2, n3) {
  const avg = (n1, n2, n3) / 3;
  return avg;
}
console.log(calAVG(12, 13, 14));

function Dob(yob) {
  return 2025 - yob;
}
console.log(Dob(2004));

// write  a functiion that return if a nuber is even or odd
function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is EVEN`;
  } else {
    return `${num} is ODD`;
  }
}
console.log(oddOrEven(79));
console.log(oddOrEven(70));

// write a function to check if a withdraw is possible or not

let balance = 2000;
function withdrawAmount(amount) {
  if (balance >= amount) {
    balance -= amount;
    return "Transaction Successful";
  } else {
    return "Insufficient Funds";
  }
}

console.log(withdrawAmount(1800));
console.log(balance);
console.log(withdrawAmount(1000));

function depositAmount(amount) {
  balance += amount;
  return `Deposit of ${amount} is successful, and your current balane ${balance}`;
}

console.log(depositAmount(3000));
console.log(withdrawAmount(1000));

// RETURN KEYWORD
// any code after return is inaccessible code
function example() {
  console.log("okay after return");
  return "hello";
  //unreachable code
}

function firstLetter(letter) {
  return letter.charAt(0);
}
console.log(firstLetter("daniel"));

function getFull(firstname, lastname) {
  return firstname + " " + lastname;
}
console.log(getFull("Daniel", "Season"));

function longestString(String1, String2) {
  if (String1.length > String2.length) {
    return String1;
  } else if (String2.length > String1.length) {
    return String2;
  } else {
    return "Same length";
  }
}
console.log(longestString("ola", "daniel"));

// function espression, treats function like variable

// function exppression that return the square of a num
const squareNumber = function (num) {
  return num ** 2;
};
console.log(squareNumber(89));

// function expression that converts number of days to weeks
const ddaysToWeeks = function (days) {
  return days / 7;
};

// arrow function (modern)
// arrow function that returns the difference between two numbers

const difference2 = (n1, n2) => {
  const diff = n1 - n2;
  return diff;
};

// Shorten arrow functions (works only for one line of code inside the block)

const difference = (n1, n2) => n1 - n2;
console.log(difference(7, 9));

// HOISTING - is a behaviour in JS where function declarations are moved to the top before the code is executed
hoistedFunc(); // this is working because of hoisting
function hoistedFunc() {
  console.log("i am a func dec");
}

const getMaxNum = (num1, numb2) => {
  if (num1 > numb2) {
    return num1;
  } else if (numb2 > num1) {
    return numb2;
  } else {
    return "Equal number";
  }
};
console.log(getMaxNum(6, 7));

const letter = (string) => string.toUpperCase();
console.log(letter("daniel"));

let savings = 50000;
const checkLoanEligibility = (loanAmount) => {
  if (savings * 2 < loanAmount) {
    return "User is Inligible";
  } else {
    return "User is Eligible";
  }
};
console.log(checkLoanEligibility(5000));

// const checkLoanEligibility1 = (loanAmount) =>
//   savings * 2 < loanAmount ? "User is Inligible" : "User is Eligible";

const containSubstring = (str, substr) => str.includes(substr);
console.log(containSubstring("daniel", "nie"));

const convertsMtoS = (nthMinute) => nthMinute * 60;
console.log(convertsMtoS(120));
