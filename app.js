// Two teams — Team A and Team B — compete in a game three times.
// Their scores are as follows:

// Team A: 96, 108, 89

// Team B: 88, 91, 110

// Write a JavaScript program to:

// Calculate the average score for each team.

// Determine which team has the higher average score.

// Print the winning team and their average score. If the averages are the same, print "It's a draw!".

// e.g Team B wins with an average score of 96.33

const totalscoreofteamA = 96 + 108 + 89;
console.log(totalscoreofteamA);
const totalscoreofteamB = 88 + 91 + 110;
console.log(totalscoreofteamB);
const AvgOfA = totalscoreofteamA / 3;
console.log(AvgOfA);
const AvgOfB = totalscoreofteamB / 3;
console.log(AvgOfB);
if (AvgOfA > AvgOfB) {
  console.log(`Team A wins with an average score of ${AvgOfA}`);
} else if (AvgOfB > AvgOfA) {
  console.log(`Team B wins with an average score of ${AvgOfB}`);
} else {
  console.log("Its a Draw");
}

//QUESTION 2

// A user is shopping online and has 3 items in their cart with the following prices:

// Item 1: 120

// Item 2: 80

// Item 3: 150

// The user’s account balance is 400.

// Tasks:

// Store the prices of the three items in separate variables.

// Calculate the total cost of all items in the cart.

// Use a conditional statement to determine if the user can proceed to checkout:

// If the balance is greater than or equal to the total cost, print "You can checkout".

// Otherwise, print "Insufficient balance".

const Item1 = 120;
const Item2 = 80;
const Item3 = 150;
const UsersBalance = 400;

const TotalCost = Item1 + Item2 + Item3;

// if (TotalCost > UsersBalance) {
//   console.log("You can checkout");
// } else {
//   console.log("Inufficient Balance");
// }

UsersBalance >= TotalCost
  ? console.log("You can checkout")
  : console.log("Insufficient Balance");

const Movieage = 18;
const Userage = 20;
// if (Userage > Movieage) {
//   console.log("You can watch the movie");
// } else {
//   console.log("Your are not old enough");
// }
Userage > Movieage
  ? console.log("You can watch the movie")
  : console.log("Your are not old enough");
const ticketPrice = 150;
const disccount = 30;
const userB = 120;
const isFan = false;
const disccountP = ticketPrice - disccount;
if (isFan) {
  console.log(`You are paying${disccountP}`);
} else {
  console.log(`You are paying ${ticketPrice}`);
}
if (userB >= ticketPrice || userB >= disccountP) {
  console.log("You can buy the football ticket");
} else {
  console.log("You do not have enough money for the football ticket");
}
