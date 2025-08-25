// OBJECT - {key: value, key: value}
// Object are descriptive, they are unstructured data types
// object can take any data type

// Object Methods - Function Declaration written by the Dev inside of an object

const person = {
  name: "John Doe",
  age: 42,
  complextion: "Dark",
  isMarried: true,
  friends: ["Peter", "Jane", "Susan"],
  descripton: function () {
    return `My name is ${this.name}, and i am ${this.age} years old`;
  },
  maritalSummary: function () {
    return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
  },
};

console.log(person.descripton());
console.log(person.maritalSummary());

// how to get properties from object, dot notation, bracket notation
// dot notation-- objectName.propertyName

console.log(person.name);
console.log(person.friends);
console.log(person.friends[1]);

// Bracket notation -- objectName['propertyName']
console.log(person["friends"][0]);

// How to add new properties to an object
person.height = `6'1`;
person.gender = "Male";
person["hobby"] = "Swimming";
// To remove properties - delete
delete person.complextion;
delete person["age"];
console.log(person);

// Nested Object
const customer = {
  id: " Cust-12",

  personalInfo: {
    firstName: "Peter",
    lastName: "Pan",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
  },

  contactInfo: {
    email: "peterpan13@gmail.com",
    phone: "+23409208878270",
    address: {
      street: "12 Bode Thomas",
      city: "Lagos",
      postalCode: "100001",
    },
  },

  accountInfo: {
    cardTypes: "Visa",
    accountNumber: "012345678",
    accountType: "Savings",
  },
  greeting: function () {
    return `Hello ${this.personalInfo.firstName} Welcome Back`;
  },
  getAddress: function () {
    return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} street,${this.contactInfo.address.city} `;
  },
};

// Write a method called greeting- Hello Peter, Welcome Back 
// write a method getAddress - Peter lives at 12 Bode Thomas street, Lagos
console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
console.log(customer["id"], ["personalInfo"], ["lastName"]);
console.log(customer.greeting());
console.log(customer.getAddress());

// adding bank name to the account info
customer.accountInfo.bankName = "GTBank";

// Object Destructuring - pick multiple properties from obj at a time

const book = {
  title: "Purple Hibiscus",
  author: "Chimamanda Ngozi Adichie",
  yearPublished: 2003,
  theme: ["Family", "Religion", "Freedom"],
  settings: {
    country: "Nigeria",
    cities: ["Enugu", "Nsuka"],
    timePeriod: "Postcolonial Nigeria",
  },
};

const {
  title,
  yearPublished,
  theme,
  settings: { country },
} = book;
console.log(title, yearPublished, theme);
console.log(country);
