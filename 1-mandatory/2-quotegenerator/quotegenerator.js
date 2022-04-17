// IMPORT quote.js FUNCTIONALITY AND DATA

import { pickFromArray, quotes } from "./quotes.js";

// BUILD BASIC FRAME AND ATTACH IT TO BODY

const mainDiv = document.createElement("div"),
  quote = document.createElement("h1"),
  quoteText = document.createTextNode("SampleQuoteText"),
  author = document.createElement("h2"),
  newQuoteButton = document.createElement("button"),
  quoteIconLeft = document.createElement("i"),
  quoteIconRight = document.createElement("i"),
  toggleContainer = document.createElement("div"),
  toggle = document.createElement("div"),
  toggleButton = document.createElement("div"),
  toggleText = document.createElement("div"),
  autoText = document.createElement("div");

newQuoteButton.innerText = "New Quote";
autoText.innerText = "Auto-Play";

toggle.append(toggleButton);
toggleContainer.append(autoText, toggle, toggleText);
quote.append(quoteIconLeft, quoteText, quoteIconRight);
mainDiv.append(quote, author, newQuoteButton, toggleContainer);
document.body.append(mainDiv);

// STYLE NEWLY CREATED ELEMENTS

document.body.style.backgroundColor = "teal";

mainDiv.style.backgroundColor = "white";
mainDiv.style.minHeight = "250px";
mainDiv.style.width = "550px";
mainDiv.style.marginTop = "50px";
mainDiv.style.padding = "40px 20px 10px";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.justifyContent = "space-around";
mainDiv.classList.add("mainDiv");

quote.style.textAlign = "center";
quote.style.fontStyle = "italic";
quote.style.fontSize = "1.75rem";
quote.style.fontWeight = "bold";
quote.style.color = "teal";

quoteIconLeft.classList.add("fa-solid", "fa-quote-left");
quoteIconRight.classList.add("fa-solid", "fa-quote-right");

author.style.fontSize = "1rem";
author.style.fontStyle = "italic";
author.style.color = "teal";
author.style.textAlign = "right";
author.style.margin = "30px 0 60px";

newQuoteButton.style.alignSelf = "flex-start";
newQuoteButton.style.color = "white";
newQuoteButton.style.border = 0;
newQuoteButton.style.padding = "5px 10px";
newQuoteButton.style.borderRadius = "5px";
newQuoteButton.setAttribute("id", "new-quote-button");
newQuoteButton.classList.add("new-quote-button");

// EXTRA TOGGLE BUTTON

toggleContainer.classList.add("container");
toggle.classList.add("toggle");
toggleButton.classList.add("toggle-button");
toggleText.classList.add("text");
toggleText.innerText = "OFF";
autoText.classList.add("auto-text");

// RANDOM QUOTE

let renderNewQuote = () => {
  let randomQuote = pickFromArray(quotes);
  quoteText.nodeValue = ` ${randomQuote.quote} `;
  author.innerText = `-${randomQuote.author}`;
};

renderNewQuote();

newQuoteButton.addEventListener("click", renderNewQuote);

// EXTRA TOGGLE FUNCTIONALITY
let autoPlay;
const animate = () => {
  toggle.classList.toggle("active");
  toggleButton.classList.toggle("active");
  if (toggle.classList.contains("active")) {
    toggleText.innerText = "ON";
    autoPlay = setInterval(renderNewQuote, 10000);
  } else {
    toggleText.innerText = "OFF";
    clearInterval(autoPlay);
  }
};

toggle.addEventListener("click", animate);
