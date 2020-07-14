const amount = [4, 5.6, 3, 6, 2.66];
const tax = 0.13;
const taxAmount = [];
// for (const elements of amount){
//     taxAmount.push(elements*(1+tax));
// }
// amount.forEach((taxAm,index,wholeArray)=>{ // forEach(all values of array,index of array, whole array)
//    taxAmount.push(taxAm*(1+tax));  
// });
console.log(taxAmount);
const addTaxToAmount = amount.map((taxAm,index,wholeArray)=>{ // map will now return(it must return something) a new array pointing to a new memory. so we can store in a variable
  return  taxAmount.push(taxAm*(1+tax));  
 });
 console.log(taxAmount);