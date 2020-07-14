const arr1 = ["hi", "hello", "welcome", "great", "good"];
// const arr2 = arr1; // it basically stores the same array here, pointing to the same memory
const arr2 = arr1.slice(); // it basically copy the arr1 to arr2 , pointing to new memory and now if we change arr1, arr2 will not be changed
const arr3 = arr1.slice(1, 5); // slice(start index(where to start copying), end index(copy up to where))
const arr4 = arr1.slice(-4, 4);
console.log(arr4); // .slice method basically copies an array
