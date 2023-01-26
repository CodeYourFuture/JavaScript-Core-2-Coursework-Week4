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

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
});

describe("Level 1 challenge", () => {
  test("renders the first image with control buttons", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);
    expect(forwardBtn).toBeInTheDocument();
    expect(backwardBtn).toBeInTheDocument();
  });
  test("can move the image forwards once", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[1]);
  });

  test("can move the image forwards multiple times", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("can move the image backwards to the end", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(backwardBtn);

    expect(image).toHaveAttribute("src", images[3]);
  });

  test("can move the image backwards multiple times", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");
    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(backwardBtn);
    userEvent.click(backwardBtn);

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("moving forwards will eventually wrap around to the start", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[0]);
  });
});

describe("Level 2 challenge", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("can start moving images forward automatically", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoForwardBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[3]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });
  test("can start moving images backward automatically", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoBackBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[3]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });
  test("can stop the automatic timer", () => {
    const images = [
      "https://images.unsplash.com/photo-1552450970-88b9d409fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1620383074552-6938c412faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1501510691679-728450bdcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      "https://images.unsplash.com/photo-1602731465531-14015e83a6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1618143309908-3ab8b930c55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const stopBtn = page.window.document.querySelector("#stop");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoForwardBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    userEvent.click(stopBtn);

    expect(autoForwardBtn).toBeEnabled();
    expect(autoBackBtn).toBeEnabled();

    jest.runOnlyPendingTimers();
    expect(image).toHaveAttribute("src", images[2]);
  });
});
