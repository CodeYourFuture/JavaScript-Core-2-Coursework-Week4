// Write your code here
let images = [
  "https://images.unsplash.com/photo-1655635131711-f52f3fd15328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1655635131672-69bdb6bd18a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1655635131633-a36ecd7f5b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1655635131607-3202827a52a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
];

let autoForward = "";
let autoBack = "";
let imageSrc = document.querySelector(".slideshowImage");
let currentPosition = 0;
imageSrc.src = images[currentPosition];

function stopIt() {
  clearInterval(autoForward);
  clearInterval(autoBack);
}

function goForward() {
  if (currentPosition === 3) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  imageSrc.src = images[currentPosition];
}

function pressForward() {
  stopIt();
  goForward();
}
function pressBack() {
  stopIt();
  goBack();
}

function goBack() {
  if (currentPosition === 0) {
    currentPosition = 3;
  } else {
    currentPosition--;
  }
  imageSrc.src = images[currentPosition];
}

function goAutoForward() {
  stopIt();
  let durationSeconds = document.getElementById("slideDuration").value;
  let durationMilliseconds = 0;
  if (durationSeconds < 1) {
    durationMilliseconds = 1000;
  } else {
    durationMilliseconds = durationSeconds * 1000;
  }
  autoForward = setInterval(goForward, durationMilliseconds);
}

function goAutoBack() {
  stopIt();
  let durationSeconds = document.getElementById("slideDuration").value;
  let durationMilliseconds = 0;
  if (durationSeconds < 1) {
    durationMilliseconds = 1000;
  } else {
    durationMilliseconds = durationSeconds * 1000;
  }
  autoBack = setInterval(goBack, durationMilliseconds);
}

let autoBackBtn = document.querySelector(".auto-back-button");
autoBackBtn.addEventListener("click", goAutoBack);

let forwardBtn = document.querySelector(".forward-button");
forwardBtn.addEventListener("click", pressForward);

let stopBtn = document.querySelector(".stop-button");
stopBtn.addEventListener("click", stopIt);

let autoForwardBtn = document.querySelector(".auto-forward-button");
autoForwardBtn.addEventListener("click", goAutoForward);

let backBtn = document.querySelector(".back-button");
backBtn.addEventListener("click", pressBack);

