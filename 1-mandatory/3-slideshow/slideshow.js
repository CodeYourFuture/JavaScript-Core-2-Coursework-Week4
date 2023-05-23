// Write your code here
// Define the image URLs
const images = [
    "assets/cute-cat-a.png",
    "assets/cute-cat-b.jpg",
    "assets/cute-cat-c.jpg"
  ];
  function setup() {
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.addEventListener("click", backBtn);
    buttons.appendChild(backButton);
  
    const forwardButton = document.createElement("button");
    forwardButton.textContent = "Forward";
    forwardButton.addEventListener("click", forwardBtn);
    buttons.appendChild(forwardButton);

    const autoForwardButton = document.createElement("button");
    autoForwardButton.textContent = "Auto Forward";
    autoForwardButton.addEventListener("click", startAutoForward);
    buttons.appendChild(autoForwardButton);
  
    const autoBackButton = document.createElement("button");
    autoBackButton.textContent = "Auto Back";
    autoBackButton.addEventListener("click", startAutoBack);
    buttons.appendChild(autoBackButton);
  
    displayImage();
  }
  
  let currentIndex = 0;
  const buttons = document.getElementById("buttons");
  
  function displayImage() {
    const wholePage = document.getElementById("whole-page");
    wholePage.innerHTML = "";
    const imageElement = document.createElement("img");
  
    imageElement.src = images[currentIndex];
    wholePage.appendChild(imageElement);
  }
  
  function backBtn() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    displayImage();
  }
  
  function forwardBtn() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    displayImage();
  }
  
  function autoForward() {
    forwardBtn();
  }
  
  function autoBack() {
    backBtn();
  }
  function startAutoForward() {
    autoForward();
    setInterval(autoForward, 5000);
  }
  
  function startAutoBack() {
    autoBack();
    setInterval(autoBack, 5000);
}
  
  window.onload = setup;
  
  
  