// Write your code here
const images = [
  "https://www.birdsandblooms.com/wp-content/uploads/2021/02/BNBugc_elaine-mccabe.jpg?fit=680,685",
  "https://images.unsplash.com/photo-1636246441747-7d7f83f4629c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?cs=srgb&dl=pexels-roshan-kamath-1661179.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/AwWB5s8BHoPXRPOG4xQES/68088a423ae1ef49e7ebf600bf126fcc/02-birds_1667141455.jpg?fit=fill&w=480&h=270",
];
let element_image_1 = document.getElementById("image_1");
element_image_1.setAttribute("src", images[0]);

document.getElementById("next").addEventListener("click", () => {
  images.push(images[0]);
  images.shift();
  element_image_1.src = images[0];
});

document.getElementById("previous").addEventListener("click", () => {
  images.unshift(images[images.length - 1]);
  images.pop();
  element_image_1.src = images[0];
});

let interval;
document.getElementById("autoNext").addEventListener("click", () => {
  interval = setInterval(() => {
    images.push(images[0]);
    images.shift();
    element_image_1.setAttribute("src", images[0]);
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("autoBack").addEventListener("click", () => {
  interval = setInterval(() => {
    images.unshift(images.slice(-1)[0]);
    images.pop();
    element_image_1.setAttribute("src", images[0]);
  }, 1000);
});