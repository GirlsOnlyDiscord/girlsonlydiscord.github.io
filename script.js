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

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navbarLinks = document.querySelectorAll('.navbar a');

  if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#0F0A2E';
      navbarLinks.forEach(function(link) {
          link.style.color = '#FFFFFF';
      });
  } else {
      navbar.style.backgroundColor = 'transparent';
      navbarLinks.forEach(function(link) {
          link.style.color = '#332C5C';
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  var navLinks = document.querySelectorAll('.navbar focus');

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Prevent default link behavior
          event.preventDefault();

          // Fade out the body
          document.body.style.transition = 'opacity 0.3s ease';
          document.body.style.opacity = 0;

          // Redirect to the target URL after a short delay
          setTimeout(function() {
              window.location.href = link.getAttribute('href');
          }, 300); // 300ms delay to match the transition duration
      });
  });
});