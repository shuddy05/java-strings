// LOOPS
//iterations
// Principle of loop - loop must terminate, it must be finite
// for, while, do-while loop
// loop are used to perform repitive tasks

//infine LOOP
// FOR (Initializer; condition; increment){Action *6}
// 0 1 2 3 4 5
for (let i = 0; i < 5; i++) {
  console.log("in a loop");
}
// 1
for (let attempt = 0; attempt < 3; attempt++) {
  console.log("Keep Trying");
}

// sum of natural numbers between 0 - 50
let sum = 0;
for (let i = 0; i <= 50; i++) {
  sum += i;
}
console.log(sum);

// sum of natural numbers between 0 - 100
let sums = 0;
for (let i = 0; i <= 100; i++) {
  sums += i;
}
console.log(sums);

// WHILE LOOP

// Initialixer
let y = 0;
// Condition
while (y < 3) {
  // action
  console.log("Attempt Card");
  // Increment
  y++;
}

// DO-WHILE LOOP
// perfoms an action at least once weather the condition is true or false

//initializer
let x = 5;
// Action
do {
  console.log("Hello User");
  //Increment
  x++;
  // Condition
} while (x < 2);

// Rolling a dice until 6 appears

let roll;
do {
  roll = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled ${roll}`);
} while (roll !== 6);
