import {
  it,
  describe,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
// let user = new User(testEmail);
let user;

beforeAll(() => {
  // will run at the begining of all of the tests (can be inside of describe for groupint tests)
  user = new User(testEmail);
  console.log("beforeAll()");
});
beforeEach(() => {
  // will run at the begining of every test (can be inside of describe for groupint tests)
  user = new User(testEmail);
  console.log("beforeEach()");
});
afterEach(() => {
  // will run at the ending of every test (can be inside of describe for groupint tests)
  // user = new User(testEmail);
  console.log("afterEach()");
});
afterAll(() => {
  // will run at the ending of all of the tests (can be inside of describe for groupint tests)
  console.log("afterAll()");
});

it("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail); // this line will manipulate the user object for the rest of the tests witout the hooks

  expect(user.email).toBe(newTestEmail);
});

// describe.concurrent(); // this will run all the test inside of it in parallel

it.concurrent("should have an email property", () => {
  // this will run the test in parallel with other tests and will not wait for the other one to be finished. it's good for tests that doesn't depend  on the previous test
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  }
);
