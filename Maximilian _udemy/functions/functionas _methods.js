const var1 = {
  country: "india",
  greet: function greet() {
    // console.log("Hi there");
  }
};
var1.greet(); // here greet is an method

//  const greetingForUser = function greeting() {   // stored a function in a variable
//     console.log("welcome");
//   }

const greeting = function() {   // this function is called "anonymous function"
        console.log("welcome");
      }; // we now also need to add a semicolon here as it becomes a sentence now.
      // now the function is stored globally with the name of variable "greeting"
greeting(); // called an anonymous function