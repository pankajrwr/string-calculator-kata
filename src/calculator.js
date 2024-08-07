function stringCalculator(input) {
  if (!input.length) {
    return 0;
  }

  let delimeter;
  if (input.startsWith("//")) {
    /**
     * if the input starts with // it means here we have special delimeter surrounded by // and \n.
     * Because this whole pattern will be at the start of the string, the char at index 2 will give us the delimeter
     * And the remaining part of the input after the pattern will give us our actual input we need to operate on
     */
    delimeter = input.charAt(2);
    input = input.substring(input.indexOf("\n") + 1);
  } else {
    // By default we will consider comma as our delimeter
    delimeter = ",";
    // We will replace \n with comma just in case it exists in the input
    input = input.replace("\n", ",");
  }

  const numberArray = input.split(delimeter);

  const negativeNumbers = numberArray.filter((num) => num < 0 );
  if (negativeNumbers.length) {
    throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
  }

  const sum = numberArray.reduce(
    (sum, currentValue) => sum + parseInt(currentValue),
    0
  );

  return sum;
}

module.exports = stringCalculator;
