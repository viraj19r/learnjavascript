const { json } = require("body-parser");

document.cookie = "  "; // adding a value to cookie, we can add as much as we want(all will be stored independently)

// cookie will not be store in a browsers storage unless our project is not on the server, it only works/stored when our project is placed on server
const var1 = "u123";
document.cookie = `uid=${var1}; max-age=50`; //expiration date is set to 50 secs

console.log(document.cookie); // it will console all the existing cookies
const obj = { name: "john", age: 30 };
document.cookie = `user=${JSON.stringify(obj)}`; // storing an object

// if we will not set an expiration dates on cookies they will expire after session is expired
