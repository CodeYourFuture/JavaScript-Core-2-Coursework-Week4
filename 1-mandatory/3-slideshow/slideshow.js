// Write your code here

let i = 0;
function imageForward() {
  document.getElementById("image").src = images[i++];
  if (i === images.length) {
    i = 0;
  }
}

function imageBack() {
  if (i > 0) {
    document.getElementById("image").src = images[i--];
  }
}

document.getElementById("back").addEventListener("click", imageBack);
// document.getElementById("stop").addEventListener();
document.getElementById("forward").addEventListener("click", imageForward);

const images = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
  "https://img.freepik.com/premium-photo/cake-with-white-cream-chocolate-drips-pomegranate-nuts-chocolate-decor_199620-5923.jpg?w=2000",
  "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg",
];

window.onload = () => {
  const image = document.createElement("img");
  image.setAttribute("src", images[0]);
  image.setAttribute("id", "image");
  document.getElementById("imageDisplay").appendChild(image);
};
