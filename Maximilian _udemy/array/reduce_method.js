const amount = [4, 5.6, 3, 6, 2.66];
// we want to sum all elements

// const sum = amount.reduce((prevValue,curValue,index,wholeArray)=>{// reduce(an function, initial value(optional))
//  return prevValue + curValue;
// },0);
//or shorten arrow function
const sum = amount.reduce((prevValue,curValue)=>prevValue + curValue,0);// reduce(an function, initial value(optional))

console.log(sum);