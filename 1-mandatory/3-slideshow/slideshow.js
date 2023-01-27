// Write your code here

//Keep it in mind that when you remove an active class from a slide, you are hiding it because of the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style display:none to display:block , so the slide will show to the users.
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
var photos = [
  "http://media.e2save.com/images/community/2014/11/flexible-screen-future-smartphones.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NQytNJPYSAkaht2oiKkn20Px4M5ombRRF3_TqyA1jZLBYDrBKuPa3it2Mmx5iDGgVkA&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNQ12pQMuTIGXkYsuDwa3hZAxMqzDkk4suq_P51yKGFsNVRlszGCXidV5QYgjm1QMyfQ&usqp=CAU",

  "http://www.infineon.com/export/sites/default/_images/about-infineon/stories/Internet-of-Things-2030/Internet_of_Things_2030_1600.jpg_1719663686.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxrzT6YBF7-i35mD63vXj-aN1uEElvxtFcg&usqp=CAU",

  "https://www.gep.com/prod/s3fs-public/blog-images/vision-or-delusion-how-future-technology-varies-from-present-day-expectations.jpg",

  "https://www.datocms-assets.com/8576/1584733495-blog6future-of-smart-cities2.jpg?auto=format&w=860",

  "https://images.interestingengineering.com/img/iea/XD6Kj2j1Gv/futuretechnology294ces.jpg",

  "https://imeetcentral.com/wp-content/uploads/2014/07/Blog_Futuristic-marketing-trends.jpg",

  "https://images.seattletimes.com/wp-content/uploads/2019/07/tech_0725.jpg?d=1560x1169",

  "https://bauensolutions.com/wp-content/uploads/2019/01/Technology-Projects-you-can-do-in-2020-sentient-robot-thinking.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRDRuQF7MX0bWQ0_UxsMKNkAzYDO6N-vXHh5q1qI9tqEdnybPKYOQo8WsuDB3hrbVAXw&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_df2oNeY2pik7AjrEP_AnXjKlXBzD-SJX2n6s4D72Nmdb8x1S9rq-xjjfOkfG9cFAoLg&usqp=CAU",

  "https://pixel77.com/wp-content/uploads/2015/01/5-Futuristic-Technologies-You-May-See-In-Your-Lifetime-1.jpg",
];


var imgTag = document.querySelector("img");
var count = 0;

function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}


function startAutoForward() {
  clearInterval(intervalId);
  document.getElementById("#auto-forward").addEventListener("click", startAutoForward);
  intervalId = setInterval(photos, 3000);

}

function startAutoBack() {
  clearInterval(intervalId);
  
  document.getElementById("#auto-back").addEventListener("click", startAutoBack);
intervalId = setInterval("#auto-back", 3000);
}

function stopSlideshow() {
  clearInterval(intervalId);
  document.getElementById("#stop").addEventListener("click", stopSlideshow);

}

// document.getElementById("#prev").addEventListener("click", prev);
// document
//   .getElementById("#auto-forward")
//   .addEventListener("click", startAutoForward);
