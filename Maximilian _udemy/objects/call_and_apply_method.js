// call()
//It can be used to call a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// }
// const person1 = {
//     firstName : "doe",
//     lastName : "john",
// }
// console.log(person.fullName.call(person1));

// function with arguments

// var person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };
// var person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person.fullName.call(person1, "Gurugram", "India"));

// apply method--similar to call method
// With the apply() method, you can write a method that can be used on different objects.
// difference between call and apply is - call takes arguments separately and apply takes arguments as an array
// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// }
// const person1 = {
//     firstName : "doe",
//     lastName : "john",
// }
// console.log(person.fullName.apply(person1));

// function with  arguments
var person = {
    fullName: function (city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
  };
  var person1 = {
    firstName: "John",
    lastName: "Doe",
  };
  console.log(person.fullName.apply(person1, ["Gurugram", "India"]));
