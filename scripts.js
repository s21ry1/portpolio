const about = document.querySelector('.about');
const aboutText = about.querySelector('p');

about.addEventListener('mouseenter', function() {
  aboutText.style.opacity = 0;
  aboutText.style.transition = 'opacity 0.3s ease-out';
});

about.addEventListener('mouseleave', function() {
  aboutText.style.opacity = 1;
});