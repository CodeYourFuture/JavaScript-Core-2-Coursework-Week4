// Write your code here
let autoBackwardInterval;
let autoForwardInterval;

let pictures = [
  "https://images.unsplash.com/photo-1660563828193-c4ea4b73dd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1583855282680-6dbdc69b0932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1655844479061-21e164057c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1514241516423-6c0a5e031aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1661063394903-5399ca66f0eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

let description = [
  `A Cathedral in Lawang Sewu Sekayu,Semarang City, Central Java, Indonesia. Photo by <a href="https://unsplash.com/@nindyanggita?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nindya A A</a> featured in Arts and Culture on <a href="https://unsplash.com/@nindyanggita?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  `Sunset in Bellagio, Province of Como, Italy. Photo by <a href="https://unsplash.com/@julie_soul?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julia Solonina</a> featured in Editorial, Travel on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  `Danube River, Austria. Photo by <a href="https://unsplash.com/@linoleum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Linoleum Creative Collective</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  `Photo by <a href="https://unsplash.com/es/@vojtechbruzek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vojtech Bruzek</a> featured in Editorial, Textures & Patterns on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  `Good morning Nepal ~ Instagram @RaviNepz.Located in Arghakhanchi, Nepal.Photo by <a href="https://unsplash.com/@ravinepz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ravi Sharma</a> featured in Editorial, Travel on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  `Photo by <a href="https://unsplash.com/@schocob?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chonlatis B. Rarchanivach</a> featured in Arts and Culture on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
];

let counter = 0;

function goForward() {
  if (counter < pictures.length - 1) {
    counter++;
    document.getElementById("imageShow").src = pictures[counter];
    document.getElementById("description").innerHTML = description[counter];
    console.log(counter);
  } else {
    counter = 0;
    document.getElementById("imageShow").src = pictures[counter];
    document.getElementById("description").innerHTML = description[counter];
    console.log(counter);
  }
}

function goBackward() {
  if (counter > 0) {
    counter--;
    document.getElementById("imageShow").src = pictures[counter];
    document.getElementById("description").innerHTML = description[counter];
  } else {
    counter = pictures.length - 1;
    document.getElementById("imageShow").src = pictures[counter];
    document.getElementById("description").innerHTML = description[counter];
  }
}

document.getElementById("forwardBtn").addEventListener("click", goForward);
document.getElementById("backwardBtn").addEventListener("click", goBackward);

document.getElementById("autoForwardBtn").addEventListener("click", () => {
  autoForwardInterval = setInterval(goForward, 3000);
});

document.getElementById("autoBackwardBtn").addEventListener("click", () => {
  autoBackwardInterval = setInterval(goBackward, 3000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
});
