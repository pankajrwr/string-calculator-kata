function stringCalculator(input) {
  if (!input.length) {
    return 0;
  }

  const numberArray = input.split(",");

  if (numberArray.length == 1) {
    return parseInt(input);
  }
}

module.exports = stringCalculator;
