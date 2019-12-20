AOS.init();

      window.onscroll = function() {
        scrollFunction();
      };

      const scrollFunction = () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.querySelector(".hamburger-nav").style.display = "block";
        } else {
          document.querySelector(".hamburger-nav").style.display = "none";
        }
      };

      document.querySelectorAll(".menu a").forEach(tag => {
        tag.addEventListener("click", () => {
          document.querySelector("#toggle").checked = false;
        });
      });

      document.querySelector('.show-hide').addEventListener('click', () => {
    

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};


      })

      const scroll = new SmoothScroll('a[href*="#"]');
      const typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        loopCount: Infinity,
        smartBackspace: true
      });