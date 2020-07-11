const sumAll = (...num) => {
  // now we can pass as many arguments as we want to with the help of rest operator.here we are not limited
  // rest operator should be last argument in the list
  let sum = 0;
  for (const elements of num) {
    sum += elements;
  }
  return sum;
};
console.log(sumAll(3, 57, 2, 7, 4, 35, 36));
console.log(sumAll(3, 4, 5, 6, 7, 8, 9, 3, 22, 4, 5, 5, 5));

const sumAll1 = (...num) => {
    const validateNo = (num) => {
        return isNaN ? 0 :num ;
    }
    let sum = 0;
    for (const elements of num) {
      sum += elements;
    }
    return sum;
  };
