// const person = {
//     firstName: "John",
//     lastName : "Doe",

//     fname : function fname() {
//       return this.firstName;
//     }
//   };
//   console.log(person.fname()); // here we are using function so we need to call it as person.fname()

// const person = {
//     firstName: "John",
//     lastName : "Doe",

//     get fname() {
//       return this.firstName;  
//     }
//   };

//   // Display data from the object using a getter:
//    console.log(person.fname); // accessing as person.fname

var person = {
  firstName: "john",
  lastName: "Doe",
  language: "",

  set fname(name) {
    this.firstName = name;
  },
};

// Set an object property using a setter:
person.fname = "Max";
console.log(person.firstName);
