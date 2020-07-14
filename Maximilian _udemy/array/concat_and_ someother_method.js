const arr1 = ["hi","hello","welcome","great","good","welcome"];
// concat(takes arrays as an arguments) and it also creates a copy of array, means pointing to a new memory
// const arr2 = arr1.concat([3,4,5]);
// const arr2 = [7,3,6,2];
// const arr = ["okay","yes"];
// const arr3 = arr1.concat(arr2,arr);

// console.log(arr1.indexOf("welcome"));//indexOf(element whose index we need to find,(optional)where to start for searching)
// console.log(arr1.lastIndexOf("welcome")); // start searching from last index
// indexOf and lastIndexOf works fine with primitive values but not with reference values. 
// if indexOf and lastIndexOf do not finds any value then returns -1
const array1 = [{planet : "mars"},{planet : "earth"}];
// console.log(array1.indexOf({planet : "earth"})); // -1 // as expected for reference values
 const showObject = array1.find((a) => {// find(all values of array, index, whole array)
     return a.planet === "earth";
 });
//  earth.planet = "jupiter"; // it will returning the same object so we can change
//  console.log(earth);

 const showIndex = array1.findIndex((b) => { // findIndex(all values of array, index, whole array)
    return b.planet === "earth";
});
console.log(showIndex);

// .includes methods
console.log(arr1.includes("good"));// returns true if includes otherwise false