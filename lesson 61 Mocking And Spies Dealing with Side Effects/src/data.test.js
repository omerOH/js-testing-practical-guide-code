import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

// this is the "spy" method that checks only if the function have been called at least once.
describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn(); // vi.fn() creates an empty function which keeps track of any function executions of that function (any calls to that function and track of the arguments).

    // const logger = vi.fn(() => {}); // instead of empty function i can make my own function behaiver

    logger.mockImplementationOnce(() => {}); // my replacement function will only be used once and the it will return to emprty function (vi.fn())

    generateReportData(logger);

    // expect(logger).toBeCalled(); // same as toHaveBeenCalled
    // expect(logger).toHaveBeenCalled(); // same as toBeCalled
    // expect(logger).toBeCalledTimes(2); // checks how much time the function have been called
  });
});
