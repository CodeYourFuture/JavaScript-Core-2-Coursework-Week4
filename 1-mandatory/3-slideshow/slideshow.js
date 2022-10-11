// Write your code here
let images = [
  "https://www.pexels.com/photo/13299956/download/",
  "https://images.pexels.com/photos/7410486/pexels-photo-7410486.jpeg?cs=srgb&dl=pexels-ante-7410486.jpg&fm=jpg&h=900&w=600&fit=crop",
  "https://images.pexels.com/photos/4557876/pexels-photo-4557876.jpeg?cs=srgb&dl=pexels-anna-shvets-4557876.jpg&fm=jpg&w=640&h=427",
  "https://images.pexels.com/photos/3597042/pexels-photo-3597042.jpeg?cs=srgb&dl=pexels-moh-mckenzie-3597042.jpg&fm=jpg&h=900&w=600&fit=crop",
  "https://images.pexels.com/photos/6185233/pexels-photo-6185233.jpeg?cs=srgb&dl=pexels-polina-kovaleva-6185233.jpg&fm=jpg&h=900&w=600&fit=crop",
  "https://images.pexels.com/photos/4088111/pexels-photo-4088111.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-4088111.jpg&fm=jpg&h=900&w=600&fit=crop",
  "https://images.pexels.com/photos/4054467/pexels-photo-4054467.jpeg?cs=srgb&dl=pexels-brett-sayles-4054467.jpg&fm=jpg&w=640&h=426",
];

const img = document.querySelector(".img");
const backwards = document.querySelector(".btn-backwards");
const autoBackwards = document.querySelector(".auto-backwards");
const stop = document.querySelector(".btn-stop");
const forward = document.querySelector(".btn-forward");
const autoForward = document.querySelector(".auto-forward");

let interval;

const next = () => {
  images.push(images[0]);
  images.shift();
  img.setAttribute("src", images[0]);
};

const backward = () => {
  images.unshift(images[images.length - 1]);
  images.pop();
  img.setAttribute("src", images[images.length - 1]);
};

forward.addEventListener("click", next);

autoForward.addEventListener("click", () => {
  interval = setInterval(next, 1000);
});

stop.addEventListener("click", () => clearInterval(interval));

backwards.addEventListener("click", backward);

autoBackwards.addEventListener("click", () => {
  interval = setInterval(backward, 1000);
});
