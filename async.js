// ASYNCHRONOUS JAVA SCRIPT
// Non-blocking code

console.log("A");

setTimeout(() => {
  console.log("B");
}, 5000); // 5000 milliseconds

console.log("C");
/// A C B

// API IS USED TO - Fetch Data from an External source
// API- Application Programming Inerface
// Private API, Public API

const url = "https://jsonplaceholder.typicode.com/users";
// callbacks (.then) async/await
// PROMISES - returning a future value. pending, fuffiled()

// json -  javascript object notation

const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchUser();

const productUrl = "https://fakestoreapi.com/products";

const fetchProduct = async () => {
  try {
    const response = await fetch(productUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchProduct();

// TRY AND CATCH

try {
  console.log(ade);
} catch (error) {
  console.log(error);
}
