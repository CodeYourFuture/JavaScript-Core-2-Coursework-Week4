// Write your code here
const backBtn = document.querySelector("#backbutton");
const forwardBtn = document.querySelector("#forwardbutton");

const imgArr = [
  {
    id:0,
    src:"ilse-orsel-vmFEBIEz0hQ-unsplash.jpg",
    alt:"cute cat zero"
  }
  {
    id:1,
    src: "./assets/cute-cat-a.png",
    alt: "cute cat first",
  },
  {
    id:2,
    src: "./assets/cute-cat-b.png",
    alt: "cute cat second",
  },
  {
    id:3,
    src: "./assets/cute-cat-c.png",
    alt: "cute cat third",
  },
];

document.addEventListener("DOMContentLoaded" , getImageOnload);

const imgPlace = document.querySelector("#image");

function getImageOnload(){
    imgPlace.src = imgArr[0].src;
    imgPlace.alt = imgArr[0].alt;
    imgPlace.id = imgArr[0].id;
    document.querySelectorAll("#imgTitle").innerText =0;
}

backBtn.addEventListener("click",function(){
  
})
