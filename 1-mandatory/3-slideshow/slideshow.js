// Write your code here

let index = 0;
function basicStructure(array) {
  //Creating containers
  const parentDiv = document.createElement("div");
  const ChildDiv = document.createElement("div");
  const section_h1And_img = document.createElement("section");
  const h1El = document.createElement("h1");
  const imgEl = document.createElement("img");
  const section_Buttons = document.createElement("section");
  const pEl = document.createElement("p");

  // setting attributes
  parentDiv.setAttribute("id", "parentDiv");
  ChildDiv.setAttribute("id", "ChildDiv");
  section_h1And_img.setAttribute("id", "section_h1And_img");
  h1El.setAttribute("id", "h1El");
  imgEl.setAttribute("id", "imgEl");
  imgEl.setAttribute("name", "imagePlace");
  pEl.setAttribute("id", "pEl");
  section_Buttons.setAttribute("id", "section_Buttons");

  //creating buttons
  let autoBackBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const stopButton = document.createElement("button");
  const forwardBtn = document.createElement("button");
 var autoForwardBtn = document.createElement("button");

  // setting inside text
  autoBackBtn.innerText = "Auto Back";
  backBtn.innerText = "Back";
  stopButton.innerText = "Stop";
  forwardBtn.innerText = "Forward";
  autoForwardBtn.innerText = "Auto Forward";

  //appending each other

  // section one
  section_h1And_img.appendChild(h1El);
  section_h1And_img.appendChild(imgEl);
  section_h1And_img.appendChild(pEl);

  //section two
  section_Buttons.appendChild(autoBackBtn);
  section_Buttons.appendChild(backBtn);
  section_Buttons.appendChild(stopButton);
  section_Buttons.appendChild(forwardBtn);
  section_Buttons.appendChild(autoForwardBtn);

  //append the two section to their parent Div
  ChildDiv.appendChild(section_h1And_img);
  ChildDiv.appendChild(section_Buttons);

  // appending child div to the parent div which is the main container
  parentDiv.appendChild(ChildDiv);

  // Appending parentDive to the body
    document.body.appendChild(parentDiv);
    
    // for initialisation 
    imgEl.src = array[index];
    
    
  //Forward button
  forwardBtn.addEventListener("click", function () {
    imgEl.src = array[index];
    index < array.length - 1 ? index++ : (index = 0);
  });

  // backward button
  backBtn.addEventListener("click", function () {
    imgEl.src = array[index];
    index <= 0 ? index = array.length - 1 : index--;
  });

}

//create array of Images;
const Images = [
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",
  "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775__480.jpg",
  "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888__480.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952__480.jpg",
];

basicStructure(Images);
