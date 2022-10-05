const arrImages = [
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/earth-398-995317.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/saturn-145-995316.png",
  "https://cdn.iconscout.com/icon/free/png-128/moon-142-215130.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/venus-41-995329.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/mercury-43-995314.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/pluto-21-995310.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/jupiter-44-995327.png",
  "https://cdn.iconscout.com/icon/premium/png-128-thumb/mars-45-995318.png",
];

let image = document.createElement("img");
let flippingImages;
let index = 0;

function display() {
    image.src = arrImages[0];
    document.getElementById("imagesBox").appendChild(image);
    // document.getElementById("order").textContent;
}

document.getElementById("forwardBtn").addEventListener("click", () => {
  clearInterval(flippingImages);   
    index++;
    if (index === arrImages.length) index = 0;
    image.src = arrImages[index];
    document.getElementById("order").textContent = index;
});

document.getElementById("backBtn").addEventListener("click", () => {
  clearInterval(flippingImages); 
    index--;
    if (index === -1) index = arrImages.length - 1;
    image.src = arrImages[index];
    document.getElementById("order").textContent = index;
});

document.getElementById("autoForwardBtn").addEventListener("click", () => {
  clearInterval(flippingImages);  
  flippingImages = setInterval(function () {
    index++;
    if (index === arrImages.length) index = 0;
    image.src = arrImages[index];
    document.getElementById("order").textContent = index;
  }, 2000);
});

document.getElementById("autoBackBtn").addEventListener("click", () => {
  clearInterval(flippingImages);  
  flippingImages = setInterval(function () {
    index--;
    if (index === -1) index = arrImages.length - 1;
    image.src = arrImages[index];
    document.getElementById("order").textContent = index;
  }, 3000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(flippingImages);
});


display();


// var array_images;

// function display() {
//   if (--window.LoopTrap <= 0) throw "Infinite loop.";
//   let element_display_image = document.getElementById("display_image");
//   element_display_image.replaceChildren();
//   let new_img = document.createElement("img");
//   new_img.setAttribute("src", array_images[0]);

//   element_display_image.appendChild(new_img);
// }

// display();

// document.getElementById("button_next").addEventListener("click", (event) => {
//   array_images.push(array_images.shift());
//   display();
// });

// document
//   .getElementById("button_previous")
//   .addEventListener("click", (event) => {
//     array_images.unshift(array_images.pop());
//     display();
//   });
