import { it, expect } from "vitest";

import { transformToNumber } from "./numbers.js";

it("should transform a string number to a number of type number", () => {
  // Arrange
  const value = "1";
  // Act
  const result = transformToNumber(value);
  // Assert
  expect(result).toBe(1);
});

it("should be NaN if a non-numeric string is provided", () => {
  const value = "invalid";

  const result = transformToNumber(value);

  expect(result).toBeNaN();
});

it("should throw an error if no value is provided", () => {
  const resultFn = () => {
    transformToNumber();
  };

  expect(resultFn).toThrow();
});
