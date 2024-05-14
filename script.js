let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pics");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

const navbar = document.querySelector('.navbar');
const originalBgColor = window.getComputedStyle(navbar).backgroundColor;
const originalTextColor = window.getComputedStyle(navbar.querySelector('a')).color;

// Function to change navbar colors on scroll
function changeNavbarColors() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Check if scroll position is twice the height of the navbar
  if (scrollPosition > 2 * navbar.clientHeight) {
      navbar.style.backgroundColor = '#0F0A2E';
      navbar.querySelectorAll('a').forEach(link => {
          link.style.color = '#FFFFFF';
      });
  } else {
      // Revert back to original colors
      navbar.style.backgroundColor = originalBgColor;
      navbar.querySelectorAll('a').forEach(link => {
          link.style.color = originalTextColor;
      });
  }
}

// Add scroll event listener
window.addEventListener('scroll', changeNavbarColors);