//array containing imgs
let images = [
  "./reel-images/boat.jpg",
  "./reel-images/camel.jpg",
  "./reel-images/blossoms.jpg",
  "./reel-images/roadtravel.jpg",
  "./reel-images/japan.jpg",
  "./reel-images/guatemala.jpg",
  "./reel-images/germany.jpg"
];

//navigate through imgs/display different imgs
let arrayIndex = 0;

//hold reference to html doc img tag
let heroImage;

function manualSlideshow() {
  heroImage = document.getElementById("main-image");
  //obtain button classes
  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");

  /*checks to see if the button who’s ID is 
  buttonPrevious supports the addEventListener method*/
  if (prevBtn.addEventListener) {
    prevBtn.addEventListener("click",() => {
        processClicks("previous");
    }, false);
    nextBtn.addEventListener('click', () => {
        processClicks('next')
    }, false);
  } else if (prevBtn.attachEvent) {
    prevBtn.attachEvent("onclick", () => {
      processClicks("back");
    });
    nextBtn.attachEvent("onclick", () => {
      processClicks("next");
    });
  }
}

//function that the button click event handlers call. 
function processClicks(action) {
  if (action == "previous") arrayIndex -= 1;
  else if (action == "next") arrayIndex++;
  if (arrayIndex < 0 || arrayIndex > images.length - 1) arrayIndex = 0;
  heroImage.src = images[arrayIndex];
}

function automaticSlideshow() {
    let toggleAutoSlideshowForward = false;
    let toggleAutoSlideshowBack = false;

    let autoBackButton = document.getElementById('auto-back');
    autoBackButton.addEventListener("click", function () {
        toggleAutoSlideshowForward = false;
        toggleAutoSlideshowBack = true;
    });

    let autoFwdButton = document.getElementById('auto-fwd');
    autoFwdButton.addEventListener("click", function () {
        toggleAutoSlideshowForward = true;
        toggleAutoSlideshowBack = false;
    });

    let stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", function () {
        toggleAutoSlideshowForward = false;
        toggleAutoSlideshowBack = false;
    });
    setInterval(function () {
        if (toggleAutoSlideshowForward) {
          processClicks("next");
        } 
        if (toggleAutoSlideshowBack) {
          processClicks("previous");
        } 
    }, 2000);
}

manualSlideshow();
automaticSlideshow();
