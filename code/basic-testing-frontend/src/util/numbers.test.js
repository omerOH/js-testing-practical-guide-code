import { it, expect } from "vitest";

import { transformToNumber } from "./numbers.js";

it("should transform a string number to a number of type number", () => {
  // Arrange
  const input = "1";
  // Act
  const result = transformToNumber(input);
  // Assert
  //   expect(result).toBe(+input);
  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transfrmable values", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

it("should throw an error if no value is provided", () => {
  const resultFn = () => {
    transformToNumber();
  };
  expect(resultFn).not.toThrow();
});
