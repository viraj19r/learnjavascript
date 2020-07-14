const arr1 = [1,3,5,6];
const arr2 = ["hi"];
const arr3 = Array(1);  // empty array of length 1 if we pass just one no, if we pass more than one than an array will be created with the entered numbers
const arr4 = new Array(1); // empty array of length 1 if we pass just one no, if we pass more than one than an array will be created with the entered numbers
const arr5 = Array("HI");
const arr6 = new Array("hi","welcome");
const arr7 = Array.of(1);  // this will also print 1 unlike arr3,arr4 which can only create the array of length of the parameter passed 
const arr8 = Array.of("hi");
const arr9 = Array.from("hi how are you"); // stores every character of string as an unique array element
console.log(arr7);