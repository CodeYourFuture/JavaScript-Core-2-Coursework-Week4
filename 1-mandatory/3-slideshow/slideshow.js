// Write your code here
const images = [
    "https://img.freepik.com/free-vector/air-balloons-flying-night-starry-sky-with-full-moon-clouds-lake-with-rocks-conifers-trees-aerial-flight-travel-midnight-scenery-landscape-cartoon-vector-illustration-background_107791-8369.jpg?w=1480&t=st=1674750800~exp=1674751400~hmac=ee9f9411c30aa7cbc6e4159ccd4a49c6e31dab35ffe6209d8107c5e8f59cbc99",
    "https://img.freepik.com/free-vector/car-with-luggage-roof-drive-road-mountains-horizon-night-vector-cartoon-illustration-landscape-with-highway-rocks-auto-with-suitcases-full-moon-stars-sky_107791-10099.jpg?w=1480&t=st=1674750802~exp=1674751402~hmac=38407c046240f29c3063bb29d7ea6fb4f09b212c66f84d75ec7857eb1d51995b",
    "https://img.freepik.com/free-vector/night-landscape-with-lake-mountains-trees-coast-vector-cartoon-illustration-nature-scene-with-coniferous-forest-river-shore-rocks-moon-stars-dark-sky_107791-8253.jpg?w=1480&t=st=1674750806~exp=1674751406~hmac=f3d82a562017332df8be816d65b10b92959db660e5b6b92185458a94e69c24a6",
    "https://img.freepik.com/free-vector/earth-view-night-from-alien-planet-neon-space_33099-1876.jpg?w=1480&t=st=1674751213~exp=1674751813~hmac=2049dc5a4e3fa1e84e77cb194311d2f2827302bfa975663bc140716a9d9bd616",
  ];
  
const image = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");

image.src = images[0];
let i = 0;
let interval
function forward() {
  if (i < 3) {
    i++;
    image.src = images[i];
  } else {
    i = 0;
    image.src = images[i];
  }
}
function backward() {
  if (i > 0) {
    i--;
    image.src = images[i];
  } else {
    i = 3;
    image.src = images[i];
  }
}
forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", () => {
  interval =setInterval(forward, 1000);
});
autoBackwardBtn.addEventListener("click", () => {
  interval =setInterval(backward, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
  
