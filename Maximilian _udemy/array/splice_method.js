// splice method is only available only on real arrays not on iterables and all
//.splice(start index(where to start delete,no of elements from start index to be deleted,all other optional arguments-- add as much arguments as we want to add inside the array in place of deleted items))

const arr1 = ["hi", "hello", "welcome", "great", "good"];
// arr1.splice(0,0); // nothing would be deleted
// arr1.splice(0,0,"insert before 0 index"); //insert an element before 0 index
// arr1.splice(0,2);// remove items from index 0 and 1
// arr1.splice(0,2,"newFirstIndex","newSecondIndex");
// arr1.splice(2,0,"before welcome");// add element before 2 index
// arr1.splice(2,1,"before welcome");// replace 2nd index with "before welcome"
// const removedElement = arr1.splice(0,2); // returns the array of the removed element
arr1.splice(-1, 1); // "-" it starts from last element, here last element will be deleted
console.log(arr1);
