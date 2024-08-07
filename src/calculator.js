function stringCalculator(input) {
  if (!input.length) {
    return 0;
  }

  const numberArray = input.replace('\n', ',').split(",");

  const sum = numberArray.reduce(
    (sum, currentValue) => sum + parseInt(currentValue),
    0
  );

  return sum;
}

module.exports = stringCalculator;
