const arr1 = ["hi","hello"]; 
arr1.push("welcome"); // add to end of array arr1
arr1.unshift("great"); // add to initial of the array arr1 or shift the last element to right (which is outside array)
const poppedValue = arr1.pop(); // poppedValue = welcome //.pop() removes the last element from the array
arr1.shift(); // removes the first element or we can say shift the first element to left(which is outside array)
// replace element :
arr1[1] = "change second element";
arr1[5] = "i am 6th element"; // index element 2,3,4 will be empty
console.log(arr1,);
