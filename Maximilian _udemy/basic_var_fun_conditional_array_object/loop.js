let array1 = [5432, 234, "India", "world"];
let array2 = ["yes", " no"];
let object1 = {
  Country: "India",
  State: "Rajasthan",
  Capital: "Jaipur",
};
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    break;
  }
  // console.log(i);
}
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  // console.log(i);
}
for (let i = array2.length - 1; i >= 0; i--) {
  // console.log(array2[i]);
}
for (const elements of array1) {
  //   console.log(elements);
}

for (const keys in object1) {
  //   console.log(`${keys} : ${object1[keys]}`);
}
let i = 0;
while (i < array1.length) {
  // console.log(array1[i]);
  i++;
}
let j = 5;
do {
  // console.log(j);
  j--;
} while (j > 0);

outerfor: for (let i = 0; i < 4; i++) {
  innerfor: for (let j = 4; j > 0; j--) {
    if (j === 2) {
      break outerfor;
    }
    // console.log(i, j);
  }
}
outerfor: for (let i = 0; i < 4; i++) {
  innerfor: for (let j = 4; j > 0; j--) {
    if (j === 2) {
      continue innerfor;
    }
    // console.log(i, j);
  }
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        sum = sum + i + j;
        break;
    }
}
// console.log(sum); 

