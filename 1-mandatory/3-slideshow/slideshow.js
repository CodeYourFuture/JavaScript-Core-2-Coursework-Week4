// Write your code here
(function () {
  const arrayOfPath = [
    "./img/20191022_144923.jpg",
    "./img/20191022_145635.jpg",
    "./img/20191022_154521.jpg",
    "./img/20191031_163727.jpg",
  ];
  let changePhoto = (direction, actualPhoto) => {
    if (direction === "forward" && actualPhoto < arrayOfPath.length) {
      return {
        path: arrayOfPath[+actualPhoto],
        numberPhoto: +actualPhoto,
      };
    } else if (      direction === "forward" &&      actualPhoto > arrayOfPath.length - 1    ) {
      return {
        path: arrayOfPath[0],
        numberPhoto: 0,
      };
    } else if (direction === "back" && actualPhoto >= 0) {
      return {
        path: arrayOfPath[+actualPhoto],
        numberPhoto: +actualPhoto,
      };
    } else if (direction === "back" && actualPhoto === -1) {
      return {
        path: arrayOfPath[arrayOfPath.length - 1],
        numberPhoto: arrayOfPath.length - 1,
      };
    }
  };
  const root = document.querySelector("#root");
  const title = document.createElement("p");
  const img = document.createElement("img");
  const numberPhoto = document.createElement("p");
  const inputTime = document.createElement("input");
  const divChangeTimer = document.createElement("div");
  const divButtons = document.createElement("div");
  const spanDisplayDelay = document.createElement("span");
  const buttonChangeTimer = document.createElement("button");
  const buttonAutoBack = document.createElement("button");
  const buttonBack = document.createElement("button");
  const buttonStop = document.createElement("button");
  const buttonForward = document.createElement("button");
  const buttonAutoForward = document.createElement("button");

  let intervalId;
  let delaySlideShow = 1000;

  title.innerText = "Welcome to my slideshow";
  title.id = "title";
  buttonForward.innerText = "Forward";
  buttonBack.innerText = "Back";
  numberPhoto.innerText = 0;
  img.src = "./img/20191022_144923.jpg";
  buttonAutoBack.innerText = "Auto Back";
  buttonAutoForward.innerText = "Auto Forward";
  buttonStop.innerText = "Stop";
  buttonChangeTimer.innerText = "Change timer";
  divChangeTimer.id = "divChangeTimer";
  spanDisplayDelay.innerText = `${delaySlideShow / 1000} seconds`;
  divButtons.id = "divButtons";
  inputTime.placeholder = "Enter different delay";

  const clearIntervals = () => clearInterval(intervalId);

  const forwardPhoto = () => {
    const nextPhoto = changePhoto("forward", Number(numberPhoto.innerText) + 1);
    img.src = nextPhoto.path;
    numberPhoto.innerText = nextPhoto.numberPhoto;
  };
  const backPhoto = () => {
    const nextPhoto = changePhoto("back", Number(numberPhoto.innerText) - 1);
    img.src = nextPhoto.path;
    numberPhoto.innerText = nextPhoto.numberPhoto;
  };
  const intervalBack = () => {
    clearIntervals();
    intervalId = setInterval(backPhoto, delaySlideShow);
  };
  const intervalForward = () => {
    clearIntervals();
    intervalId = setInterval(forwardPhoto, delaySlideShow);
  };
  const getRandomColor = () => "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  
  setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 2000);

  buttonForward.addEventListener("click", forwardPhoto);
  buttonBack.addEventListener("click", backPhoto);
  buttonAutoBack.addEventListener("click", () => intervalBack());
  buttonStop.addEventListener("click", () => clearIntervals());
  buttonAutoForward.addEventListener("click", () => intervalForward());
  buttonChangeTimer.addEventListener("click", () => {
    delaySlideShow = inputTime.value * 1000;
    spanDisplayDelay.innerText = `${delaySlideShow / 1000} seconds`;
  });

  root.append(title, img, numberPhoto, divChangeTimer, divButtons);
  divButtons.append(
    buttonAutoBack,
    buttonBack,
    buttonStop,
    buttonForward,
    buttonAutoForward
  );

  divChangeTimer.append(inputTime, buttonChangeTimer, spanDisplayDelay);
})();
