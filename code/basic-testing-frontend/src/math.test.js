import { it, test, expect } from "vitest"; // it and test are aliases in vitest

import { add } from "./math.js";

it("should summarize all number values in an array", () => {
  // Arrange - setup the test
  const number = [1, 2, 3];
  // Act - execute the code to be tested
  const result = add(number);
  // Assert - check the result
  const expectedResult = number.reduce((total, current) => {
    return total + current;
  }, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange - setup the test
  const number = ["1", "2"];
  // Act - execute the code to be tested
  const result = add(number);
  // Assert - check the result
  const expectedResult = number.reduce((total, current) => {
    return +total + +current;
  }, 0);
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/); // narrow the error option and it's optional to, i can also provide all types of errors like this .toThrow();
});

it("should throw and error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
