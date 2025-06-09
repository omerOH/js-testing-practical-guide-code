import { it, expect } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  // this is test for callback
  generateToken(testUserEmail, (err, token) => {
    //vitetes and jest will wait until done function will finish otherwise they will skip any callback functions
    try {
      expect(token).toBeDefined(); // not to be undefined but to be some kind of string
      //   expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

// first way of handling promieses
it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  // return  expect(generateTokenPromise(testUserEmail)).rejects.toBeDefined();
});

// second way of handing promieses
it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
