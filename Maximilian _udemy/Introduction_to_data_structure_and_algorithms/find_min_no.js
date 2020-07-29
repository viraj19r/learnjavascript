function minNumber(listOfNumbers) {
  let min = listOfNumbers[0];
  for (i = 1; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] < listOfNumbers[min]) {
      min = i;
    }
  }
  return console.log(listOfNumbers[min]);
}

minNumber([2, 3, -4, 1, 5]);
