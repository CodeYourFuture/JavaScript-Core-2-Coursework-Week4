//how to read an external json file locally

// THIS IS THE SLIDE SHOW  - script from tv stuff

fetch(`https://picsum.photos/v2/list`)
  .then((response) => {
    images = response.json();
    //

    // for (image in images) console.log(image);
    console.log(images[1].author);
    return images;
  })
  .then((json) => {
    console.log(json);
  });

console.log(`i am running`);

// //You can edit ALL of the code here
// function setup() {

//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   //test page
//   // const rootElem = document.getElementById("root");
//   // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

//   // image
//   //for in - to loop over the episodes
//   episodes = episodeList;
//   for (let episode of episodeList) {
//     console.log(episode);

//     // create a image and clone it
//     let image = document.querySelector(`.image`).cloneNode(true);
//     //removing the template visibility (this needs to remain as a placeholder for javascript)
//     image.classList.remove(`template`);

//     // set the image ID to the episode ID  ( first args the thing I need to change, the second is its value ~ from a key value pair)
//     image.setAttribute(`id`, `img-num` + episode.id); //not visible

//     //update author
//     image.querySelector(`.author`).innerHTML = episode.name;

//     // combine season number and episode number into an episode code  e.g S02E07 becomes S2E7
//     // update season and episode Number
//     image.querySelector(`.width`).innerHTML =
//       `W` + episode.season + `H` + episode.number;

//     //update image
//    image.querySelector(`img`).src = episode.image.medium;
//     // append other elements in the image
//     document.querySelector(`.wrapper`).appendChild(image);
//   }
// }

// // //Show Selector
// // //filter shows list and search

// // //search support (start-of-word) using includes - search
// // document.querySelector(`.s-name`).addEventListener("input", function (e) {
// //   for (let episode of episodes) {
// //     //if episode name - includes - this value
// //     if (episode.name.toLowerCase().includes(this.value.toLowerCase())) {
// //       //remove the - hide class - this knows it is a class so you do not need the `.`
// //       //Using querySelector with IDs that are numbers
// //       document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
// //     } else {
// //       //adds the - hide class
// //       document.querySelector(`#episode` + episode.id).classList.add(`hide`);
// //     }
// //   }
// // });

// // //season selector
// // document.querySelector(`.s-seasons`).addEventListener("input", function (e) {
// //   for (let episode of episodes) {
// //     //if seaseon has this value - using parseInt() function parses a string argument and returns an integer
// //     if (episode.season === parseInt(this.value)) {
// //       //remove the - hide class
// //       document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
// //     } else {
// //       //adds the - hide class
// //       document.querySelector(`#episode` + episode.id).classList.add(`hide`);
// //     }
// //   }
// // });

// // //episode selector
// // document.querySelector(`.s-episodes`).addEventListener("input", function (e) {
// //   for (let episode of episodes) {
// //     //if episode seaseon - includes - this value
// //     if (episode.season === parseInt(this.value)) {
// //       //remove the - hide class
// //       document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
// //     } else {
// //       //adds the - hide class
// //       document.querySelector(`#episode` + episode.id).classList.add(`hide`);
// //     }
// //   }
// });

// window.onload = setup;

// //fetching live data - another version
