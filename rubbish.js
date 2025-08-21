const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

const productTitle = () => {
  const search = cart.map((product) => product.title);
  return search;
};
console.log(productTitle());

// const itemTotal = () => {
//   const search = cart.map((product) =>
//     product.quantity.reduce((a, b) => a + b, 1)
//   );
//   return search;
// };
// console.log(itemTotal());

const mostExpensive = () => {
  const find = cart.map((product) => product.price);
  return find;
};
console.log(mostExpensive());

// 1. Write a function that prints out the title of each product in the cart array.

// 2. Write a function that calculates the total number of items (quantity) in the cart.

// 3. Write a function that finds and prints the most expensive product in the cart.

//4. Write a function that calculates the total value of the cart by multiplying the price
//and quantity for each product, and then summing up the results.
const totalValueOfCart = () => {};

//5. Write a function that filters and displays products that cost more 100
const costMoreThan100 = cart.filter((product) => product.price > 100);
console.log(costMoreThan100);

//6. Write a function that checks if a certain product is in the cart
// based on its title.e.g is Laptop in the cart
const checkCart = (searchtitle) => {
  const searches = cart.some((product) =>
    product.title.includes(searchtitle)
  );
  return searches;
};
console.log(checkCart('TV'));

//7. Write a function that displays each product along with its total value (price * quantity).

//8. Write a function that concatenates all the
// product titles into a single string, separated by dash.
const arrayToString = () => {
  const toStr = cart.map((product) => product.title).join("-");
  return toStr;
};
console.log(arrayToString());

//9. Write a function that checks if the cart contains
//any products that are more expensive than 70.

const expensiveThan70 = cart.some((product) => product.price > 70);
console.log(expensiveThan70);

//10. Write a function that clears the entire cart (removes all products).
