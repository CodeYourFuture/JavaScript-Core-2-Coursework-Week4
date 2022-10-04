let images = [
  "https://images.unsplash.com/photo-1663908778255-bd560e30d55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1662522195455-956b870bad32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "https://images.unsplash.com/photo-1645474886991-032013802da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
  "https://images.unsplash.com/photo-1663483534256-cca864e104b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1663187114582-5cfcbdac5481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  "https://images.unsplash.com/photo-1663042446293-12f4d284a7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1661700249878-72659beca3a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
  "https://images.unsplash.com/photo-1661811319323-050333ada2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
  "https://images.unsplash.com/photo-1660753336510-7a6658e1652e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1623434988919-1416a8a35b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1659204994421-defa6dca745c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1659342405102-c2343c09c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1663875919989-62c9fa1d2da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1663947718652-fa32fb546da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1543782248-03e2c5a93e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1658437920181-0d95844e0839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  "https://images.unsplash.com/photo-1658188920091-8d38c64bcb79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1658239827341-b6c8be3e6ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
//variables
let counter = 0;
let forwardIntervId;
let backIntervId;

// display for image when page loads
let imageBox = document.querySelector(".imageBox");
let ul = document.createElement("ul");
imageBox.appendChild(ul);
let li = document.createElement("li");
ul.appendChild(li);
let img = document.createElement("img");
img.style.width = "600px";
img.style.height = "600px";
img.src = images.map((i) => i);
li.appendChild(img);

// event listener for forward button
document.querySelector(".forwardBtn").addEventListener("click", loopForward);

// Event listener for back button
document.querySelector(".backBtn").addEventListener("click", loopBack);

// auto forward event

document
  .querySelector(".autoForwardBtn")
  .addEventListener(
    "click",
    () => (forwardIntervId = setInterval(loopForward, 1000))
  );

// auto back event

document
  .querySelector(".autoBackBtn")
  .addEventListener(
    "click",
    () => (backIntervId = setInterval(loopBack, 1000))
  );

function loopForward() {
  counter++;
  if (counter >= images.length) counter = 0;
  img.src = images[counter];
  imageCount();
}

function loopBack() {
  if (counter <= 0) {
    counter = images.length;
  }
  counter--;
  img.src = images[counter];
  imageCount();
}

// event listener for stop button

document.querySelector(".stopBtn").addEventListener("click", () => {
  clearInterval(forwardIntervId);
  clearInterval(backIntervId);
});

function imageCount() {
  document.querySelector(
    "h1"
  ).innerText = `Image: ${counter} / ${images.length}`;
}
imageCount();
