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

      const scroll = new SmoothScroll('a[href*="#"]');
      const typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        loopCount: Infinity,
        smartBackspace: true
      });