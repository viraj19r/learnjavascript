const amount = [10.7, 4, 5.6, 3, 6, 2.66];
amount.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // it converts to string and then sort that is why 10.7 comes first in o/p because 1 is smallest.

console.log(amount);
console.log(amount.reverse());
