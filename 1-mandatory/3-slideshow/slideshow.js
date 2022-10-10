function cycleImageBackward() {
    // if the currentIndex is within range
    if (currentIndex > 0 && currentIndex <= images.length - 1) {
        currentIndex--;
        imgElement.src = images[currentIndex].src;
        info.textContent = `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of ${images.length}`;
    // if the currentIndex is outside of that range, then reset the currentIndex to 
    } else {
        currentIndex = images.length - 1;
        imgElement.src = images[currentIndex].src;
        info.textContent = `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of ${images.length}`;
    }
}

function cycleImageForward() {
    if (currentIndex >= 0 && currentIndex < images.length - 1) {
        currentIndex++;
        imgElement.src = images[currentIndex].src;
        info.textContent = `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of ${images.length}`;
    } else {
        currentIndex = 0;
        imgElement.src = images[currentIndex].src;
        info.textContent = `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of ${images.length}`;
    }
}

// function to start/stop auto cycle backward
function autoCycleImageBackward() {
  // if the flag is false, start the cycling, toggle the flag, add a class to visually represent the behaviour
  if (isAutoCyclingBackward === false) {
    intervalIdBackward = setInterval(cycleImageBackward, slideshowInterval);
    isAutoCyclingBackward = true;
    autoBackwardButton.classList.add("autocycling");
  // if the flag is true, stop the cycle, toggle the flag, remove the class 
  } else if (isAutoCyclingBackward === true) {
    clearInterval(intervalIdBackward);
    isAutoCyclingBackward = false;
    autoBackwardButton.classList.remove("autocycling");
  }
}

// function to start/stop auto cycle forward
function autoCycleImageForward() {
  if (isAutoCyclingFoward === false) {
    intervalIdForward = setInterval(cycleImageForward, slideshowInterval);
    isAutoCyclingFoward = true;
    autoForwardButton.classList.add("autocycling");
  } else if (isAutoCyclingFoward === true) {
    clearInterval(intervalIdForward);
    isAutoCyclingFoward = false;
    autoForwardButton.classList.remove("autocycling");
  }
}

// function to stop any auto cycling behaviour
function stopCycling() {
  clearInterval(intervalIdBackward);
  isAutoCyclingBackward = false;
  autoBackwardButton.classList.remove("autocycling");  
  clearInterval(intervalIdForward);
  isAutoCyclingFoward = false;
  autoForwardButton.classList.remove("autocycling");
}

// function to change the slide show interval
function setSlideShowInterval() {
  clearInterval(intervalIdBackward);
  isAutoCyclingBackward = false;
  autoBackwardButton.classList.remove("autocycling");
  clearInterval(intervalIdForward);
  isAutoCyclingFoward = false;
  autoForwardButton.classList.remove("autocycling");
  slideshowInterval = Number(intervalInput.value) * 1000;
}

// initialise variables: the currentIndex, the images array, two flags and two interval IDs for the auto cycling, and the slide show interval
let currentIndex = 0;
const images = [];
let isAutoCyclingFoward = false;
let isAutoCyclingBackward = false;
let intervalIdForward;
let intervalIdBackward;
let slideshowInterval = 1000;

// populate the array, with individual objects, containing the src property and url value;
for (let i = 500; i < 530; i++) {
    images.push({src : `https://picsum.photos/id/${i}/600/300`});
    // images.push({src : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500/300`});
}

// create the image element
const imgElement = document.createElement("img");
imgElement.id = "slideshow-image";
imgElement.src = images[currentIndex].src;

// create the font awesome i elements for arrow left
const arrowLeftOne = document.createElement("i");
arrowLeftOne.className = "fa-solid fa-arrow-left";
const arrowLeftTwo = document.createElement("i");
arrowLeftTwo.className = "fa-solid fa-arrow-left";

// create the font awesome i elements for arrow right
const arrowRightOne = document.createElement("i");
arrowRightOne.className = "fa-solid fa-arrow-right";
const arrowRightTwo = document.createElement("i");
arrowRightTwo.className = "fa-solid fa-arrow-right";

const spanElementOne = document.createElement("span");
spanElementOne.textContent = "Auto";
const spanElementTwo = document.createElement("span");
spanElementTwo.textContent = "Auto";
// ^ why do i have to create two separate elements, why can't i copy/re-use the same one when appending to different elements?

// create the auto backward button element
const autoBackwardButton = document.createElement("button");
autoBackwardButton.id = "slideshow-auto-backward";
autoBackwardButton.appendChild(arrowLeftOne);
autoBackwardButton.appendChild(spanElementOne);
autoBackwardButton.addEventListener("click", autoCycleImageBackward);

// create the backward button element
const backwardButton = document.createElement("button");
backwardButton.id = "slideshow-backward";
backwardButton.appendChild(arrowLeftTwo);
backwardButton.addEventListener("click", cycleImageBackward);

// create the info span element
const info = document.createElement("span");
info.id = "slideshow-info";
info.textContent = `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} of ${images.length}`;

// create the forward button element
const forwardButton = document.createElement("button");
forwardButton.id = "slideshow-forward";
forwardButton.appendChild(arrowRightOne);
forwardButton.addEventListener("click", cycleImageForward);

// create the auto forward button element
const autoForwardButton = document.createElement("button");
autoForwardButton.id = "slideshow-auto-forward";
autoForwardButton.appendChild(spanElementTwo);
autoForwardButton.appendChild(arrowRightTwo);
autoForwardButton.addEventListener("click", autoCycleImageForward);


// <input id="slideshow-interval" type="number" value="1" min="1" max="10"></input>
const intervalInput = document.createElement("input");
intervalInput.id = "slideshow-interval-input";
intervalInput.type = "number";
intervalInput.value = (slideshowInterval / 1000).toString();
intervalInput.min = "1";
intervalInput.max = "10";

const intervalButton = document.createElement("button");
intervalButton.id = "slideshow-interval-button";
intervalButton.textContent = "Set Interval"
intervalButton.addEventListener("click", setSlideShowInterval);

// create the controls container div element
const controlsContainer = document.createElement("div");
controlsContainer.id = "slideshow-controls";

// append the button elements and info span element to the controls container div element
controlsContainer.appendChild(autoBackwardButton);
controlsContainer.appendChild(backwardButton);
controlsContainer.appendChild(info);
controlsContainer.appendChild(forwardButton);
controlsContainer.appendChild(autoForwardButton);
controlsContainer.appendChild(intervalInput);
controlsContainer.appendChild(intervalButton);

// create the app container div element
const appContainer = document.createElement("div");
appContainer.id = "app";

// append the img element and the controls container div element to the app container div element
appContainer.appendChild(imgElement);
appContainer.appendChild(controlsContainer);

// append the app container div element to the body element
document.body.appendChild(appContainer);