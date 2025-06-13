import { it, expect } from "vitest";

import { validateNotEmpty } from "./validation";

it("should throw an error if empty string is provided as a value", () => {
  const testInput = "";

  const validatonFn = () => validateNotEmpty(testInput);

  expect(validatonFn).toThrow();
});
it("should throw an error if whitespace is provided as a value", () => {
  const testInput = "   ";

  const validatonFn = () => validateNotEmpty(testInput);

  expect(validatonFn).toThrow();
});
it("should throw an error with the provided error message,", () => {
  const testInput = "";
  const testErrorMessage = "Test";

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
