(function() {

    // ---------------------------------------------------------
    // Define Constants 
  
    const MS_SLIDES = '.ms-slides'
    const MS_SLIDES_INNER = '.ms-slides__inner'
    const MS_SLIDES_NEXT_BUTTON = '.ms-slides__next-button'
    const MS_SLIDES_PREV_BUTTON = '.ms-slides__prev-button'
    const MS_SLIDES_INDICATORS = '.ms-slides__indicators'
    const BUTTON_COLOR = 'rgba(255,255,255,0.5)'
    const BUTTON_COLOR_SELECTED = 'rgba(255,255,255,1.0)'
  
    // ---------------------------------------------------------
    // Make Slides 
//     const btnNext = document.querySelector("next");
//         const btnPrev = document.querySelector("prev");
//   // "#auto"
//          const btnStop = document.querySelector("stop");
  
    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector(MS_SLIDES_INNER)
        const images = slidesInner.querySelectorAll('*')
  
        // ---------------------------------
        // Setup buttons 
        const nextButton = slides.querySelector(MS_SLIDES_NEXT_BUTTON)
        const prevButton = slides.querySelector(MS_SLIDES_PREV_BUTTON)
        console.log(slides)
  
        if (nextButton !== null) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault()
                // clear the interval
                // add a new interval
                nextSlide()
            })
        }
  
        if (prevButton !== null) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault()
                prevSlide()
            })
        }
        // ---------------------
        // Setup indicators 
  
        const indicatorContainer = slides.querySelector(MS_SLIDES_INDICATORS)
        const indicators = []
        if (indicatorContainer !== null) {
            for (let i = 0; i < images.length; i += 1) {
                const li = document.createElement('li') // <li>
                indicatorContainer.appendChild(li)
                indicators.push(li)
            }
            indicators[0].style.backgroundColor = BUTTON_COLOR_SELECTED
        }
  
        // ---------------------
        // Setup timer 
  
        let delay = parseInt(slides.dataset.delay)
        let transition = parseInt(slides.dataset.transition)
  
        if (slides.dataset.delay === null) {
          delay = 3000
        }
  
        if (slides.dataset.transition === null) {
          transition = 400
        }
  
        slidesInner.style.transition = `${transition}ms`
  
        const slidesWidth = slides.clientWidth
        
        let index = 0
  
        if (!isNaN(delay) && delay > 0) {
          setInterval(nextSlide, delay)
        } 
          
        // clearInterval(interval)
  
        // ------------------------
  
        function nextSlide() {
            index += 1
            if (index === images.length) {
                index = 0
            }
            showSlide()
        }
  
        function prevSlide() {
            index -= 1
            if (index < 0) {
                index = images.length - 1
            }
            showSlide()
        }
  
        function showSlide() {
            // CSS - transform : translate3d(0, 0, 0);
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
            // console.log(index * -slidesWidth)
            indicators.forEach(function(el, i) {
                if (i === index) {
                    el.style.backgroundColor = BUTTON_COLOR_SELECTED
                } else {
                    el.style.backgroundColor = BUTTON_COLOR
                }
            })
        }
  
    } // end makeSlideshow
    // ------------------------------------------------------------
  
    // ------------------------------------------------------------
    // Initialize Slides 
  
    const slideshows = document.querySelectorAll(MS_SLIDES)
  
    for (let i = 0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i])
    }
  
  })() // IIFE
  
  
  