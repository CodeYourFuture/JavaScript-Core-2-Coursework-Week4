// Write your code here
    var slides = document.querySelectorAll('.slide');
        var currentSlide = 0;
        var timer;
        function showSlide() {
			    for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
			}

			slides[currentSlide].classList.add('active');
		}
        
        function nextSlide() {
			 currentSlide++;
             if (currentSlide >= slides.length) {
				currentSlide = 0;
			}

			showSlide();
		}

		
		function previousSlide() {
			currentSlide--;

			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}

			showSlide();
		}

		
            document.getElementById('forward').addEventListener('click', nextSlide);
            document.getElementById('back').addEventListener('click', previousSlide);
            
        function autoForward() {
         timer = setInterval(nextSlide, 1000);
        }

        function autoBack() {
         timer = setInterval(previousSlide, 1000);
        }
        function stopAuto() {
         clearInterval(timer);
        }


        document.getElementById('auto-forward').addEventListener('click', autoForward);
        document.getElementById('auto-back').addEventListener('click', autoBack);
        document.getElementById('stop').addEventListener('click', stopAuto);
