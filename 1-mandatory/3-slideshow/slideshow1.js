const images = [
  {
    src: "./assets/cute-cat-a.png",
  },
  {
    src: "./assets/cute-cat-b.jpg",
  },
  {
    src: "./assets/cute-cat-c.jpg",
  },
  //   {
  //     src: "https://images.unsplash.com/photo-1505943310290-3644d9a5dcf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwcGljdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
  //   },
];
const image = document.getElementById("carousel-img");
const buttonBackward = document.getElementById("backward-btn");
const buttonForward = document.getElementById("forward-btn");
document.addEventListener("DOMContentLoaded", getImg);
buttonForward.addEventListener("click", getNextImg);
buttonBackward.addEventListener("click", getPrevoiusImg);
// let count = 0;
function getImg() {
  image.src = images[0].src;
}
function getNextImg() {
  let count = 0;
  if (count > images.length - 1) {
    count++;
  }
  image.src = images[count.src];
}
