const stringCalculator = require("./calculator");

describe("Calculator Module", () => {
  test("it should return 0 when empty string is passed", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("it should return the number itself when a single number as string is passed", () => {
    expect(stringCalculator("1")).toBe(1);
  });

  test("it should return the sum of the numbers when a string of two comma separated numbers is passed", () => {
    expect(stringCalculator("1,5")).toBe(6);
  });

  test("it should return the sum of all the numbers when a string of any amount of comma separated numbers is passed", () => {
    expect(stringCalculator("1,5,4,2,3,1,7")).toBe(1 + 5 + 4 + 2 + 3 + 1 + 7);
  });

  test("it should return sum of all the numbers when string of numbers separated by \n is passed", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("it should return sum of all the numbers when a string of numbers separated by specified delimeter is passed", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  test("it should throw exception displaying list of negative numbers when a string containing negative numbers is passed", () => {
    expect(() => {
      stringCalculator("1,-2");
    }).toThrow("negative numbers not allowed -2");
  });
});
