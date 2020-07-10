let p1 = {name: "hello"};
let p2 = {name: "hello"};
console.log(p1===p2);  //false
console.log(p1==p2); //false
let p3 = p1;
console.log(p3);
console.log(p1===p3);  //true

let a1 = [1,2,3];
let a2 = [1,2,3];
console.log(a1===a2);  //false same as object
if ("a" > "b") {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}
if ("ab" > "aa") {
  console.log("ab is greater than aa");
} else {
  console.log("aa is greater than ab");
}
if ("a" > "A") {
  console.log("a is greater than A");
} else {
  console.log("A is greater than a");
}
let c = "an string";
let d = 6;
let e = {};
let f = [];
 if (!d){
     console.log("truthy value");
 }else{
     console.log("falsy value");
 }
 console.log("hello");