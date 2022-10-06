// Write your code here
let imgArray = [
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg?w=2560",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-552105001-scaled.jpg?w=2560",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1203033096-scaled.jpg?w=2560",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-936542938-scaled.jpg?w=2560",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10184996-scaled-e1619020676597.jpg?w=2489",
];
let i = 0;
let x;

let imgViewer = document.getElementById("imgViewer");

let imgIndex = document.getElementById("imgIndex");

const displayImage = (index) => {
  imgViewer.src = imgArray[index];
  imgIndex.innerText = index;
};

const nextImage = () => {
  if (i < imgArray.length - 1) {
    i++;
    displayImage(i);
  }
};

const prevImage = () => {
  if (i > 0) {
    i--;
    displayImage(i);
  }
};

displayImage(i);

document.getElementById("btnNex").addEventListener("click", nextImage);

document.getElementById("btnPrv").addEventListener("click", prevImage);

document.getElementById("btnAutoForward").addEventListener("click", () => {
  clearInterval(x);
  x = setInterval(nextImage, 1000);
});

document.getElementById("btnAutoBack").addEventListener("click", () => {
  clearInterval(x);
  x = setInterval(prevImage, 1000);
});

document.getElementById("btnStop").addEventListener("click", () => {
  clearInterval(x);
});
