// Write your code here
let images = [
    "https://images.unsplash.com/photo-1650225502063-0e69901fad8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1650275140172-5269844b09ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1650205511636-12479f0133d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1650262673518-c31fa33dedf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1650288021655-28883d80e1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
]

const img = document.querySelector(".img");
const prev = document.querySelector(".btn-prev");
const autoPrev = document.querySelector(".auto-prev");
const stop = document.querySelector(".btn-stop");
const next = document.querySelector(".btn-next");
const autoNext = document.querySelector(".auto-next");

let interval;

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





