// REST AND SPREAD OPERATOR

//...
// REST OPERATOR ---- The right hand side of the assignment operator
//  used in destructuring to collect remaining values

// Rest Opretaor on an ARRAY
const countries = ["Brazil", "Russia", "Japan", "Togo", "Portugal"];
const [first, , ...others] = countries;
console.log(others);

// Rest Opretaor on an OBJECT
const user = {
  name: "John Doe",
  age: 32,
  gender: "Male",
  isMarried: true,
};

const { isMarried, age, ...remaining } = user;
console.log(remaining);

// SPREAD OPERATOR ---- The right hand side of the assignment operator
// used in unpacking values

const updatedUser = {
  ...user,
  country: "Nigeria",
};

console.log(updatedUser);

const developingCountries = ["Mali", ...countries, "Iran", "India"];
console.log(developingCountries);

const nums = [5, 7, 8, 9, 7];
console.log(Math.max(...nums)); // Math.max(5,7,9,3,7)

// Optional chaining
user?.profilePicture;
// <img src=user.profilePicture/>

// Nullish Coalescence - allows us to provide default values if a variables evaluates to null or undefined
const profilePicture = null;
console.log(profilePicture || "default avatar");
