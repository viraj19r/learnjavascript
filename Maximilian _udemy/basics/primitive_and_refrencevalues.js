//primitive values

let var1 = "india";
let var2 = var1; // var2 = india
// here in primitive values var1 === var2
var1 = "world"; // still var2 = india (these are primitive values)

// Reference values
let arr1 = ["india"];
let arr2 = arr1;

// arr1.push("world"); //now both arr1 arr2 == ["india", world]

arr2.push("world"); // still both arr1 arr2 == ["india", world] these are reference values

// spread operator
let arr3 = [...arr1]; //arr1 is copied in arr3 with the help of spread operator now if we push anything in arr1, will not be added to arr3(benefit of spread operator)

arr4 = [5];
arr5 = [5]; // if we compare arr4 === arr5 it will be "false" because they stored in different memory with different addresses unlike arr1 or arr2
console.log(arr4 === arr5);

const arr5 = ["hello"];
arr5.push("hai"); // arr5 is a constant variable still "hai" will be pushed inside it, this is because we the changing the memory(allocated more memory) but the address is still the same
// arr5 = ["hai"] this will throw an error because here we the changing the address too
