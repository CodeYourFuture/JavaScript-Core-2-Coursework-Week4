// Write your code here
const images = [
  "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const contentEl = document.querySelector("#content");
const imageElement = document.querySelector("#image"); //slide_img

const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
// const btnAutomatic = document.querySelector("#auto");
// const btnStop = document.querySelector("#stop");

let i = 0; // current image index

function changePicture() {
  function toggle() {
    imageElement.src = images[i];
  }
  setInterval(toggle, 2000);

  btnPrev.addEventListener("click", function () {
    if (i <= 0) i = images.length;
    i--;
    return toggle();
  });

  btnNext.addEventListener("click", function () {
    if (i >= images.length - 1) i = -1;
    i++;
    return toggle();
  });
}
changePicture();
