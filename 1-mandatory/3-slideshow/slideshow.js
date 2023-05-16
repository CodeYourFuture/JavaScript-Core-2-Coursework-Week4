let headerEl = document.getElementById("header");
headerEl.innerText = " Image Carousel..";

let imageContainerEl = document.getElementById("image-container");
let images = [
  {
    url: "https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9hdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1594028491475-2ead2dd49999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1583606912443-53456587b3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1603625354572-83f7a0c498a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1528580279421-f0b84f9d7640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJvYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];
//image
let imageEl = document.createElement("img");
imageEl.src = images[0].url;
imageEl.height = "200";
imageContainerEl.appendChild(imageEl);

//buttons
let backwardBtn = document.createElement("button");
// backwardBtn.style.display = "block";
backwardBtn.innerText = "Backward";
imageContainerEl.appendChild(backwardBtn);

let forwardBtn = document.createElement("button");
// forwardBtn.style.display="block";
forwardBtn.innerText = "Forward";
imageContainerEl.appendChild(forwardBtn);

let currentIndex = 0;

forwardBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > images.length) {
    currentIndex = 0;
  }
  imageEl.src = images[currentIndex].url;
});

backwardBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length;
  }
  imageEl.src = images[currentIndex].url;
});

/// level 2 auto buttons
let autoBackwardBtn = document.createElement("button");
// backwardBtn.style.display = "block";
autoBackwardBtn.innerText = "Auto Backward";
imageContainerEl.appendChild(autoBackwardBtn);

let autoForwardBtn = document.createElement("button");
// forwardBtn.style.display="block";
autoForwardBtn.innerText = "Auto Forward";
imageContainerEl.appendChild(autoForwardBtn);

let stopBtn = document.createElement("button");
// forwardBtn.style.display="block";
stopBtn.innerText = "STOP";
imageContainerEl.appendChild(stopBtn);

autoForwardBtn.addEventListener("click", () => {
  let intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex > images.length) {
      currentIndex = 0;
    }
    imageEl.src = images[currentIndex].url;
  }, 1000);

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
});

autoBackwardBtn.addEventListener("click", () => {
  let intervalId = setInterval(() => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length;
    }
    imageEl.src = images[currentIndex].url;
  }, 1000);

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
});
