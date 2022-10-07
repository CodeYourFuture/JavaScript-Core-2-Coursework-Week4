// Write your code here
let images = [
  "https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "https://images.unsplash.com/photo-1609231616387-5e652b6b14f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1614598009677-9885dca3caf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "https://images.unsplash.com/photo-1522856339183-9a8b06b05937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

let currenImg = document.getElementById("imgHolder");
let i = 0;
setImage(i);
let autoLeftInt;
let autoRightInt;

function autoLeft() {
  autoLeftInt = setInterval(function () {
    if (i == 0) {
      i = images.length - 1;
    } else {
      i--;
    }

    setImage(i);
  }, 1000);
}

function left() {
  if (i == 0) {
    i = images.length - 1;
  } else {
    i--;
  }

  setImage(i);
}

function stops() {
  clearInterval(autoLeftInt);
  clearInterval(autoRightInt);
}
function right() {
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setImage(i);
}

function autoRight() {
  autoRightInt = setInterval(function () {
    if (i == images.length - 1) {
      i = 0;
    } else {
      i++;
    }

    setImage(i);
  }, 1000);
}

function setImage(i) {
  //document.body.style.backgroundImage = "url('https://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg')";
  currenImg.style.backgroundImage = `url(${images[i]})`;
}
document.getElementById("autoLeft").addEventListener("click", () => {
  stops();
  autoLeft();
});

document.getElementById("left").addEventListener("click", () => {
  left();
});
document.getElementById("stop").addEventListener("click", () => {
  stops();
});
document.getElementById("right").addEventListener("click", () => {
  right();
});

document.getElementById("autoRight").addEventListener("click", () => {
  stops();
  autoRight();
});