document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    section.addEventListener('click', () => {
      section.classList.add('bubble-click');
      setTimeout(() => {
        section.classList.remove('bubble-click');
      }, 500);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});
