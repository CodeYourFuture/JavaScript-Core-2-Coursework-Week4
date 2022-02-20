// Write your code here
const catPhotoes = [
  {
    url: "https://images.unsplash.com/photo-1616668822355-fee14a781f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1583583704670-1642f3ee22d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1558503198-788e3547684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
];
let imageContainer = document.getElementById("catImageId");
let i = 0;
const catPhotoesLength = catPhotoes.length - 1;
imageContainer.src = catPhotoes[i].url;
imageContainer.style.width = "40vw";
imageContainer.style.margin = "50px";
let backButton = document.getElementById("backId");
let forwardButton = document.getElementById("forwardId");
backButton.addEventListener("click", () => {
  if (i <= 0) {
    i = catPhotoesLength;
  } else {
    i--;
  }
  imageContainer.src = catPhotoes[i].url;
  console.log(catPhotoesLength, i, catPhotoes[i].url);
});
forwardButton.addEventListener("click", () => {
  if (i >= catPhotoesLength) {
    i = 0;
  } else {
    i++;
  }
  imageContainer.src = catPhotoes[i].url;
  console.log(catPhotoesLength, i, catPhotoes[i].url);
});
console.log(catPhotoesLength, i);
