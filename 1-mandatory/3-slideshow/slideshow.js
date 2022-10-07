// Write your code here
let images = [
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",

    " https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",

    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=421&q=80",

    "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
    

]

const img = document.querySelector(".img");
const prev = document.querySelector(".btn-prev");
const autoPrev = document.querySelector(".auto-prev");
const stop = document.querySelector(".btn-stop");
const next = document.querySelector(".btn-next");
const autoNext = document.querySelector(".auto-next");

next.addEventListener("click", () => {
    images.push(images[0])
    images.shift()
     img.setAttribute("src",images[0])

    
})
let interval;
autoNext.addEventListener("click", () => {
    interval = setInterval(() => {
        images.push(images[0]);
        images.shift();
        img.setAttribute("src", images[0]);
    }, 2000)
})

stop.addEventListener("click", () => {
    clearInterval(interval)
})


prev.addEventListener("click", () => {
    images.unshift(images[images.length - 1]); images(4)
    images.pop();
    img.setAttribute("src", images[images.length - 1]);
})

autoPrev.addEventListener("click", () => {
    interval = setInterval(() => {
        images.unshift(images[images.length - 1]);
        images.pop();
        img.setAttribute("src", images[images.length - 1]);
    }, 2000)
})