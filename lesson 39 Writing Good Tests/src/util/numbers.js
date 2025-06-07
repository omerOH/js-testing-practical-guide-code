import { validateStringNotEmpty, validateNumber } from "./validation.js";
export function transformToNumber(value) {
  // return NaN;
  return +value;
}

export function cleanNumbers(numbersValues) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
