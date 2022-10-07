let images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  ];
  
  let counter = 0;
  let forwardIntervId;
  let backIntervId;
  
  let picture = document.querySelector(".picture");
  let ul = document.createElement("ul");
  picture.appendChild(ul);
  let li = document.createElement("li");
  ul.appendChild(li);
  let img = document.createElement("img");
  img.style.width = "600px";
  img.style.height = "600px";
  img.src = images.map((i) => i);
  li.appendChild(img);
  
 
  document.querySelector(".forwardButton").addEventListener("click", loopForward);
  document.querySelector(".backButton").addEventListener("click", loopBack);
  document
    .querySelector(".autoForwardButton")
    .addEventListener(
      "click",
      () => (forwardIntervId = setInterval(loopForward, 1000))
    );
  document
    .querySelector(".autoBackButton")
    .addEventListener(
      "click",
      () => (backIntervId = setInterval(loopBack, 1000))
    );
  
  function loopForward() {
    counter++;
    if (counter >= images.length) counter = 0;
    img.src = images[counter];
  }
  
  function loopBack() {
    if (counter <= 0) {
      counter = images.length;
    }
    counter--;
    img.src = images[counter];
  }
  
  document.querySelector(".stopButton").addEventListener("click", () => {
    clearInterval(forwardIntervId);
    clearInterval(backIntervId);
  });