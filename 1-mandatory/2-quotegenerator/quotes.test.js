/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  jest
    .spyOn(page.window.Math, "random")
    .mockReturnValueOnce(0.02) // random number to target Albert Einstein quote [index: 2]
    .mockReturnValueOnce(0.25) // random number to target Maya Angelou quote [index: 25]
    .mockReturnValueOnce(0.79); // random number to target Rosa Parks quote [index: 80]

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
  jest.restoreAllMocks();
});

describe("Quote generator", () => {
  test("initially displays quote and author", () => {
    const quoteP = page.window.document.querySelector("#quote");
    const authorP = page.window.document.querySelector("#author");

    expect(quoteP).toHaveTextContent(
      "Strive not to be a success, but rather to be of value."
    );
    expect(authorP).toHaveTextContent("Albert Einstein");
  });
  test("can change quote to another random quote", () => {
    const quoteP = page.window.document.querySelector("#quote");
    const authorP = page.window.document.querySelector("#author");
    const newQuoteBtn = page.window.document.querySelector("#new-quote");

    expect(quoteP).toHaveTextContent(
      "Strive not to be a success, but rather to be of value."
    );
    expect(authorP).toHaveTextContent("Albert Einstein");
    expect(newQuoteBtn).toHaveTextContent("New quote");

    userEvent.click(newQuoteBtn);

    expect(quoteP).toHaveTextContent(
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    );
    expect(authorP).toHaveTextContent("Maya Angelou");

    userEvent.click(newQuoteBtn);

    expect(quoteP).toHaveTextContent(
      "I have learned over the years that when one's mind is made up, this diminishes fear."
    );
    expect(authorP).toHaveTextContent("Rosa Parks");
  });
});
