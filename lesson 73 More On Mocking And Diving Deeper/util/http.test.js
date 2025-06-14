import { it, expect, vi } from "vitest";

import { sendDataRequest } from "./http.js";
import { HttpError } from "./errors.js";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testReponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testReponse);
  });
});
// vi.stubGlobal("fetch", () => {}); // creates mocking for global functions
vi.stubGlobal("fetch", testFetch); // creates mocking for global functions 

it("should return any available response data", () => {
  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});
it("shoud convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }
  expect(errorMessage).not.toBe("Not a string.");
});

it("should throw an HttpError i n case of non-ok response", () => {
  testFetch.mockImplementationOnce((url, options) => { // mockImplementationOnce is used to override the mock function for a single call
    return new Promise((resolve, reject) => {
      const testReponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testReponse);
    });
  }); //

  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
})
