// DOM - Document Object Model
// Allows us to acces element on the page, change content on the page, add or remove elements dynamically
// respond to user interaction

// ACCESS ? GET ELEMENT ON THE PAGE
// getelementbyid, getelementbyTagName (hi, p), getelementbyClassnames
// const headings = document.getElementsByTagName("h1");
// console.log(headings);

// const heading = document.getElementById("hello");
// console.log(heading);

// const paragraphs = document.getElementByClassname("para1");
// console.log(paragraphs);

// console.log(paragraphs[0]);

// querySelector(first element), querySelectorAll (All element that fit its selection)
// Uses CSS selections .ClassName, #idName, div .error
// const para = document.querySelector(".para1");
// console.log(para);

// const paras = document.querySelectorAll(".para1");
// console.log(paras);

// CHANGING CONTENT WITH JS

// const heading = document.querySelector("#hello");
// heading.textContent += " , Js is fun";

// const para = document.querySelector("p");
// para.innerText = "Hello Dom Practice";
// const myDiv = document.querySelector("div");
// // myDiv.innerHTML += "<p> p from JS </p>";
// const userName = "John";
// myDiv.innerHTML = `<h1> Welcome ${userName}</h1>`;
// // Change an Attribute
// const beginPara = document.querySelector(".begin");
// beginPara.id = "okay";
// beginPara.className = "good";
// beginPara.style.color = "green";
// beginPara.style.backgroundColor = "purple";

// const msgHeading = document.querySelector(".msg");
// // className (totally overide)
// // msgHeading.className = 'ola'
// // classList (remove, add, contain)
// msgHeading.classList.add("success");
// // msgHeading.classList.remove("msg");
// console.log(msgHeading.classList.contains("msg"));
// // CREATE DOM ELEMENT
// // const section = document.createElement("section");
// // section.innerHTML = "<h1> Created from JS</h1>";
// // const body = document.querySelector("body");
// // body.appendChild(section);

// const form = document.createElement("form");
// form.innerHTML = `<input type='text' placeholder="Enter Username" >
//  <input type='password' placeholder='password'>
//  <button>Login</button>`;
// const body = document.querySelector("body");
// body.appendChild(form);

// const link = document.createElement("a");
// link.innerText = "VISIT FACEBOOK";
// link.href = "https://facebook.com";

// const nav = document.querySelector("nav");
// nav.appendChild(link);

// // Responding to users interaction (click, submtit, typing
// // event- (event listener) event handler
// const btn = document.querySelector("button");
// // log user clicked
// btn.addEventListener("click", () => {
//   console.log("User Clicked");
//   body.style.backgroundColor = "blue";
// });

const theContent = document.querySelector(".desc");
const testBtn = document.querySelector(".textbtn");
testBtn.addEventListener("click", () => {
  theContent.style.display = "none";
});
// FORM HANDLINIG -> submit (do sth)
// 1. prevent the defaukt behaviour of the form
// 2. to get the users input (.value)
const myform = document.querySelector("form");
const usernameInput = document.querySelector("input");
const smallError = document.querySelector("small");

usernameInput.addEventListener("input", () => {
  const usernameValue = usernameInput.value;
  if (usernameValue.trim().length < 5) {
    smallError.innerText = "Min username length is 5";
    usernameInput.style.border = "2px solid red";
  } else {
    smallError.innerText = "";
    usernameInput.style.border = "";
  }
});

myform.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = usernameInput.value;
  if (!usernameValue.trim()) {
    smallError.textContent = "Please provide a username";
    usernameInput.style.border = "2px solid red";
  } else {
    console.log("Form Submitted", usernameValue);
    smallError.textContent = "";
    usernameInput.style.border = "";
  }
});
