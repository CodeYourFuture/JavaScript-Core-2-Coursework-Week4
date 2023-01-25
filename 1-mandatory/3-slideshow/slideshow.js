// Write your code here
const slides = {
  src01:
    "https://images.unsplash.com/photo-1674561324389-d6de2ddc2265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  src02:
    "https://images.unsplash.com/photo-1664687688576-cdde75eacdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  src03:
    "https://images.unsplash.com/photo-1665008804550-1995c88254fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src04:
    "https://images.unsplash.com/photo-1665292276230-23d968485757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src05:
    "https://images.unsplash.com/photo-1665292275574-a9782ee1da0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src06:
    "https://images.unsplash.com/photo-1665292276777-d8ffe217a057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src07:
    "https://images.unsplash.com/photo-1665292717865-1660c95b6161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src08:
    "https://images.unsplash.com/photo-1665292273316-d4c7fa56aaa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src09:
    "https://images.unsplash.com/photo-1665292276206-52261b6fac60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  src10:
    "https://images.unsplash.com/photo-1664216871021-738d7998cd82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2513&q=80",
  src11:
    "https://images.unsplash.com/photo-1664216763048-38ab95999fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
  src12:
    "https://images.unsplash.com/photo-1664687689617-50a2df1c79e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

const imgTag = document.getElementById("img-link");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");

let currentImage = 0;

imgTag.src = slides[Object.keys(slides)[currentImage]];

backBtn.addEventListener("click", backBtnClick);
forwardBtn.addEventListener("click", forwardBtnClick);

function backBtnClick() {
  currentImage =
    currentImage > 0 ? currentImage - 1 : Object.keys(slides).length - 1;
  imgTag.src = slides[Object.keys(slides)[currentImage]];
  console.log(imgTag.src);
}
function forwardBtnClick() {
  currentImage =
    currentImage < Object.keys(slides).length - 1 ? currentImage + 1 : 0;
  imgTag.src = slides[Object.keys(slides)[currentImage]];
}
