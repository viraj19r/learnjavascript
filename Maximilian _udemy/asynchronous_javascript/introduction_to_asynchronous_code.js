console.log("hi i will print first");

// const message = function () {
//   return console.log("hello");
// };

// setTimeout(message, 4000); // message is a callback function here,the function message will run after 3 secs
// this code takes time to run,that is why this is added to callback queue and all next lines of code executed first and after the stack is empty this will be executed (all this is handled by event loop)
// or we can also pass the function as argument as an anonymous function
// setTimeout(() => {
//   return console.log("hello");
// }, 2000);

// using promises
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("timer done ! "); // now we had set promise, now the code will only run when the timer is completed
    }, duration);
  });

  return promise;
};

setTimer(3000).then(() => {
  console.log("hello");
});

console.log("i am the last one");
