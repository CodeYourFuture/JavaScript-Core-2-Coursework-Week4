  const imgSrcLoc = document.querySelector(".imageUrl");
  const imageposLoc = document.querySelector(".imagepos");
  
  let forwardOn = true;
  let backOn = false;
  let stopOn = false;
  let autoBackOn = false;
  let autoForwardOn = false;  
  let direction = 1; // 1 for forward, -1 for backward
  let intervalID;

  const FORWARD=1, BACK=2, STOP=3, AUTOFORWARD=4, AUTOBACK=5

  // An array of urls of cats
  const cats = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/200px-Cat_November_2010-1a.jpg",
                "https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg",
                "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/165/76/87490163.jpg",
                "https://cdn.someecards.com/posts/man-fakes-death-cat-q6U.png",           
                "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg",
                "http://www.bestpets.co/wp-content/uploads/2017/08/e38767b2d4005b865e1854c265e9ab7e.jpg",
                "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg",
                "http://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/03/07/catmoney.jpg",
                "https://assets.teenvogue.com/photos/5925af0bf5c4720abcde5c0b/3:2/w_1200,h_630,c_limit/cat-fb.jpg",
                "http://www.storytrender.com/wp-content/uploads/2017/11/6_CATERS_cats_and_bunnies_02-1024x829.jpg",
                "http://mcdaniel.hu/wp-content/uploads/2015/01/6784063-cute-cats-hd.jpg",
                "https://ichef.bbci.co.uk/news/660/cpsprodpb/FDD6/production/_100728946_catrelax.jpg",
                "https://www.alleycat.org/wp-content/uploads/2016/06/Facebook_Link_KittenProgression.jpg",
             // "http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg",
                "https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg",
                "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                "https://static.designboom.com/wp-content/uploads/2018/04/cat-VR-isobar-designboom-600.jpg",
                "https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg",
                "https://www.vetbabble.com/wp-content/uploads/2016/11/hiding-cat.jpg",
                "https://i.kinja-img.com/gawker-media/image/upload/s--kHrQ8nr7--/c_scale,f_auto,fl_progressive,q_80,w_800/18huxz4bvnfjbjpg.jpg",
                "http://mymodernmet.com/wp/wp-content/uploads/2017/11/minimalist-cat-art-subreddit-10.jpg",
                "https://www.rd.com/wp-content/uploads/2016/04/06-cat-wants-to-tell-you-gift.jpg",
                "https://i.ytimg.com/vi/5530I_pYjbo/maxresdefault.jpg",
                "http://www.cheatsheet.com/wp-content/uploads/2017/06/sulky-cat.jpg",
];


  document.getElementById("auto-forward").addEventListener("click", () => {
      newDirection(AUTOFORWARD); });

  document.getElementById("forward").addEventListener("click", () => {
      newDirection(FORWARD); });

  document.getElementById("auto-back").addEventListener("click", () => {
      newDirection(AUTOBACK); });

  document.getElementById("back").addEventListener("click", () => {
      newDirection(BACK); });

  document.getElementById("stop").addEventListener("click", () => {
      newDirection(STOP); });

  let howMany = cats.length;
  let pointer = 1;

  showImage(1); // Begin with the first image

  function nextImage() {
         if (forwardOn || autoForwardOn)
                ++pointer; // moving Forward
         else
                --pointer; // moving Backward

         if (direction > 0 && pointer > howMany)
                    pointer = 1 ; // repeat carousel cycle from the beginning
         
         else    
         if (direction < 0 && pointer < 1)       
                    pointer = howMany ; // repeat carousel cycle from the end

        showImage(pointer);
  }

  function showImage(imagepos) 
  {
         --imagepos; // correspond with the array
         imgSrcLoc.src = cats[imagepos];
         ++imagepos;
         imageposLoc.innerText = String(imagepos).padStart(3) + ' / ' + String(howMany).padStart(3); 
         // add a delay
         if (autoBackOn || autoForwardOn) 
         setTimeout(function()
         {
               ; // DO NOTHING;

          }, 6000);
  }

  function newDirection(option) {

         if (option !== STOP)
             if (autoBackOn || autoForwardOn) // Can only stop automatic navigation by pressing the 'Stop' button
                    return;                   // so ignore

         if (option === FORWARD)
         {
             if (!forwardOn) // if not already on!
             {
                backOn = false;
                stopOn = false; 
                forwardOn = true;
                direction = 1;
             }
            nextImage();
            return;
         }

         if (option === BACK)
         {
             if (!backOn) // if not already on!
             {
                forwardOn = false;
                stopOn = false; 
                backOn = true;
                direction = -1;
             }
            nextImage();
            return;
         }

         if (option === AUTOFORWARD)
         {
             if (!autoForwardOn) // if not already on!
             {
                forwardOn = false;
                backOn = false;
                stopOn = false; 
                autoForwardOn = true;
                direction = 1;
             }
            intervalID = setInterval(nextImage, 1000);
            return;
         }

         if (option === AUTOBACK)
         {
             if (!autoBackOn) // if not already on!
             {
                forwardOn = false;
                backOn = false;
                stopOn = false; 
                autoBackOn = true;
                direction = -1;
             }
            intervalID = setInterval(nextImage, 1000);
            return;
         }

         if (option === STOP)
         {
             if (!(autoBackOn || autoForwardOn)) // Just in case! :)
                    return;

             clearInterval(intervalID); // remove setInterval
             // default to Forward
             autoForwardOn = false;
             autoBackOn = false;
             forwardOn = true;
             direction = 1;
             return;
         }
  }