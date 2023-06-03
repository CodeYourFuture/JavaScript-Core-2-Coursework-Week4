// Write your code here
const pictures = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    
  ];
 
  const image = document.querySelector(".image");
  let i = 0;
  image.src = pictures[i];
  const autoBackBtn = document.querySelector("#auto-back");
  const backBtn = document.querySelector("#back");
  const stopBtn = document.querySelector("#stop");
  const forwardBtn = document.querySelector("#forward");
  const autoForwardBtn = document.querySelector("#auto-forward");
  let changePicture;
 
  forwardBtn.addEventListener("click", () => {
    i++;
    if (i === pictures.length) {
      i = 0;
    }
    image.src = pictures[i];
  });
 
  backBtn.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = pictures.length - 1;
    }
    image.src = pictures[i];
  });
 
  autoForwardBtn.addEventListener("click", () => {
    clearInterval(changePicture);
    changePicture = setInterval(function () {
      i++;
      if (i === pictures.length) {
        i = 0;
      }
      image.src = pictures[i];
    }, 2000);
  });
 
  autoBackBtn.addEventListener("click", () => {
    clearInterval(changePicture);
    changePicture = setInterval(function () {
      i--;
      if (i < 0) {
        i = pictures.length - 1;
      }
      image.src = pictures[i];
    }, 2000);
  });
 
  stopBtn.addEventListener("click", () => {
    clearInterval(changePicture);
  });