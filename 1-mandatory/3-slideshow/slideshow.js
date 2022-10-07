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
            document.getElementById("image").scr = image[i--];
        }
        
    }
document.getElementById("back").addEventListener("click", imageBack);

document.getElementById("forward").addEventListener("click", imageForward);


let images = [
    "https://wallup.net/wp-content/uploads/2018/10/09/1019015-leon-animal-mamifero.jpg",
    "https://th.bing.com/th/id/R.6324f3ebe4f9b03aad59441fd7a7ce6a?rik=gDQtb7QnxhKVuQ&pid=ImgRaw&r=0",
    "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/15.jpg",
    "https://wallup.net/wp-content/uploads/2019/10/506325-animal-squirrel-cute.jpg",
    "https://www.animalaid.org.uk/wp-content/uploads/2016/09/Pigeon-istock-e1554387845110.jpg"
];

window.onload = () => {
    let image = document.createElement("img");
    image.setAttribute("src", images[0]);
    image.setAttribute("id", "image");
    document.getElementById("imageBox").appendChild(image);
};


