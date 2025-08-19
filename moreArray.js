const africanCountries = ["Nigeria", "Southafrica", "Ghana", "Togo", "Tunisia"];
console.log(africanCountries.includes("Tanzania"));
console.log(africanCountries.length);
africanCountries.unshift("Kenya");
console.log(africanCountries);
africanCountries.push("Ethopia");
console.log(africanCountries);
africanCountries.sort();
console.log(africanCountries);
africanCountries.reverse();
console.log(africanCountries);
console.log(africanCountries.concat("China", "India", "Taiwan"));

const startWithT = africanCountries.find((country) => country.startsWith("T"));
console.log(startWithT);

const moreThan5 = africanCountries.filter((country) => country.length > 5);
console.log(moreThan5);

const toCapitalLetter = africanCountries.map((country) =>
  country.toUpperCase()
);
console.log(toCapitalLetter);

const pInIt = africanCountries.every((country) => country.includes("p"));
console.log(pInIt);

let myBalance = 5000;
const transactions = [6000, -3000, 9000, 400, -2000];

const allCredittransaction = transactions.filter(
  (transaction) => transaction > 0
);
console.log(allCredittransaction);

const allDebitTransaction = transactions.filter(
  (transaction) => transaction < 0
);
console.log(allDebitTransaction);
const ifTransactionisGreaterThanBalance = transactions.some(
  (allCredittransaction) => allCredittransaction > myBalance
);
console.log(ifTransactionisGreaterThanBalance);

const availableBalance = transactions.reduce((a, b) => a + b, myBalance);
console.log(availableBalance);
