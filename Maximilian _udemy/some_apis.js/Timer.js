// function sayHi() {
//   alert("Hello");
// }
// // we should not add a parenthesis when we call a function inside the setTimeout function 
// setTimeout(sayHi, 7000); // the page will show alert after 7 secs

// function sayHi(phrase, who) {  // with arguments
//     alert( phrase + ', ' + who );
//   }
  
//   setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
// setTimeout(() => alert('Hello'), 1000); // short syntax



//setTimeout
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
