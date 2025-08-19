// DATE OBJECT

const date = new Date();
console.log(date);

//  get methods
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());

// conversion
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());

console.log(`All Right Reserved ${date.getFullYear()}`);
