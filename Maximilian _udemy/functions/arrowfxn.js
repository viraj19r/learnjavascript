let randomNumber = Math.random();

const greet = function () {
  // anonymous function
  if (randomNumber < 0.5) {
    console.log("hi");
  } else {
    console.log("hello");
  }
};
//or we can write as
const greet2 = () => {
  // arrow function
  if (randomNumber < 0.5) {
    console.log("hi");
  } else {
    console.log("hello");
  }
};
//or
const greet3 = () =>
  // we can remove return statement and curly braces when using only one sentence inside the arrow function
  randomNumber < 0.5 ? console.log("hi") : console.log("hello");

const add = (a, b) => a + b; // arrow function to add two numbers

function add1(a, b = 5) {
  // here we set a default value for the argument (b = 5)
  return a + b;
}
