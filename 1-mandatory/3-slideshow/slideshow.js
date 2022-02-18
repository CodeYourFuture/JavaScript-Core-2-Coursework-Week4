const images = [
    "https://i.pinimg.com/564x/05/7a/74/057a74acd554f78ba8ee8b607af00605.jpg",
    "https://i.pinimg.com/564x/3f/e0/c3/3fe0c35a5cccfef0046e781b472795e4--hairstyle-trends-kittens-playing.jpg",
    "https://images.greeka.com/resized/user_images/patras/580/mig3XOmxD.jpeg",
    "https://allaboutcats.com/wp-content/uploads/2020/10/the-Chantilly-Tiffany.jpg",
  ];
  
  const contentEl = document.querySelector("#content");
  const imageElement = document.querySelector("#image"); //slide_img
  
  const btnNext = document.querySelector("#next");
  const btnPrev = document.querySelector("#prev");
  // "#auto"
  const btnStop = document.querySelector("#stop");
  
  let i = 0; // current image index
  
  function changePicture() {
    function toggle() {
      imageElement.src = images[i];
    }
    setInterval(toggle, 2000)
  
    btnPrev.addEventListener("click", function () {
      if (i <= 0) i = images.length;
      i--;
      return toggle();
    });
  
    btnNext.addEventListener("click", function () {
      if (i >= images.length - 1) i = -1;
      i++;
      return toggle();
    });
   
  }
  changePicture();
  