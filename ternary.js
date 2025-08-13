// TERNARY OPERATORS
// is another way of writing if else statement

let otpSent = 4587;
let otpEntered = 4578;

if (otpEntered === otpSent) {
  console.log("Transaction completed");
} else {
  console.log("wrong OTP, try again");
}

// Ternary Operator
// Condition ? first action : second action
otpEntered === otpSent
  ? console.log("Transaction Completed")
  : console.log("Wrong OTP, try again");

let num = 5;

num % 2 === 0 ? console.log("EVEN NUMBER") : console.log("ODD NUMBER");

let balance = 6000;
let amount = 8000;
balance >= amount
  ? console.log("TRANSACTION SUCCEFUL")
  : console.log("INSUfFICIENT FUND");

const isMarried = false;
// He is Married or he is not married
const statement = `He ${isMarried ? "is" : " is not"} married`;
console.log(statement);
