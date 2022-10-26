// Write your code here

let imageArray = [
  'img/Travel1.jpg',
  'img/Travel2.jpg',
  'img/Travel3.jpg',
  'img/Travel4.jpg',
  'img/Travel5.jpg',
  'img/Travel6.jpg',
  'img/Travel7.jpg',
  'img/Travel8.jpg',
  'img/Travel9.jpg',
  'img/Travel10.jpg',
  'img/Travel11.jpg',
  'img/Travel12.jpg',
];
let imageEl = document.getElementById("image");
imageEl.setAttribute("src", imageArray[0]);
let inputEl = document.getElementById("timeInput");
let time = 0;

document.getElementById("setTime").addEventListener("click", () => {
  time = inputEl.value;
  inputEl.value = 0;
});

document.getElementById("next").addEventListener("click", () => {
  imageArray.push(imageArray.shift());
  imageEl.setAttribute("src", imageArray[0]);
});

document.getElementById("previous").addEventListener("click", () => {
  imageArray.unshift(imageArray.pop());
  imageEl.setAttribute("src", imageArray[0]);
});

document.getElementById("auto-back").addEventListener("click", () => {
  let autoBackInterval = setInterval(() => {
    imageArray.unshift(imageArray.pop());
    imageEl.setAttribute("src", imageArray[0]);
    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(autoBackInterval);
    });
    document.getElementById("auto-forward").addEventListener("click", () => {
      clearInterval(autoBackInterval);
    });
    document.getElementById("next").addEventListener("click", () => {
      clearInterval(autoBackInterval);
    });
    document.getElementById("previous").addEventListener("click", () => {
      clearInterval(autoBackInterval);
    });
  }, time);
});

document.getElementById("auto-forward").addEventListener("click", () => {
  let autoForwardInterval = setInterval(() => {
    imageArray.push(imageArray.shift());
    imageEl.setAttribute("src", imageArray[0]);
    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(autoForwardInterval);
    });
    document.getElementById("auto-back").addEventListener("click", () => {
      clearInterval(autoForwardInterval);
    });
    document.getElementById("next").addEventListener("click", () => {
      clearInterval(autoForwardInterval);
    });
    document.getElementById("previous").addEventListener("click", () => {
      clearInterval(autoForwardInterval);
    });
  }, time);
});