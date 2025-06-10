import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs"); // this fs.mock() function will find this module (in this example the "fs") and it will replace it with empty "spy" functions which has only function that doesn't do anything.
vi.mock("path", () => {
  // this object will be used instead of empty function
  return {
    default: {
      //   join() {}, // this way or the next one
      join: (...args) => {
        return args[args.length - 1]; // i will receive the file name
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData); // this will check if the function have been called with my arguments
});
it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  // expect(fs.writeFile).toBeCalledWith(testFilename, testData); // this will check if the function have been called with my arguments
});
