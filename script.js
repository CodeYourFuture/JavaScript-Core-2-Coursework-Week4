const body = document.querySelector("body");
const sites = [
  {
    title: "Alarm Clock",
    imageSrc: "./images/alarm-clock.png",
    imageAlt: "Image of the alarm clock page",
    siteLink: "./1-mandatory/1-alarmclock/index.html",
    linkText: "A countdown timer that allows you to choose a time and sounds an alarm when the time has ended, view the page "
  },
  {
    title: "Quote Generator",
    imageSrc: "./images/quote-generator.png",
    imageAlt: "Image of the quote generator page",
    siteLink: "./1-mandatory/2-quotegenerator/index.html",
    linkText:
      "A quote generator that displays a selection of quotes, either manually with a button click or automatically, view the page "
  },
  {
    title: "Slideshow",
    imageSrc: "./images/slideshow.png",
    imageAlt: "Image of the slideshow page",
    siteLink: "./1-mandatory/3-slideshow/index.html",
    linkText:
      "An image carousel with many options on how to navigate the images or stop it, view the page "
  },
];
sites.forEach(site => {
  let siteCard = document.createElement("section");
  siteCard.classList.add("site-card")
  siteCard.innerHTML = `<h1><a href="${site.siteLink}">${site.title}</a></h1><img src="${site.imageSrc}" alt="${site.imageAlt}" class="site-image"/><p>${site.linkText}<a href="${site.siteLink}">here</a></p>`;
  body.appendChild(siteCard);
})