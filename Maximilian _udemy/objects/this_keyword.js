const person = {
  "first name": "Dan",
  age: "30",
  1.5: "hello",
  hobbies: ["playing", "coding"],
  greet: () => "hi there",
  print: function () {
    return console.log(this.age);
  },
};

person.print();
// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());
