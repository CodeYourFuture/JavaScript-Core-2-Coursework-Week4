// Write your code here
// var images;

let images = ['https://drive.google.com/thumbnail?id=1zqg4-wa3p3dmUooZpZA0RqCrK55rSSO7', 'https://drive.google.com/thumbnail?id=1iFzeBP_lOTo4zvGrQjZCeL7UMJ0PV0sS', 'https://drive.google.com/thumbnail?id=1h03aDC_NvR_gYnkd71s5XwtR_dqo98oa'];
let image = document.querySelector('.image');
image.setAttribute("src", images[0]);

document.querySelector('.next-btn').addEventListener('click', () => {
 // let image2 = document.querySelector('.image2');
  image.replaceChildren();
  image.setAttribute("src", images[0]);
  images.push(images.shift());

});

document.querySelector('.prev-btn').addEventListener('click', () => {
  image.replaceChildren();
  image.setAttribute("src", images.slice(-1)[0]);
  images.unshift(images.pop());

});