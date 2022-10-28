// Write your code here
let images = [
   
    "https://media.istockphoto.com/photos/two-small-striped-domestic-kittens-sleeping-at-home-lying-on-bed-picture-id1285449725?s=80",
    "https://media.istockphoto.com/photos/cat-picture-id1412116175?k=20&m=1412116175&s=612x612&w=0&h=Yx1NldYmuFrn6vUp_qPOoVLLWsnFtfZbP1pAKMRvWxw=80",
    "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?k=20&m=1335433001&s=612x612&w=0&h=dsapxuNHv_J3eG05LFjqqf7NhfI6XNnhNq5KjReY_lE=80",
    "https://media.istockphoto.com/photos/young-grey-tabby-cat-sitting-in-the-living-room-picture-id482766646?k=20&m=482766646&s=612x612&w=0&h=2CFpTcGmIzxWzjVcu_Oe8FxbCi-aq7vG4D0CDnW3Ttk=80",
  ];
  
  let currenImg = document.getElementById("imgHolder");
  let i = 0;
  setImage(i);
  let autoLeftInt;
  let autoRightInt;
  
  function autoLeft() {
    autoLeftInt = setInterval(function () {
      if (i == 0) {
        i = images.length - 1;
      } else {
        i--;
      }
  
      setImage(i);
    }, 1000);
  }
  
  function left() {
    if (i == 0) {
      i = images.length - 1;
    } else {
      i--;
    }
  
    setImage(i);
  }
  
  function stops() {
    clearInterval(autoLeftInt);
    clearInterval(autoRightInt);
  }
  function right() {
    if (i == images.length - 1) {
      i = 0;
    } else {
      i++;
    }
  
    setImage(i);
  }
  
  function autoRight() {
    autoRightInt = setInterval(function () {
      if (i == images.length - 1) {
        i = 0;
      } else {
        i++;
      }
  
      setImage(i);
    }, 1000);
  }
  
  function setImage(i) {
    //document.body.style.backgroundImage = "url('https://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg')";
    currenImg.style.backgroundImage = `url(${images[i]})`;
  }
  document.getElementById("autoLeft").addEventListener("click", () => {
    stops();
    autoLeft();
  });
  
  document.getElementById("left").addEventListener("click", () => {
    left();
  });
  document.getElementById("stop").addEventListener("click", () => {
    stops();
  });
  document.getElementById("right").addEventListener("click", () => {
    right();
  });
  
  document.getElementById("autoRight").addEventListener("click", () => {
    stops();
    autoRight();
  });