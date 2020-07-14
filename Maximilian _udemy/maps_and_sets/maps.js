const person1 = {name : "viraj"};
const person2 = {name : "rahul"};
 
const personData = new Map([[person1,[{date:14,workStatus: "done"}]]]);
//add new map
personData.set(person2,[{date:9,workStatus:"done"}]);
// console.log(personData);
// console.log(personData.get(person1));


for (const elements of personData.entries()){
    console.log(elements);
}
// for (const [key,value] of personData.entries()){
//     console.log(key ,value );
// }
// for (const elements of personData.keys()){
//     console.log(elements);
// }
// for (const elements of personData.values()){
//     console.log(elements);
// }
// console.log(personData.size);
// console.log(personData.clear());
