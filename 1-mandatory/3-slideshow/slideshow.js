// Write your code here

let forwardBtn = document.getElementsByClassName("forward").item(0);
let backwardBtn = document.getElementsByClassName("backward").item(0);
let image = document.getElementsByClassName("dog").item(0)
let currentImage = 0;
let arrayImages = [
  "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
  "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  "https://media.istockphoto.com/photos/the-owner-brought-his-pets-to-do-activities-in-the-garden-picture-id1335201245?k=20&m=1335201245&s=612x612&w=0&h=Vkk05kkguz_BzCHMdfS-9fanhizBPwsb1YRd8gIWLbw=",
  "https://media.istockphoto.com/photos/cute-welsh-corgi-dog-sitting-on-the-steps-in-the-town-a-dog-in-the-picture-id1163785112?k=20&m=1163785112&s=612x612&w=0&h=hsGfg96dk7EP63tW1xGiHUx1yD2umsdugmAeAmafLbw=",
  "https://media.istockphoto.com/photos/corgi-puppy-sits-on-the-background-of-christmas-decorations-bokeh-picture-id1253412642?k=20&m=1253412642&s=612x612&w=0&h=Ja2r1OMu4v1rCwEQqBg0rhCzvepv-k3LHxOMOSOQe58="
];
image.src = arrayImages[currentImage]; 
backwardBtn.addEventListener("click", ()=>{
 currentImage = currentImage - 1
 if (currentImage < 0){
     currentImage = arrayImages.length - 1;
 }
 image.src = arrayImages[currentImage]; 
})
forwardBtn.addEventListener("click", () => {
  currentImage = currentImage + 1
  if (currentImage >= arrayImages.length){
      currentImage = 0;
  }
  image.src = arrayImages[currentImage];
});