// Write your code here
//src="https://i.ibb.co/WvkNM8m/swimming.jpg"
//https://i.ibb.co/1d7GFgm/cycyling-1-640x360-credit-shutterstock.jpg
//https://i.ibb.co/S72hXRX/image-result-for-driving-1.jpg
//https://i.ibb.co/3sV7htb/baglama.jpg
//
//
let body = document.querySelector("body");
let div1 = document.createElement("div");
body.appendChild(div1);
div1.style.cssText = "display: block; margin: auto";
div1.setAttribute("class", "slideArea");
let imgArea = document.createElement("img");
imgArea.style.cssText =
  "width: 500px; height : 500px; display: block; margin: auto";

imgArea.setAttribute("src", "https://i.ibb.co/WvkNM8m/swimming.jpg");

div1.appendChild(imgArea);

let div2 = document.createElement("div");
div2.setAttribute("class", "buttonArea");
body.appendChild(div2);

div2.style.cssText =
  "display:flex ; margin: 2% 20% ; justify-content: space-between; font-size: 22px";

let autoBack = document.createElement("button");

autoBack.setAttribute("class", "autoBack");
autoBack.innerText = "Auto Back";
let back = document.createElement("button");
back.setAttribute("class", "autoBack");
back.innerText = "Back";
let pause = document.createElement("button");
pause.setAttribute("class", "autoBack");
pause.innerText = "Pause";
let forward = document.createElement("button");
forward.setAttribute("class", "autoBack");
forward.innerText = "Forward";
let autoPlay = document.createElement("button");
autoPlay.setAttribute("class", "autoBack");
autoPlay.innerText = "Auto Play";
div2.appendChild(autoBack);
div2.appendChild(back);
div2.appendChild(pause);
div2.appendChild(forward);
div2.appendChild(autoPlay);
let autoBackFunc = null;

function autoBackBtn(photo) {
  photo = photos;
  let count = 3;
  autoBackFunc = setInterval(() => {
    let photoSrc = photo[count];
    imgArea.setAttribute("src", photoSrc.src);
    count--;
    if (count < 0) {
      count = 3;
    }
  }, 2000);
}
let count = 3;
function backBtn() {
  let photoSrc = photos[count];
  imgArea.setAttribute("src", photoSrc.src);
  count--;
  if (count < 0) {
    count = 3;
  }
}
let countForward = 1;
function forwardBtn() {
  let photoSrc = photos[countForward];
  imgArea.setAttribute("src", photoSrc.src);
  countForward++;
  if (countForward > 3) {
    countForward = 0;
  }
}
let autoPlayFunc = null;
function autoPlayBtn(photo) {
  photo = photos;
  let count = 1;
  autoPlayFunc = setInterval(() => {
    let photoSrc = photo[count];
    imgArea.setAttribute("src", photoSrc.src);
    count++;
    if (count > 3) {
      count = 0;
    }
  }, 2000);
}
function pauseBtn() {
  clearInterval(autoBackFunc);
  clearInterval(autoPlayFunc);
}
pause.addEventListener("click", pauseBtn);
autoPlay.addEventListener("click", autoPlayBtn);
forward.addEventListener("click", forwardBtn);
back.addEventListener("click", backBtn);
autoBack.addEventListener("click", autoBackBtn);
const photos = [
  { src: "https://i.ibb.co/WvkNM8m/swimming.jpg", name: "Swimming" },
  {
    src: "https://i.ibb.co/1d7GFgm/cycyling-1-640x360-credit-shutterstock.jpg",
    name: 2,
  },
  { src: "https://i.ibb.co/S72hXRX/image-result-for-driving-1.jpg", name: 3 },
  { src: "https://i.ibb.co/3sV7htb/baglama.jpg", name: 4 },
];
