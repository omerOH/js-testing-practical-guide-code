import { describe, expect, it } from "vitest";

import { extractPostData } from "./posts.js";

describe("extractPostData()", () => {
    it('should extract title and content from the provided form data', () => {
        const testTitle = "Test Ttitle";
        const testContent = "Tet Content";

        const testFormData = {
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier];
            }
        }

        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
})