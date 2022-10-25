// Write your code here
const imges = [
  "img/johnson-hung-LnkaFuMLr1U-unsplash.jpg",
  "img/mayur-more-6UKnz4gjTNc-unsplash.jpg",
  "img/nico-smit-QPfmCaDe4XU-unsplash.jpg",
  "img/sneha-chandrashekar-3FWT0SH8pw4-unsplash.jpg",
];
const myImges = [
  "myImges/antonio-grosz-GZgEpXkSHyc-unsplash.jpg",
  "myImges/axp-photography-mghstUXCpc4-unsplash.jpg",
  "myImges/jim-niakaris-L1_JWFc_s3M-unsplash.jpg",
  "myImges/job-savelsberg-un4-mNxMyhw-unsplash.jpg",
  "myImges/yulia-arnaut-ReqYkqKO3Uc-unsplash.jpg",
];
function creatEl() {
  return (
    (carousel = document.querySelector(".carousel-inner")),
    (carouselItem = document.createElement("div")),
    (carouselImg = document.createElement("img")),
    carouselItem.classList.add("carousel-item"),
    carouselImg.classList.add("d-block"),
    carouselImg.classList.add("w-100"),
    carousel.appendChild(carouselItem),
    carouselItem.appendChild(carouselImg)
  );
}

function bootstrapCarousel() {
  for (let i = 0; i < imges.length; i++) {
    creatEl();
    carouselImg.src = imges[i];
    if (i === 0) {
      carouselItem.classList.add("active");
    } else {
      carouselItem.classList.remove("active");
    }
  }
}
bootstrapCarousel();

//💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫

const Autoback = document.querySelector(".Autoback");
const Back = document.querySelector(".Back");
const Stop = document.querySelector(".Stop");
const Forward = document.querySelector(".Forward");
const Autoforward = document.querySelector(".Autoforward");
document.querySelector(".slideImg").src = myImges[0];
function imgEL(i) {
  return (
    (slideImg = document.querySelector(".slideImg")),
    (slideImg.src = myImges[i])
  );
}

function autoBack() {
  let i = 0;
  Forward.addEventListener("click", () => {
    if (i < myImges.length - 1) {
      i++;
      imgEL(i);
    } else {
      i = 0;
      imgEL(i);
    }
  });

  //💫💫

  Back.addEventListener("click", () => {
    i--;
    imgEL(i);
    if (i < 0) {
      i = myImges.length - 1;
      imgEL(i);
    } else {
      i = i;
      imgEL(i);
    }
  });
}
autoBack();

//💫💫🍉🍉🍉🍉🍉🍉🍉
let time = 5000;
let timer;
let alarmSet;
function setAlarm() {
  let timeRemaining = document.querySelector(".count");
  alarmSet = (time / 100000) * 100;
  timer = setInterval(() => {
    if (alarmSet > 0) {
      timeRemaining.textContent = `${--alarmSet}`;
      timeRemaining.style.backgroundColor = "rgb(109, 202, 232)";
    } else if (alarmSet === 0) {
      alarmSet = ((time - 1000) / 100000) * 100;
      timeRemaining.textContent = `${alarmSet}`;
      timeRemaining.style.backgroundColor = "rgb(109, 202, 232)";
    }
  }, 1000);
}

//💫💫🍉🍉🍉🍉🍉🍉🍉
// let time = 2000;
let i = 0;
let clear;
let wait;

Autoforward.addEventListener("click", () => {
  clear = setInterval(() => {
    if (i < myImges.length - 1) {
      i++;
      imgEL(i);
    } else {
      i = 0;
      imgEL(i);
    }
  }, time);
  setAlarm();
});

//💫💫

Autoback.addEventListener("click", () => {
  clear = setInterval(() => {
    i--;
    imgEL(i);
    if (i < 0) {
      i = myImges.length - 1;
      imgEL(i);
    } else {
      i = i;
      imgEL(i);
    }
  }, time);
  setAlarm();
});
//💫💫
Stop.addEventListener("click", () => {
  clearInterval(clear);
  clearInterval(timer);
  let timerBack = document.querySelector(".count");
  timerBack.textContent = "";
  timerBack.style.backgroundColor = " rgb(252, 252, 252)";
});
