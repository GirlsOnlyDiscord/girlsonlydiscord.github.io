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
      navbar.style.backgroundColor = 'rgb(53 10 10)';
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