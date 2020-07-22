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
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {                               // there is no meaning of this inside arrow function(it always refers to global object or window object )
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());
