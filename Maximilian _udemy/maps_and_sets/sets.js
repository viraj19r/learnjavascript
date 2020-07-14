//create a set
const ids = new Set([1, 2, 3]);
ids.add("Hi!");
ids.delete(2);
ids.delete("hello"); // hello is not in set,still it will not through any error, just ignored this sentence

console.log(ids);
console.log(ids.has(1));
// for (const elements of ids.entries()){
//     console.log(elements);
// }
for (const elements of ids.entries()) {
  console.log(elements[0]);
}
