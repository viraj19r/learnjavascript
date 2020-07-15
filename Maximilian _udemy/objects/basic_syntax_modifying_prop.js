const person = {
  "first name": "Dan", // object keys are later stored as strings in javascript, so to give special names to keys we can insert the key name inside quotes(this will help us in creating names in which we use space,dash,etc). These names we can only access through square bracket notation
  age: "30",
  1.5: "hello",
  hobbies: ["playing", "coding"], // array(object) inside object
  greet: () => "hi there", // a function inside object ==== method
};
// accessing properties
// console.log(person.greet(),person.name,person.age,person.hobbies);

// adding properties
person.favColor = "green";
person.age = 31;

//deleting properties
delete person.hobbies;

// console.log(person["first name"]);
// console.log(person["1.5"]);
// console.log(person[1.5]); // both are correct
// dynamically accessing properties
keyName = "first name";
console.log(person[keyName]); // it would not work with dot notation

// const person1 = {
//   5: "Dan",      // if we have all key names as numbers then output will be in ascending order of the number keys and decimal values will be after them
//   2: "30",
//   3.5 : "hello",

// };
// console.log(person1);
