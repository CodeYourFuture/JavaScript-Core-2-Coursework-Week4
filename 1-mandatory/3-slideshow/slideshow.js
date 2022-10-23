let index = 0;
let interval;

const images = [
  "https://c4.wallpaperflare.com/wallpaper/274/570/535/nature-trees-hills-mist-wallpaper-preview.jpg",
  "https://wallpaperaccess.com/full/2960486.jpg",
  "https://images.wallpaperscraft.com/image/single/hills_distance_sunset_183641_1920x1080.jpg",
  "https://c4.wallpaperflare.com/wallpaper/437/34/474/sunlight-over-the-hills-wallpaper-preview.jpg",
];

const img = document.querySelector("img");
img.setAttribute("src", images[index]);

const btnNext = document.querySelector("#btn-next");
const btnBack = document.querySelector("#btn-back");
const btnStop = document.querySelector("#btn-stop");
const btnAutoBackward = document.querySelector("#btn-auto-backward");
const btnAutoForward = document.querySelector("#btn-auto-forward");

btnNext.addEventListener("click", () => {
  moveForward();
});

btnBack.addEventListener("click", () => {
  moveBackward();
});

btnAutoForward.addEventListener("click", () => {
  const inputSeconds = document.querySelector("#input-seconds");
  intervalTime = inputSeconds.value * 1000 || 2000;

  interval = setInterval(() => {
    moveForward();
  }, intervalTime);
});

btnAutoBackward.addEventListener("click", () => {
  const inputSeconds = document.querySelector("#input-seconds");
  intervalTime = inputSeconds.value * 1000 || 2000;

  interval = setInterval(() => {
    moveBackward();
  }, intervalTime);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

function moveForward() {
  if (index === images.length - 1) {
    index = 0;
    img.setAttribute("src", images[index]);
  } else {
    index++;
    img.setAttribute("src", images[index]);
  }
}

function moveBackward() {
  if (index === 0) {
    index = images.length - 1;
    img.setAttribute("src", images[index]);
  } else {
    index--;
    img.setAttribute("src", images[index]);
  }
}
