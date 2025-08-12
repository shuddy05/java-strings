//STRINGS - text characters in double or single quotes
const firstName = "John";
const lastName = "Doe";
const middleName = "Shuddy";

//STRING PROPERTIES - length
console.log(middleName.length, firstName.length);
// st ring concatenation (joining of strings + a + b)
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
//STRING METHODS - built in JS functions that works on strings
//toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//starstWith, endsWith, includes
console.log(fullName.startsWith("J"));
console.log(fullName.endsWith("e"));
console.log(fullName.includes("n D"));

// replace and replaceAll
console.log(fullName.replace("J", "#"));
console.log(fullName.replaceAll("o", "#"));

let myEmail = "horlabodehyibrahim@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.replace("@", "*"));
console.log(myEmail.includes("m"));
console.log(myEmail.endsWith("google.com"));
// charAt, indexOf, lastIndexOf
// JS is a zero based lang (assigning position from 0)
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));
// concat, trim, slice, substring, substr
console.log(fullName.concat(" is my name"));
// trim- removes whitespaces
const username = "       user019";
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());
//Extract portions of a string
const surname = "Brooke";
// slice subststring (start end(non-inclusive))
console.log(surname.slice(2, 5));
console.log(surname.substring(1, 5));
// Substr (start, number of characters)
console.log(surname.substr(2, 2));
// Concatination
const author = "Chinua Achebe";
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;
// template literals `` `${Varnanme}
//The Things Fall Apart was authored by Chinua Achebe
const summary = `The ${bookTitle} was authored by ${author.toUpperCase()}`;
console.log(summary);

const summary2 = `${author} wrote the book ${bookTitle}`;
console.log(summary2);
// quote Tinubu said and i quote 'Let the Poor Breathe'
const quote = `Tinubu said and i quote 'Let the Poor Breathe'`;
console.log(quote);
const helloWorld = "hello world";
console.log(helloWorld.toUpperCase());
const java = "JAVASCRIPT";
console.log(java.toLowerCase());
const hel = "Hello";
console.log(hel.slice(0, 1));
console.log(helloWorld.slice(6, 11));
const cat = "I like cats";
console.log(cat);
console.log(cat.replace("cats", "dogs"));
const dog = "Dogs";
console.log(dog);
console.log(helloWorld.startsWith("Hello"));
const sokratis = "Sokratis Papastathopoulos";
console.log(sokratis.length);
const nickName = "Shuddy";
const favClub = "Barcelona";
console.log(nickName.toUpperCase());
console.log(favClub.toLowerCase());
const sentence = `i am ${nickName} and my favorite club is ${favClub}`;
console.log(sentence);
