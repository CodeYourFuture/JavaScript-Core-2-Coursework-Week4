
var currentIndex = 0;
var intervalId;

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Greater_Zab_River_near_Erbil_Iraqi_Kurdistan.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hawraman_in_Iran_by_Mardetanha_%281%29_05.jpg/1024px-Hawraman_in_Iran_by_Mardetanha_%281%29_05.jpg",
  "https://images.unsplash.com/photo-1658219986909-f753bacffbc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80",
  "https://images.unsplash.com/photo-1653337164866-6a84baa0e199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1658932886768-6c7a0608a5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Abidar_winter.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Miyane_village.jpg/1280px-Miyane_village.jpg",
];
const captions = [
  "Greater Zab River near Erbil",
  "Hawraman Village",
  " Bradost Mountain, Erbil",
  "Halgurd Mountain",
  "Blue water, Diraluk",
  "Awyar, Sine",
  "Miyane Village",
];

const imageElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
const forwardButton = document.getElementById("forward");
const backButton = document.getElementById("back");
const autoForwardButton = document.getElementById("auto-forward");
const autoBackButton = document.getElementById("auto-back");
const stopButton = document.getElementById("stop"); 


function updateImage() {
  imageElement.src = images[currentIndex];
  captionElement.textContent = captions[currentIndex];
}

function moveForward() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
}

function moveBack() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateImage();
}

function startAutoForward() {
  intervalId = setInterval(moveForward, 2000);
}

function stopAutoForward() {
  clearInterval(intervalId);
}

function startAutoBack() { 
  intervalId = setInterval(moveBack, 2000);
}

function stopAutoBack() { 
  clearInterval(intervalId);
}

function stopSlideshow() {
  stopAutoForward();
  stopAutoBack(); 
}

forwardButton.addEventListener('click', moveForward);
backButton.addEventListener('click', moveBack);
autoForwardButton.addEventListener('click', startAutoForward);
autoBackButton.addEventListener('click', function() {
  stopAutoForward();
  startAutoBack(); 
});
stopButton.addEventListener('click', stopSlideshow);

updateImage();
