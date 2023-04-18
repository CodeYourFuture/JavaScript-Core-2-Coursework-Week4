// Write your code here
let photos = [
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
];
//variables
let p = document.querySelector("p");
let photo = document.querySelector("img");
let photoPosition = 0;
photoContent = photos[photoPosition];
//forward button
const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", forwardAction);

function forwardAction() {
  if (photoPosition === 3) {
    photoPosition = 0;
  } else {
    photoPosition++;
  }
  photo.src = photos[photoPosition];
  p.textContent = photoPosition + 1;
}
// Auto Forward button
let autoForward; 
const AutoForwardButton = document.getElementById("AutoForward");
AutoForwardButton.addEventListener("click", function () {
  stop();
    autoForward = setInterval(forwardAction, 5000);
});
//back button
const backButton = document.getElementById("back");
backButton.addEventListener("click", backAction);

function backAction() {
  if (photoPosition === 0) {
    photoPosition = 3;
  } else {
    photoPosition--;
  }
  photo.src = photos[photoPosition];
  p.textContent = photoPosition + 1;
}
// Auto Back button
let autoBack; 
const AutoBackButton = document.getElementById("AutoBack");
AutoBackButton.addEventListener("click", function () {
  stop();
 autoBack = setInterval(backAction, 5000);
});
//Stop button
//function stop() {
  // clearInterval(autoBack);
  // clearInterval(autoForward);
//}

let stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", function () {
  clearInterval(autoBack);
  clearInterval(autoForward);
});
