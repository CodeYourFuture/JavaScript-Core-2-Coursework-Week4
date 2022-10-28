let imgURL = [
  "https://media.gq-magazine.co.uk/photos/61640bc7c824c072cfae7c7b/1:1/w_1280,h_1280,c_limit/111021_Corvette_06.jpg",
  "https://images.wsj.net/im-325492?width=1280&size=1",
  "https://ag-spots-2017.o.auroraobjects.eu/2017/10/29/mclaren-720s-c265029102017214648_2.jpg",
  "https://images.wallpaperscraft.com/image/single/porsche_sports_car_supercar_127591_1280x1280.jpg",
  "https://images.wallpaperscraft.com/image/single/lamborghini_aventador_lamborghini_yellow_138391_1280x1280.jpg",
];
let imgIndex = 0;

let imgCar = document.getElementById("img");
let forwardButton = document.getElementById("forward");
let backButton = document.getElementById("back");
let autoForwardButton = document.getElementById("auto-forward");
let autoBackButton = document.getElementById("auto-back");
let stopButton = document.getElementById("stop");

imgCar.src = imgURL[imgIndex];

forwardButton.addEventListener("click", function () {
  imgIndex++;
  if (imgIndex > imgURL.length - 1) {
    imgIndex = 0;
  }
  imgCar.src = imgURL[imgIndex];
});

backButton.addEventListener("click", function () {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = [imgURL.length - 1];
  }
  imgCar.src = imgURL[imgIndex];
});

autoForwardButton.addEventListener("click", () => {
  let autoForwardButtonCycle = setInterval(() => {
    imgIndex++;
    if (imgIndex === imgURL.length) {
      imgIndex = 0;
    }
    imgCar.src = imgURL[imgIndex];
  }, 2000);
  stopButton.addEventListener("click", function () {
    clearInterval(autoForwardButtonCycle);
  });
});

autoBackButton.addEventListener("click", function () {
  let autoBackButtonCycle = setInterval(() => {
    imgIndex--;
    if (imgIndex < 0) {
      imgIndex = [imgURL.length - 1];
    }
    imgCar.src = imgURL[imgIndex];
  }, 2000);
  stopButton.addEventListener("click", function () {
    clearInterval(autoBackButtonCycle);
  });
});
