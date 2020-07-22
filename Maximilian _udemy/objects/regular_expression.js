let reExp = new RegExp();
reExp = /\S+@\S+\.\S+/;
const email = "test@gmail.com"; // validate email using regular expression
console.log(reExp.test(email));

const checkHello = /hello/;
const checkHello2 = /(h|H)ello/; 
const checkHello3 = /.ello/; // starting character can be any word
const str = "Hello world";
console.log(checkHello.test(str));//false
console.log(checkHello2.test(str));// true
console.log(checkHello3.test(str));
