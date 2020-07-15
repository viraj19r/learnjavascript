const amount = [10.7, 4, 5.6, 3, 6, 2.66];
amount.sort((a, b) => {
  // if (a > b) {
  //   return 1;
  // } else if (a === b) {
  //   return 0;
  // } else {
  //   return -1;
  // }
  // we can use ternary operator
  return a > b ? 1 : a === b ? 0 : -1;
}); // it converts to string and then sort that is why 10.7 comes first in o/p because 1 is smallest.

console.log(amount);
console.log(amount.reverse());
// filter array- elements greater than 5 should be filled in the array
// const filteredAmount = amount.filter((aValue,aIndex,aArray)=>{
//   return aValue > 5;     // if  this condition will be true for the array element then it will be stored in the new array otherwise not
// });
//or
const filteredAmount = amount.filter((aValue) => aValue > 5); // if  this condition will be true for the array element then it will be stored in the new array otherwise not

console.log(filteredAmount);
