// symbols are primitive values, all the symbols have unique values(means each symbol points towards different memory location)
// symbols are used as identifiers for objects

const symbol1 = Symbol("id"); // id specifies a unique identity to the symbol
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false - even their ids are same

const obj = {
  id: 123,
  name: "john",
  age: 30,
  [symbol1]: 49709476655,
};

// obj[symbol1] = 49709476655; // or we can do as in line 12

console.log(obj[symbol1]);
console.log(obj.id);
console.log(Object.getOwnPropertyNames(obj));// symbol will not be printed
console.log(Object.getOwnPropertySymbols(obj));// symbol will be printed
