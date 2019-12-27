// anime on scroll
AOS.init();

// show/hide hamburger menu
window.onscroll = function() {
  scrollFunction();
};

// DOM selects
const showHide = document.querySelector(".show-hide");
const hiddenContent = document.querySelector(".hidden-content");
// hiding extra content
hiddenContent.style.display = "none";

// if the user scroll pass the header, top nav goes away replaced by hamburger nav
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".hamburger-nav").style.display = "block";
  } else {
    document.querySelector(".hamburger-nav").style.display = "none";
  }
};

// clicking on a a tag in hamburger will close the hamburger slide
document.querySelectorAll(".menu a").forEach(tag => {
  tag.addEventListener("click", () => {
    document.querySelector("#toggle").checked = false;
  });
});

// show and hide extra projects
showHide.addEventListener("click", () => {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    showHide.textContent = "Read Less";
  } else {
    hiddenContent.style.display = "none";
    showHide.textContent = "Would you like more ?";
  }
});

// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');
// typed js
const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
  loopCount: Infinity,
  smartBackspace: true
});
