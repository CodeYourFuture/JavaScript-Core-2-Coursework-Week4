// Write your code here
let images = [
 "https://images.unsplash.com/photo-1605206809417-31eed948187f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1558007888-891fdd1d5276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1519051990279-4071d755e440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1547823065-4cbbb2d4d185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdW50JTIwZnVqaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
]
const img = document.querySelector(".img");
const prev = document.querySelector(".btn-prev");
const autoPrev = document.querySelector(".auto-prev");
const stop = document.querySelector(".btn-stop");
const next = document.querySelector(".btn-next");
const autoNext = document.querySelector(".auto-next");



next.addEventListener("click", () => {
 images.push(images[0]);
 images.shift();
 img.setAttribute("src", images[0]);
})

autoNext.addEventListener("click", () => {
 interval = setInterval(() => {
     images.push(images[0]);
     images.shift();
     img.setAttribute("src", images[0]);
 }, 1000)
})

stop.addEventListener("click", () => {
 clearInterval(interval)
})

prev.addEventListener("click", () => {
 images.unshift(images[images.length - 1]);
 images.pop();
 img.setAttribute("src", images[images.length - 1]);
})

autoPrev.addEventListener("click", () => {
 interval = setInterval(() => {
     images.unshift(images[images.length - 1]);
     images.pop();
     img.setAttribute("src", images[images.length - 1]);
 }, 1000)
})
