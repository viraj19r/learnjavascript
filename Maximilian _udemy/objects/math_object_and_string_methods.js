console.log(Math.random());
console.log(Math.max(5,4,43));
// generate a random number between two given numbers(a min and a max):-

function randomNoBetweenTwoNo (min,max) {
    return Math.floor(Math.random() * (max -min + 1) +min);
}
console.log(randomNoBetweenTwoNo(5,10)); //generate random no between 5 and 10


const str = "hello";
// console.log(str.length);
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
