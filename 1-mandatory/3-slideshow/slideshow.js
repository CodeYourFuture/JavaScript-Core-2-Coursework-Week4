// Write your code here

const myDiv = document.createElement("div");
document.body.append(myDiv);

let imageOne = document.createElement("img");
imageOne.setAttribute("id", "imageOne");
imageOne.setAttribute("src", "https://tinyurl.com/yc42neu5");

let imageTwo = document.createElement("img");
imageTwo.setAttribute("id", "imageTwo");
imageTwo.setAttribute("src", "https://tinyurl.com/bdhyxfe2");

let imageThree = document.createElement("img");
imageThree.setAttribute("id", "imageThree");
imageThree.setAttribute("src", "https://tinyurl.com/3yds2hy3");

// const carousel = [imageOne, imageTwo, imageThree]

//Next I need display the first image and create a button.
document.body.appendChild(imageTwo);

//Creating and appending buttons
const backButton = document.createElement("button");
backButton.innerText = `Back Button`;
const nextButton = document.createElement("button");
nextButton.innerText = `Next Button`;
const autoForward = document.createElement("button");
autoForward.innerText = `Auto-forward`;
const autoBackward = document.createElement("button");
autoBackward.innerText = `Auto-backward`;
const stopButton = document.createElement("button");
stopButton.innerText = `Stop`;
myDiv.appendChild(backButton);
myDiv.appendChild(nextButton);
myDiv.appendChild(autoForward);
myDiv.appendChild(autoBackward);
myDiv.appendChild(stopButton);

//Back button to cycle through images in reverse order
backButton.addEventListener("click", () => {
  let current_image = document.getElementById("imageTwo").src;
  if (current_image === imageTwo.src) {
    document.getElementById("imageTwo").src = imageOne.src;
  }
  if (current_image === imageOne.src) {
    document.getElementById("imageTwo").src = imageThree.src;
  }
  if (current_image === imageThree.src) {
    document.getElementById("imageTwo").src = "https://tinyurl.com/bdhyxfe2";
  }
});

//next button to cycle through images in the opposite direction(forward) of back button
nextButton.addEventListener("click", () => {
  let current_image = document.getElementById("imageTwo").src;
  if (current_image === imageTwo.src) {
    document.getElementById("imageTwo").src = imageThree.src;
  }
  if (current_image === imageThree.src) {
    document.getElementById("imageTwo").src = imageOne.src;
  }
  if (current_image === imageOne.src) {
    document.getElementById("imageTwo").src = "https://tinyurl.com/bdhyxfe2";
  }
});

autoForward.addEventListener("click", () => {
  setInterval(() => {
    let current_image = document.getElementById("imageTwo").src;
    if (current_image === imageTwo.src) {
      document.getElementById("imageTwo").src = imageThree.src;
    }
    if (current_image === imageThree.src) {
      document.getElementById("imageTwo").src = imageOne.src;
    }
    if (current_image === imageOne.src) {
      document.getElementById("imageTwo").src = "https://tinyurl.com/bdhyxfe2";
    }
  }, 5000);
});

autoBackward.addEventListener("click", () => {
  setInterval(() => {
    let current_image = document.getElementById("imageTwo").src;
    if (current_image === imageTwo.src) {
      document.getElementById("imageTwo").src = imageOne.src;
    }
    if (current_image === imageOne.src) {
      document.getElementById("imageTwo").src = imageThree.src;
    }
    if (current_image === imageThree.src) {
      document.getElementById("imageTwo").src = "https://tinyurl.com/bdhyxfe2";
    }
  }, 5000);
});

stopButton.addEventListener("click", () => {
  clearInterval(autoForward);
});

