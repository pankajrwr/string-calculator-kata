function stringCalculator(input) {
  if (!input.length) {
    return 0;
  }

  if (input.startsWith("//")) {
    const delimeter = input.charAt(2);
    input = input.substring(input.indexOf("\n") + 1);
    const inputToArray = input.split(delimeter);
    return inputToArray.reduce(
      (sum, currentValue) => sum + parseInt(currentValue),
      0
    );
  }

  const numberArray = input.replace("\n", ",").split(",");

  const sum = numberArray.reduce(
    (sum, currentValue) => sum + parseInt(currentValue),
    0
  );

  return sum;
}

module.exports = stringCalculator;
