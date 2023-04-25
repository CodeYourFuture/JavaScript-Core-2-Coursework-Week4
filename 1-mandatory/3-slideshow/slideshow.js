/* 
1. define variables
2. define eventListeners
3. define funtions
*/

// variables

const images = [
    {
      src: "./assets/cute-cat-a.png",
      // alt : "cute white cat with black and grey stripes"
      caption: "cute cat",
    },
  
    {
      src: "./assets/cute-cat-b.jpg",
    },
  
    {
      src: "./assets/cute-cat-c.jpg",
    },
  ];
  
  const image = document.querySelector("#carousel-img");
  const autoForwardBtn = document.querySelector("#auto-foward");
  const forwardBtn = document.querySelector("#forward-btn");
  const stopBtn = document.querySelector("#stop");
  const backwardBtn = document.querySelector("#backward-btn");
  const autoBackBtn = document.querySelector("#auto-backward");
  
  let ids = 0;
  
  let intervalID;
  
  // eventListener
  document.addEventListener("DOMContentLoaded", getImageOnload);
  
  forwardBtn.addEventListener("click", getNextPic);
  
  backwardBtn.addEventListener("click", getLastPic);
  
  autoForwardBtn.addEventListener("click", showAutoForward);
  
  autoBackBtn.addEventListener("click", showAutoBack);
  
  stopBtn.addEventListener("click", stopAutoPlay);
  
  // functions
  
  function getImageOnload() {
    image.src = images[0].src;
  }
  
  function getNextPic() {
    ids++;
    if (ids > images.length - 1) {
      ids = 0;
    }
    image.src = images[ids].src;
  }
  
  function getLastPic() {
    ids--;
    if (ids < 0) {
      ids = images.length - 1;
    }
    image.src = images[ids].src;
  }
  
  function showAutoForward() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    intervalID = setInterval(() => {
      getNextPic();
    }, 2000);
  }
  
  function showAutoBack() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    intervalID = setInterval(() => {
      getLastPic();
    }, 2000);
  }
  
  function stopAutoPlay() {
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
    clearInterval(intervalID);
  }
