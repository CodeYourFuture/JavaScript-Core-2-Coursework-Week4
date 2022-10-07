// Write your code here
const album = () => {
  let prev = document.querySelector(".bi-caret-left");
  let next = document.querySelector(".bi-caret-right");
  let images = document.getElementById("image");
  let imgArr = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
  ];
  let i = 0;

  prev.addEventListener("click", () => {
    i === 0 ? (i = imgArr.length - 1) : i > 0 ? i-- : i;
    images.setAttribute("src", imgArr[i]);
  });

  next.addEventListener("click", () => {
    i === 0 ? i++ : i === imgArr.length - 1 ? (i = 0) : i++;
    images.setAttribute("src", imgArr[i]);
  });

  images.setAttribute("src", imgArr[i]);
};

album();
