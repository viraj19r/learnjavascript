// basically behind the scenes classes are constructor function. earlier constructor function were used as classes were not discovered
//constructor function ;
// function Person() {  // first letter capital like as classes but it will also work with small letters
//   this.name = "doe";
//   this.age = 40;
//   this.greet = function () {
//     console.log("hi i am " + this.name + " and my age is " + this.age);
//   };
// }
// const person = new Person();
// person.greet();

// use prototype to add properties to constructor function
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  }
   Person.prototype.nationality = "English";
   const person = new Person();
console.log(person.nationality);