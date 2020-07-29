function arraySum(array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return console.log(sum);
}

arraySum([5, 4, 3, 2, 1]);
