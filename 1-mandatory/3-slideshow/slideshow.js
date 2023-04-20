const photos = [
  "https://images.unsplash.com/photo-1523910062200-d2ee1971de7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",

  "https://images.unsplash.com/photo-1583185732932-e42a0858df74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

  "https://images.unsplash.com/photo-1573523120347-6ec1a1959c3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",

  "https://images.unsplash.com/photo-1576224975829-675f460f9288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];



let slide = document.querySelector("#slide")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

slide.style.width = "700px"
slide.style.height = "700px"

let i = 0
slide.src = photos[i]

btn2.onclick = () => {
    i++
    if (i > photos.length -1) {
        i = 0
    }
    slide.src = photos[i]
}

btn1.onclick = () => {
    i--
    if (i < 0) {
        i = photos.length -1
    }
    slide.src = photos[i]
}

