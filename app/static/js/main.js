// CTA Scroll
document.querySelectorAll('.btn-cta-1, .btn-cta-2').forEach(btn => {
  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile Nav Toggle with animated X
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active'); // for rotating bars into X
    });

    // Optional: close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }
});
