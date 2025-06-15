import fs from 'fs';
import path from 'path';

import { it, vi, expect, beforeEach } from "vitest";

import { showError } from "./dom.js";

vi.stubGlobal("document", () => { }) // this is an posible way to mock the document object but because of document is a complex object, i will fix the problem in another way

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

it("should add an error paragraph to the id=\"errors\" element", () => {
    showError("Test");

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
    const testErrorMessage = "Test";

    showError(testErrorMessage);

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
})