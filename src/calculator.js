function stringCalculator(input) {
  if (!input.length) {
    return 0;
  }

  const numberArray = input.split(",");

  if (numberArray.length == 1) {
    return parseInt(input);
  }

  const sum = numberArray.reduce(
    (sum, currentValue) => sum + parseInt(currentValue),
    0
  );

  return sum;
}

module.exports = stringCalculator;
