// Write your code here
const photos = [
  {
    src: "./assets/alex-bertha-Jyg7xHRmXiU-unsplash.jpg",
    // src: "./assets/cute-cat-a.png",
  },
  {
    src: "./assets/roman-raizen-xadg_h62oG8-unsplash.jpg",
  },
  {
    src: "./assets/vidar-nordli-mathisen-AvnXCFX25GA-unsplash.jpg",
  },
];



//variables
const imageNumber = document.querySelector("#image-number");
const image = document.querySelector("#carousel-img");
// let photoPosition = 0;
// photoContent = photos[photoPosition];
let ids = 0;

let intervalID;

//forward button
const forwardButton = document.getElementById("forward-btn");
forwardButton.addEventListener("click", forwardAction);

function forwardAction() {
  ids++;
  if (ids>2) {
    ids=0;
  }
  image.src=photos[ids].src
    imageNumber.textContent = ids;
}
  
  // backBotton
  const backwardButton = document.getElementById("backward-btn");
  backwardButton.addEventListener("click", backwardAction);

  function backwardAction() {
    ids--;
    if (ids<0){
      ids=2
    }
  image.src=photos[ids].src  
    imageNumber.textContent = ids;
  }

  // autoForward
  const autoForward = document.getElementById("auto-forward");
  autoForward.addEventListener("click" , autoForwardAction);

  function autoForwardAction() {
   intervalID = setInterval(() => {
    forwardAction();
   }, 2000);
  }

  // autoBackward
  const autoBackward = document.getElementById("auto-backward");
  autoBackward.addEventListener("click" , autoBackwardAction);

  function autoBackwardAction() {
   intervalID = setInterval(() => {
    backwardAction();
   }, 2000);
  }

// Stop button
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopAction);

function stopAction() {
  clearInterval(intervalID);
}







  // if (photoPosition === 3) {
  //   photoPosition = 0;
  // } else {
  //   photoPosition++;
  // }
  // photo.src = photos[photoPosition];
  // p.textContent = photoPosition + 1;

// Auto Forward button
// let autoForward; 
// const AutoForwardButton = document.getElementById("AutoForward");
// AutoForwardButton.addEventListener("click", function () {
//   stop();
//     autoForward = setInterval(forwardAction, 5000);
// });
// //back button
// const backButton = document.getElementById("back");
// backButton.addEventListener("click", backAction);

// function backAction() {
//   if (photoPosition === 0) {
//     photoPosition = 3;
//   } else {
//     photoPosition--;
//   }
//   photo.src = photos[photoPosition];
//   p.textContent = photoPosition + 1;
// }
// // Auto Back button
// let autoBack; 
// const AutoBackButton = document.getElementById("AutoBack");
// AutoBackButton.addEventListener("click", function () {
//   stop();
//  autoBack = setInterval(backAction, 5000);
// });


// let stopBtn = document.querySelector("#stop");
// stopBtn.addEventListener("click", function () {
//   clearInterval(autoBack);
//   clearInterval(autoForward);
// });

