const person = {
  "first name": "Dan",
  age: "30",
  1.5: "hello",
  hobbies: ["playing", "coding"],
  greet: () => "hi there",
};
// const person2 = {...person};// objects are reference values so we cannot assign them to new variable(they will point to same memory), that is why we use spread operator to copy all object key values to another constant pointing towards new memory location
const person2 = { ...person, age: "29" }; // this will change age
const per = { country: "india", planet: "earth", galaxy: "milky way" };
// assign method to copy -- assign(target(where to copy),source1,source2,....)

const person3 = Object.assign({}, person, person2, per); //all changes will be overridden if there any in previous key value pair and output will be consoled(now only one age 29 will be shown in output)

// object destructuring
const { planet, ...others } = per;
const { planet: ourPlanet } = per; // assign new name

// console.log(ourPlanet);

// checking for property existence
if ("planet" in per) {
  console.log("yes");
}
if (!("country" in per)) {
  console.log("no");
} else {
  console.log("yes");
}
