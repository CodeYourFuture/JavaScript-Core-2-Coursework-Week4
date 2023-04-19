/* // Write your code here
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
//
function changeImages() {
  const image = document.getElementById("carousel-img");
  image.src = images[0];

  //
  const forwardBtn = document.getElementById("forward-btn");
  const backBtn = document.getElementById("backward-btn");
  //
  let prevIndex;
  let currentIndex = 0;
  forwardBtn.addEventListener("click", async function () {
    prevIndex = currentIndex;
    currentIndex++;
    if (currentIndex == 3) {
      currentIndex = 0;
    }
    document.getElementById("carousel-img").src = images[currentIndex];
  });

  backBtn.addEventListener("click", function () {
    prevIndex = currentIndex;
    currentIndex--;
    if (currentIndex == -1) {
      currentIndex = 2;
    }
    document.getElementById("carousel-img").src = images[currentIndex];
  });

  //Level 2
  const autoBackBtn = document.getElementById("auto-backward");
  const autoForwardBtn = document.getElementById("auto-forward");
  const stopBtn = document.getElementById("stop");

  // stop button
  stopBtn.addEventListener("click", function () {
    clearInterval(intervalForward);
    clearInterval(intervalBackward);
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
  });

  //auto-forward button
  let intervalForward;
  autoForwardBtn.addEventListener("click", function () {
    currentIndex++;
    intervalForward = setInterval(function () {
      //currentIndex = (currentIndex + 1) % images.length;
      currentIndex = currentIndex % 3;
      image.src = images[currentIndex];
      currentIndex++;
      console.log(currentIndex);
    }, 2000);
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
  });
  //auto-back button
  let intervalBackward;
  autoBackBtn.addEventListener("click", function () {
    //currentIndex--
    intervalBackward = setInterval(function () {
      if (currentIndex == 0) {
        console.log(`${currentIndex} 0ici`);

        currentIndex--;
        image.src = images[currentIndex];
      } else if (currentIndex == 1 || currentIndex == 2) {
        console.log(`${currentIndex} 1v2ici`);

        currentIndex--;
        image.src = images[currentIndex];
      }
      //currentIndex--;
    }, 2000);
    console.log(`${currentIndex} out`);
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
  });
}

changeImages();
 */
//refactoring..
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;

function changeImages() {
  const image = document.getElementById("carousel-img");
  image.src = images[0];

  const forwardBtn = document.getElementById("forward-btn");
  const backBtn = document.getElementById("backward-btn");

  forwardBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.src = images[currentIndex];
  });

  backBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex == -1) {
      currentIndex = images.length - 1;
    }
    image.src = images[currentIndex];
  });

  //level-2
  const autoBackBtn = document.getElementById("auto-backward");
  const autoForwardBtn = document.getElementById("auto-forward");
  const stopBtn = document.getElementById("stop");

  stopBtn.addEventListener("click", function () {
    clearInterval(intervalForward);
    clearInterval(intervalBackward);
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
  });

  let intervalForward;
  autoForwardBtn.addEventListener("click", function () {
    intervalForward = setInterval(function () {
      currentIndex++
      currentIndex = (currentIndex) % images.length;
      image.src = images[currentIndex];
    }, 2000);
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
  });

  let intervalBackward;
  autoBackBtn.addEventListener("click", function () {
    intervalBackward = setInterval(function () {
      currentIndex--;
      if (currentIndex == -1) {
        currentIndex = images.length - 1;
      }
      image.src = images[currentIndex];
    }, 2000);
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
  });
}

changeImages();
