import { describe, it, expect, beforeEach } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the properties statusCode, message, data", () => {
    const testStatus = 1;
    const testMessage = "Test";
    const testData = { key: "test" };
    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError).toHaveProperty("statusCode");
    expect(testError).toHaveProperty("message");
    expect(testError).toHaveProperty("data");
  });
  it("should contain the provided status code, message and data", () => {
    const testStatus = 1;
    const testMessage = "Test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
  it("should contain the undefined as data if not data is provided", () => {
    const testStatus = 1;
    const testMessage = "Test";

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});
describe("class ValidationError", () => {
  it("should contain the propertie message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError).toHaveProperty("message");
  });
  it("should contain the provided message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
  it("should contain the undefined as data if not message is provided", () => {
    const testError = new ValidationError();

    expect(testError.message).toBeUndefined();
  });
});
