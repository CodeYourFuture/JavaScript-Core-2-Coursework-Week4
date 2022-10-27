// create array of url img
const cates = [
  "example-screenshots/kitten3.jpg",
  "example-screenshots/kitten1.jpg",
  "example-screenshots/kitten2.jpg",
];
let count = 0; // counter use in array
const forward = document.getElementById("forward"); // select forward button by  ID
const back = document.getElementById("back"); // select back button by  ID
const autoForward = document.getElementById("autoForward"); // select autoforward button by  ID
const autoBack = document.getElementById("autoBack"); // select autoback button by  ID
const stopSlit = document.getElementById("stop"); // select stop button by  ID
let cat3 = document.querySelector("img"); // select Img button by  selctor
let stopMove; // used to stop movment
cat3.setAttribute("src", cates[count]); // display first img

// add event  to forward button
forward.addEventListener("click", () => {
  if (count === cates.length - 1) {
    count = 0;
    cat3.setAttribute("src", cates[count]);
  } else {
    count++;
    cat3.setAttribute("src", cates[count]);
  }
});
// add event  to back button
back.addEventListener("click", () => {
  if (count === 0) {
    count = cates.length - 1;
    cat3.setAttribute("src", cates[count]);
  } else {
    count--;
    cat3.setAttribute("src", cates[count]);
  }
});

// add event  to autoForward button
autoForward.addEventListener("click", () => {
  stopMove = setInterval(() => {
    if (count === cates.length - 1) {
      count = 0;
      cat3.setAttribute("src", cates[count]);
    } else {
      count++;
      cat3.setAttribute("src", cates[count]);
    }
  }, 1000);
});
// add event  to autoBack button

autoBack.addEventListener("click", () => {
  stopMove = setInterval(() => {
    if (count === 0) {
      count = 2;
      cat3.setAttribute("src", cates[count]);
    } else {
      count--;
      cat3.setAttribute("src", cates[count]);
    }
  }, 1000);
});

// add event to stop button
stopSlit.addEventListener("click", () => {
  clearInterval(stopMove);
});
